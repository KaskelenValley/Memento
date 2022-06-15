import { useState, useEffect } from "react";
import {
  Button,
  CircularProgress,
  Container,
  css,
  InputAdornment,
  Modal,
  styled,
  TextField,
  Typography,
  Box,
} from "@mui/material";
import { doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore";
import { deleteObject, getBlob, ref } from "firebase/storage";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";

import { auth, db, storage } from "../../utils/firebase";
import { DeleteIcon, RecordWaveIcon, SearchIcon, ShareIcon } from "../../icons";
import CloseButton from "../../components/Buttons/CloseButton";
import { RecordCard } from "../../components/RecordCard";
import { groupByDate } from "../../utils";
import { Navbar } from "../../components/Navbar/Navbar";

const Records = (props) => {
  const [records, setRecords] = useState<any>();
  const [filtered, setFiltered] = useState<any>();
  const [open, setOpen] = useState(false);
  const [currentRecord, setCurrentRecord] = useState<any>();
  const [user, loading] = useAuthState(auth);
  const { push } = useRouter();

  let docRef;

  if (user) {
    docRef = doc(db, "users", user.uid);
  }

  const handleOpen = (record) => {
    setOpen(true);
    setCurrentRecord(record);
  };

  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (!loading) {
      const unsubscribe = onSnapshot(
        doc(db, "users", user.uid),
        async (doc) => {
          const arr = [];
          const data = doc.data()?.records;

          if (data) {
            for (const d of data) {
              if (d.type === "default") {
                const blob = await getBlob(ref(storage, d.id));
                arr.push({ ...d, blob });
              } else {
                arr.push(d);
              }
            }
          }

          arr.sort((a, b) => b.date.toDate() - a.date.toDate());

          setRecords(arr);
          setFiltered(groupByDate(arr));
        }
      );

      return () => unsubscribe();
    }
  }, [loading]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const filteredArr = records.filter((e) =>
      (e.result + e.title).toLowerCase().includes(event.target.value)
    );
    setFiltered(groupByDate(filteredArr));
  };

  const deleteRecord = async (id) => {
    const docSnap: any = await getDoc(docRef);
    const records = docSnap.data().records;
    const filtered = records.filter((r) => r.id !== id);
    updateDoc(doc(db, "users", user.uid), {
      records: filtered,
    });
    deleteObject(ref(storage, id)).catch((err) => console.log(err));
    alert("Deleted!");
    handleClose();
  };

  const shareRecord = (record: any) => {
    if (navigator.share) {
      navigator
        .share({
          title: record.title,
          text: `${record.title}\n\n${record.result}\n\n${record.date
            .toDate()
            .toLocaleString("en-US", {
              weekday: "long",
            })}/${record.date.toDate().toLocaleString("en-US", {
            month: "short",
            day: "numeric",
          })}`,
        })
        .then(handleClose)
        .catch((error) => console.log("Error sharing", error));
    }
  };

  return (
    <StyledContainer>
      <CloseButton position="top-right" onClick={() => push("main")} />
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: "54px",
          color: "rgba(44, 44, 44, 0.1)",
          mb: 4,
        }}
        align="center"
      >
        Your entries
      </Typography>
      <SearchTextField
        onChange={handleChange}
        placeholder="Search"
        type="search"
        sx={{ width: "100%" }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <RecordsContainer>
        {filtered && Object.keys(filtered).length === 0 && (
          <Typography>There is no records</Typography>
        )}
        {filtered ? (
          Object.entries(filtered).map(([date, arr]) => (
            <>
              <DateContainer>
                <Typography
                  sx={{
                    fontFamily: "Georgia",
                    fontWeight: 700,
                    fontSize: 13,
                  }}
                >
                  {`${new Date(date).toLocaleString("en-US", {
                    weekday: "long",
                  })}/${new Date(date).toLocaleString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}`}
                </Typography>
              </DateContainer>
              {(arr as any).map((record, i) => {
                return (
                  <RecordContainer key={i}>
                    <CardContainer>
                      <RecordWaveIcon />
                      <Typography
                        sx={{
                          fontWeight: 500,
                          fontSize: "13px",
                          color: "#69696A",
                          ml: 1,
                        }}
                      >
                        {record.date.toDate().toLocaleTimeString("en-US", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </Typography>
                    </CardContainer>
                    <CardWrapper>
                      <StyledHr />
                      <RecordCard record={record} handleOpen={handleOpen} />
                    </CardWrapper>
                  </RecordContainer>
                );
              })}
            </>
          ))
        ) : (
          <CircularProgress />
        )}
      </RecordsContainer>
      <StyledModal open={open} onClose={handleClose}>
        <StyledBox>
          <ModalButton
            variant="text"
            style={{ fontWeight: 500, fontSize: 16 }}
            startIcon={<ShareIcon />}
            onClick={() => shareRecord(currentRecord)}
          >
            Share
          </ModalButton>
          <ModalButton
            variant="text"
            style={{ fontWeight: 500, fontSize: 16 }}
            startIcon={<DeleteIcon />}
            onClick={() => deleteRecord(currentRecord.id)}
          >
            Delete
          </ModalButton>
        </StyledBox>
      </StyledModal>
      <Navbar />
    </StyledContainer>
  );
};

export default Records;

export const getServerSideProps = async function ({ req, res }) {
  return {
    props: {},
  };
};

const StyledContainer = styled(Container)`
  ${({ theme }) => css`
    padding: 60px ${theme.spacing(2.5)} 120px;
  `}
`;

const RecordsContainer = styled("div")`
  ${({ theme }) => css`
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    margin: 20px 0 0;
  `}
`;

const RecordContainer = styled("div")`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  `}
`;

const CardContainer = styled("div")`
  display: flex;
  align-items: center;
`;

const DateContainer = styled("div")`
  border: 1px solid #69696a;
  padding: 5px 8px;
  border-radius: 12px;
  margin: 30px 0;
`;

const StyledHr = styled("hr")`
  margin: 0 21.5px 0 14.5px;
  border: 1px solid rgba(44, 44, 44, 0.25);
`;

const CardWrapper = styled("div")`
  display: flex;
  justify-content: center;
  margin-top: 6px;

  & > div {
    margin: 7.5px 0;
  }
`;

const SearchTextField = styled(TextField)`
  .MuiOutlinedInput-root,
  .Mui-focused {
    .MuiOutlinedInput-notchedOutline {
      border: 1px solid #cccaca;
      border-radius: 10px;
    }

    .MuiOutlinedInput-input {
      padding: 14px 14px 14px 0;
    }
  }
`;

const StyledModal = styled(Modal)`
  .MuiBackdrop-root {
    background: rgba(44, 44, 44, 0.1);
  }
`;

const StyledBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 90%;
  transform: translate(-50%, -50%);
  background: white;
  box-shadow: 0px 10px 20px rgba(44, 44, 44, 0.2);
  border-radius: 16px;
`;

const ModalButton = styled(Button)`
  font-weight: 500;
  border-radius: 16px;
  font-size: 16px;
  color: #2c2c2c;
  text-transform: none;
  padding: 0;
  width: 100%;
  padding: 16px;

  &:first-of-type {
    border-bottom: 1px solid #efefef;
  }
`;
