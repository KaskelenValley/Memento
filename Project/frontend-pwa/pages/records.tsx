import { useState, useEffect } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
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
import Link from "next/link";

import { auth, db, storage } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { ArrowIcon } from "../icons";

const Records = (props) => {
  const [records, setRecords] = useState<any>();
  const [filtered, setFiltered] = useState<any>();
  const [text, setText] = useState<any>([]);

  const [user, loading, error] = useAuthState(auth);

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
              const blob = await getBlob(ref(storage, d.id));
              arr.push({ ...d, blob });
            }
          }

          setRecords(arr);
          setFiltered(arr);
          setText(arr);
        }
      );

      return () => unsubscribe();
    }
  }, [loading]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFiltered(
      records.filter((e) => e.result.toLowerCase().includes(event.target.value))
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

  return (
    <StyledContainer>
      <StyledBlock>
        <Link href="/main">
          <ArrowIcon />
        </Link>
        <Typography sx={{ fontSize: 22, fontWeight: 700 }} align="center">
          Notes
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
        {filtered && !filtered.length && (
          <Typography>There is no records</Typography>
        )}
        {filtered ? (
          filtered.map((e, i) => {
            return (
              <StyledAccordion key={i}>
                <AccordionSummary>
                  <Typography>{e.result}</Typography>
                </AccordionSummary>
                <AccordionDetails
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <audio
                    src={e.id ? URL.createObjectURL(e.blob) : ""}
                    controls
                  />
                  <TextField
                    multiline
                    defaultValue={e.result}
                    onChange={(event) => handleChangeInput(event, e.id)}
                  />
                  <Button onClick={() => updateRecord(e.id)}>
                    Update record
                  </Button>
                  <Button onClick={() => deleteRecord(e.id)}>
                    Delete record
                  </Button>
                </AccordionDetails>
              </StyledAccordion>
            );
          })
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

const StyledAccordion = styled(Accordion)`
  ${({ theme }) => css`
    background: #f8f8f8;
    border-radius: 34px;
    margin-bottom: 8px;
    box-shadow: none;
    width: 100%;

    audio {
      width: 100%;
    }

    p {
      font-size: 14px;
      font-weight: 400;
    }

    &:first-of-type,
    &:last-of-type {
      border-radius: 34px;
    }

    &::before {
      content: none;
    }
  `}
`;

const StyledBlock = styled("div")`
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  margin: 25px 0 45px;

  & > svg {
    position: absolute;
    left: 0;
  }
`;
