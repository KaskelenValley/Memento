import { Container, styled, TextField, Typography } from "@mui/material";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import { Button } from "../components/Buttons/Button";
import CloseButton from "../components/Buttons/CloseButton";
import { UploadIcon } from "../icons";
import { auth, db, storage } from "../utils/firebase";

const WritingPage = () => {
  const { push } = useRouter();
  const [isStart, setIsStart] = useState(false);
  const [user] = useAuthState(auth);
  const [value, setValue] = useState("");
  const [file, setFile] = useState<File>();
  const id = new Date().valueOf().toString();
  const storageRef = ref(storage, id);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSetImage = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    setFile(files[0]);
  };

  return (
    <StyledContainer>
      <CloseButton position="top-right" onClick={() => push("main")} />
      {!isStart ? (
        <>
          <Typography
            sx={{
              fontFamily: "Georgia",
              fontWeight: 700,
              fontSize: 20,
              mt: 1.625,
            }}
            align="center"
          >
            Practicing writing
          </Typography>
          <DescriptionContainer>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: 18,
                mt: 1,
              }}
            >
              01
            </Typography>
            <Description>
              <StyledHr />
              <DescriptionContent>
                <Typography
                  sx={{
                    fontFamily: "Georgia",
                    fontWeight: 700,
                    fontSize: 20,
                  }}
                >
                  Description
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Georgia",
                    fontWeight: 400,
                    fontSize: 16,
                    lineGeight: "18px",
                  }}
                >
                  The practice of writing is an effective and accessible way for
                  everyone to change their lives for the better in a short time.
                </Typography>
              </DescriptionContent>
            </Description>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: 18,
                mt: 1,
                color: "rgba(44, 44, 44, 0.4)",
              }}
            >
              02
            </Typography>
            <Description>
              <StyledHr />
              <DescriptionContent>
                <Typography
                  sx={{
                    fontFamily: "Georgia",
                    fontWeight: 700,
                    fontSize: 20,
                  }}
                >
                  Instruction
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Georgia",
                    fontWeight: 400,
                    fontSize: 16,
                    lineGeight: "18px",
                  }}
                >
                  Write down three things you are thankful for a couple of times
                  a week. We need to focus on descriptions of details
                </Typography>
              </DescriptionContent>
            </Description>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: 18,
                mt: 1,
                color: "rgba(44, 44, 44, 0.4)",
              }}
            >
              03
            </Typography>
            <Description>
              <StyledHr />
              <DescriptionContent>
                <Typography
                  sx={{
                    fontFamily: "Georgia",
                    fontWeight: 700,
                    fontSize: 20,
                  }}
                >
                  Example
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Georgia",
                    fontWeight: 400,
                    fontSize: 16,
                    lineGeight: "18px",
                  }}
                >
                  If it's food we're thankful for, we describe the taste. If
                  it's a relationship, you describe a moment you felt happy
                </Typography>
              </DescriptionContent>
            </Description>
          </DescriptionContainer>
          <Button sx={{ mt: 4 }} onClick={() => setIsStart(true)}>
            Let's start
          </Button>
        </>
      ) : (
        <>
          <Typography
            sx={{
              fontFamily: "Georgia",
              fontWeight: 700,
              fontSize: 20,
              mt: 1.625,
            }}
            align="center"
          >
            Writing
          </Typography>
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: 14,
              textTransform: "uppercase",
              color: "#B6BAC3",
            }}
            align="center"
          >
            {new Date().toLocaleString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
            })}
          </Typography>
          <StyledTextField
            variant="standard"
            placeholder="I am grateful for..."
            multiline
            value={value}
            onChange={handleChange}
          />
          <UploadButton variant="outlined" as={"label"}>
            <UploadIcon />
            Add a photo
            <input type="file" onChange={(e) => handleSetImage(e)} hidden />
          </UploadButton>
          <Button
            variant="contained"
            sx={{
              position: "absolute",
              bottom: "44px",
              left: "50%",
              transform: "translate(-50%, 0)",
              width: "90%",
            }}
            onClick={() => {
              if (file) {
                uploadBytes(storageRef, file).then((snapshot) => {
                  getDownloadURL(storageRef).then((url) => {
                    updateDoc(doc(db, "users", user.uid), {
                      records: arrayUnion({
                        id: new Date().getTime().toString(),
                        title: "Writing",
                        result: value,
                        date: new Date(),
                        type: "writing",
                        imgSrc: url,
                      }),
                    }).then(() => push("records"));
                  });
                });
              } else {
                updateDoc(doc(db, "users", user.uid), {
                  records: arrayUnion({
                    id: new Date().getTime().toString(),
                    title: "Writing",
                    result: value,
                    date: new Date(),
                    type: "writing",
                  }),
                }).then(() => push("records"));
              }
            }}
          >
            Save Reflection
          </Button>
        </>
      )}
    </StyledContainer>
  );
};

export default WritingPage;

const StyledContainer = styled(Container)`
  padding: 25px 25px 50px 25px;
`;

const StyledHr = styled("hr")`
  height: 140px;
  border: 1px solid rgba(44, 44, 44, 0.25);
  width: 1px;
  margin: 0 24px 0 10px;
`;

const DescriptionContainer = styled("div")`
  margin: 50px 0 8px;
`;

const Description = styled("div")`
  display: flex;
  margin-top: 8px;
`;

const DescriptionContent = styled("div")``;

const StyledTextField = styled(TextField)`
  width: 100%;
  margin: 40px 0 32px;

  .MuiInput-root {
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
  }

  .MuiInput-root:before,
  .MuiInput-root:after,
  .MuiInput-root:hover:not(.Mui-disabled):before {
    border-bottom: none;
  }
`;

const UploadButton = styled(Button)`
  background: #f9f9f9;
  border-radius: 8px;
  padding: 14px 16px;
  font-weight: 500;
  font-size: 12px;
  text-align: center;
  width: fit-content;
  display: flex;

  & > svg {
    margin-right: 10px;
  }
`;
