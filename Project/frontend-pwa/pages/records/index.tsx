import { useState, useEffect } from "react";
import {
  CircularProgress,
  Container,
  css,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore";
import { deleteObject, getBlob, ref } from "firebase/storage";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";

import { auth, db, storage } from "../../utils/firebase";
import { RecordWaveIcon } from "../../icons";
import CloseButton from "../../components/Button/CloseButton";
import { RecordCard } from "../../components/RecordCard";
import { groupByDate } from "../../utils";

const Records = (props) => {
  const [records, setRecords] = useState<any>();
  const [filtered, setFiltered] = useState<any>();
  const [text, setText] = useState<any>([]);

  const [user, loading] = useAuthState(auth);
  const { push } = useRouter();

  let docRef;

  if (user) {
    docRef = doc(db, "users", user.uid);
  }

  useEffect(() => {
    if (!loading) {
      const unsubscribe = onSnapshot(
        doc(db, "users", user.uid),
        async (doc) => {
          const arr = [];
          const data = doc.data().records;

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

          setRecords(arr);
          setFiltered(groupByDate(arr));
          setText(arr);
        }
      );

      return () => unsubscribe();
    }
  }, [loading]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFiltered(
      records.filter((e) =>
        (e.result + e.title).toLowerCase().includes(event.target.value)
      )
    );
  };

  const handleChangeInput = (event: any, id: string) => {
    const arr = text.filter((t) => t.id !== id);

    setText([...arr, { id, result: event.target.value }]);
  };

  const deleteRecord = async (id) => {
    const docSnap: any = await getDoc(docRef);
    const records = docSnap.data().records;
    const filtered = records.filter((r) => r.id !== id);
    updateDoc(doc(db, "users", user.uid), {
      records: filtered,
    });
    deleteObject(ref(storage, id));
    alert("Deleted!");
  };

  const updateRecord = async (id) => {
    const docSnap: any = await getDoc(docRef);
    const records = docSnap.data().records;
    const res = text.find((x) => x.id === id);

    const updated = records.map((r) => {
      if (r.id === id) {
        return {
          ...r,
          result: res.result,
        };
      }
      return r;
    });

    updateDoc(doc(db, "users", user.uid), {
      records: updated,
    });
    alert("Updated!");
  };
  console.log(records);

  return (
    <StyledContainer>
      <CloseButton position="top-right" onClick={() => console.log("g")} />
      <StyledBlock>
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: "54px",
            color: "rgba(44, 44, 44, 0.1)",
            mt: 6,
          }}
          align="center"
        >
          Your entries
        </Typography>
      </StyledBlock>
      <TextField
        onChange={handleChange}
        label="Search"
        type="search"
        variant="standard"
        sx={{ width: "100%" }}
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
                      <RecordCard record={record} />
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
    padding: 0 ${theme.spacing(2.5)};
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

const StyledBlock = styled("div")`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  margin: 25px 0 45px;

  & > svg {
    position: absolute;
    left: 0;
  }
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
