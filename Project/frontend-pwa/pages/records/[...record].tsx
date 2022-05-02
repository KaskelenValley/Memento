import {
  Container,
  IconButton,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore";
import { getBlob, ref } from "firebase/storage";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";

import CloseButton from "../../components/Button/CloseButton";
import { DoneIcon, EditRecordIcon, TranslateIcon } from "../../icons";
import { auth, db, storage } from "../../utils/firebase";

const Record: React.FC = () => {
  let docRef;

  const { push, query } = useRouter();
  const [user, loading] = useAuthState(auth);
  const [record, setRecord] = useState<any>();
  const [updateMode, setUpdateMode] = useState(false);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [res, setRes] = useState("");
  const [translated, setTranslated] = useState(false);

  if (user) {
    docRef = doc(db, "users", user.uid);
  }

  useEffect(() => {
    if (!loading) {
      const unsubscribe = onSnapshot(
        doc(db, "users", user.uid),
        async (doc) => {
          const data = doc.data().records;

          if (data) {
            for (const d of data) {
              if (d.type === "default" && d.id === query.record[0]) {
                const blob = await getBlob(ref(storage, d.id));
                setRecord({ ...d, blob });
                setTitle(d.title);
                setText(d.result);
                setRes(d.result);
              } else if (
                (d.type === "gratitude" || d.type === "writing") &&
                d.id === query.record[0]
              ) {
                setRecord(d);
                setTitle(d.title);
                setText(d.result);
                setRes(d.result);
              }
            }
          }
        }
      );

      return () => unsubscribe();
    }
  }, [loading]);

  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const updateRecord = async () => {
    const docSnap: any = await getDoc(docRef);
    const records = docSnap.data().records;

    const updated = records.map((r) => {
      if (r.id === query.record[0]) {
        return {
          ...r,
          title,
          result: text,
        };
      }
      return r;
    });

    updateDoc(doc(db, "users", user.uid), {
      records: updated,
    });

    alert("Updated!");
  };
  console.log(record, res);
  return (
    <StyledContainer>
      <CloseButton position="top-right" onClick={() => push("/records")} />
      <DateTypography align="center">
        {record &&
          new Date(record.date.toDate()).toLocaleString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
          })}
      </DateTypography>
      {!updateMode ? (
        <>
          {record?.imgSrc && (
            <Image
              src={record.imgSrc}
              layout="responsive"
              width="100%"
              height="100%"
            />
          )}
          {record?.src && (
            <StyledAudioPlayer
              src={record?.src ? URL.createObjectURL(record.blob) : ""}
              showJumpControls={false}
              showDownloadProgress={false}
              autoPlayAfterSrcChange={false}
              customProgressBarSection={[
                RHAP_UI.MAIN_CONTROLS,
                RHAP_UI.PROGRESS_BAR,
              ]}
              customControlsSection={[
                RHAP_UI.CURRENT_TIME,
                <div>/</div>,
                RHAP_UI.DURATION,
              ]}
            />
          )}
          {record?.title && (
            <StyledBox>
              <Typography
                sx={{
                  fontFamily: "Georgia",
                  fontWeight: 700,
                  fontSize: "20px",
                  lineHeight: "30px",
                }}
                gutterBottom
              >
                {record.title}
              </Typography>
              <StyledIcon
                onClick={() => {
                  fetch(
                    "https://memento-translator-dev.herokuapp.com/translate",
                    {
                      method: "POST",
                      body: JSON.stringify({
                        text: record.result,
                        source_lang: "ru",
                        target_lang: "en",
                      }),
                      headers: { "Content-Type": "application/json" },
                    }
                  )
                    .then((res) => res.json())
                    .then((res) => {
                      setRes(res.text);
                      setTranslated(true);
                    });
                }}
              >
                <TranslateIcon />
              </StyledIcon>
            </StyledBox>
          )}
          <Typography
            sx={{ fontWeight: 300, fontSize: "16px", lineHeight: "30px" }}
          >
            {res}
          </Typography>
          {translated && (
            <Typography
              onClick={() => {
                setRes(record?.result);
                setTranslated(false);
              }}
            >
              Show original
            </Typography>
          )}
          <StyledIconButton onClick={() => setUpdateMode(true)}>
            <EditRecordIcon />
          </StyledIconButton>
        </>
      ) : (
        <>
          <TitleTextField
            placeholder="Title..."
            value={title}
            onChange={handleChangeTitle}
          />
          <TextTextField
            placeholder="Text..."
            minRows={12}
            value={text}
            multiline
            onChange={handleChange}
          />
          <StyledIconButton
            onClick={() => {
              updateRecord();
              setUpdateMode(false);
            }}
          >
            <DoneIcon />
          </StyledIconButton>
        </>
      )}
    </StyledContainer>
  );
};

export default Record;

const StyledContainer = styled(Container)`
  padding: 45px 16px;
  display: flex;
  flex-direction: column;
`;

const HeadContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 38px;
  position: relative;

  button {
    position: absolute;
    right: 0;
  }
`;

const StyledIconButton = styled(IconButton)`
  background: #accec8;
  width: 80px;
  height: 80px;
  position: absolute;
  bottom: 54px;
  right: 16px;
`;

const DateTypography = styled(Typography)`
  font-weight: 500;
  font-size: 14px;
  text-transform: uppercase;
  color: #8f8f8f;
`;

const StyledAudioPlayer = styled(AudioPlayer)`
  margin: 30px 0 60px;

  button {
    color: #acc4ce;
  }

  &.rhap_container {
    box-shadow: none;
    padding: 0;
  }

  .rhap_main-controls-button {
    margin: 0 8px 0 0;
  }

  .rhap_progress-indicator {
    width: 8px;
    height: 8px;
    top: -1.5px;
    margin-left: -5px;
  }

  .rhap_progress-container {
    margin: 0;
  }

  .rhap_controls-section {
    justify-content: end;
    margin-top: 0 !important;

    & > div {
      font-weight: 400;
      font-size: 12px;
      color: #a3a3a3;
    }
  }

  .rhap_progress-filled {
    background-color: #acc4ce;
    background: #acc4ce;
    border-radius: 8px;
  }

  .rhap_progress-indicator {
    background: #acc4ce;
    box-shadow: none;
  }
`;

const TitleTextField = styled(TextField)`
  margin: 52px 0 24px;
  width: 100%;

  input {
    background: #f9f9f9;
    border-radius: 20px;
    padding: 25px 21px;
    font-family: "Georgia";
    font-weight: 700;
    font-size: 20px;
  }

  fieldset {
    border: none;
  }
`;

const TextTextField = styled(TextField)`
  width: 100%;

  & > div {
    padding: 0;
  }

  textarea {
    background: #f9f9f9;
    border-radius: 20px;
    padding: 25px 21px;
    font-weight: 300;
    font-size: 16px;
    line-height: 30px;
  }

  fieldset {
    border: none;
  }
`;

const StyledBox = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledIcon = styled(IconButton)`
  width: 38px;
  height: 38px;
  background: #f6f7f8;
  border-radius: 12px;
`;
