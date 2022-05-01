import {
  Card,
  CircularProgress,
  Container,
  css,
  Grid,
  styled,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { add, formatDistanceToNow } from "date-fns";
import { useEffect, useState } from "react";
import { getBlob, ref } from "firebase/storage";

import { Navbar } from "../components/Navbar/Navbar";
import { GratitudeIcon, SmileIcon, WritingIcon } from "../icons";
import { auth, db, storage } from "../utils/firebase";
import Image from "next/image";
import { collection, getDocs, query, where } from "firebase/firestore";
import { RecordCard } from "../components/RecordCard";

const Main = () => {
  const [user, loading] = useAuthState(auth);
  const [records, setRecords] = useState([]);
  const [spinner, setSpinner] = useState(true);
  const [latestDate, setLatestDate] = useState("");

  useEffect(() => {
    setSpinner(true);

    if (!loading) {
      const fetchRecords = async () => {
        const arr = [];
        const q = query(collection(db, "users"), where("id", "==", user.uid));
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach(async (doc) => {
          for (const d of doc.data().records) {
            const date = d.date.toDate();

            if (date > latestDate) {
              setLatestDate(date);
            }

            if (d.type === "default") {
              const blob = await getBlob(ref(storage, d.id));
              arr.push({ ...d, blob });
            } else {
              arr.push(d);
            }
          }

          setRecords(arr);
        });

        setSpinner(false);
      };

      fetchRecords();
    }
  }, [loading, user]);

  console.log(records, latestDate);
  return (
    <>
      <StyledContainer>
        <Typography
          sx={{
            fontFamily: "Georgia",
            fontSize: 24,
            fontWeight: 700,
            mt: 4.375,
            mb: 1,
          }}
        >
          Today
        </Typography>
        <Typography sx={{ fontSize: 16, fontWeight: 300, mb: 4 }}>
          {new Date().toLocaleString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
          })}
        </Typography>
        <HorizontalCalendar>
          {(() => {
            let cols = [];

            for (let i = -4; i <= 4; i++) {
              cols.push(
                i === 0 ? (
                  <StyledCalendarCell key={i} className="selected">
                    <Typography
                      sx={{
                        fontWeight: 500,
                        textTransform: "uppercase",
                        color: "#69696A",
                        fontSize: 10,
                      }}
                    >
                      {add(new Date(), { days: i }).toLocaleString("default", {
                        weekday: "short",
                      })}
                    </Typography>
                    <StyledCalendarDay>
                      {add(new Date(), { days: i }).toLocaleString("default", {
                        day: "numeric",
                      })}
                    </StyledCalendarDay>
                  </StyledCalendarCell>
                ) : (
                  <StyledCalendarCell key={i}>
                    <Typography
                      sx={{
                        fontWeight: 500,
                        textTransform: "uppercase",
                        color: "#69696A",
                        fontSize: 10,
                      }}
                    >
                      {add(new Date(), { days: i }).toLocaleString("default", {
                        weekday: "short",
                      })}
                    </Typography>
                    <StyledCalendarDay>
                      {add(new Date(), { days: i }).toLocaleString("default", {
                        day: "numeric",
                      })}
                    </StyledCalendarDay>
                  </StyledCalendarCell>
                )
              );
            }

            return cols;
          })()}
        </HorizontalCalendar>
        <Grid container columnSpacing={1}>
          <Grid item xs={6}>
            <Link
              href={{
                pathname: "/gratitude",
              }}
            >
              <StyledCard>
                <GratitudeIcon />
                <Typography
                  sx={{ fontFamily: "Georgia", fontSize: 16, fontWeight: 700 }}
                  gutterBottom
                >
                  Gratitude
                </Typography>
                <Typography
                  sx={{ fontSize: 14, fontWeight: 400, color: "#69696A" }}
                >
                  You are grateful...
                </Typography>
              </StyledCard>
            </Link>
          </Grid>
          <Grid item xs={6}>
            <Link
              href={{
                pathname: "/writing",
              }}
            >
              <StyledCard>
                <WritingIcon />
                <Typography
                  sx={{ fontFamily: "Georgia", fontSize: 16, fontWeight: 700 }}
                  gutterBottom
                >
                  Free writing
                </Typography>
                <Typography
                  sx={{ fontSize: 14, fontWeight: 400, color: "#69696A" }}
                >
                  Prewriting technique
                </Typography>
              </StyledCard>
            </Link>
          </Grid>
        </Grid>
        <CardContainer>
          <StyledCard
            sx={{
              border: "none",
              position: "relative",
              height: 164,
              background:
                "linear-gradient(124.73deg, rgba(236, 233, 230, 0.5) 0.01%, rgba(255, 255, 255, 0.5) 99.11%)",
              backdropFilter: "blur(16px)",
            }}
            className="record"
          >
            <SmileIcon
              sx={{
                margin: "0 !important",
                position: "absolute",
                bottom: 0,
                right: 0,
              }}
            />
            <Typography
              sx={{ fontFamily: "Georgia", fontSize: 20, fontWeight: 700 }}
              gutterBottom
            >
              Daily Check in
            </Typography>
            <Typography sx={{ fontSize: 16, color: "#777777" }} gutterBottom>
              How are you <b>feeling</b> today?
            </Typography>
          </StyledCard>
        </CardContainer>
        {records.length !== 0 && !spinner && (
          <>
            <Typography
              sx={{ fontFamily: "Georgia", fontSize: 20, fontWeight: 700 }}
              gutterBottom
            >
              Latest entry
            </Typography>
            <Typography sx={{ fontSize: 16, fontWeight: 300 }} gutterBottom>
              {formatDistanceToNow(new Date(latestDate), { addSuffix: true })}
            </Typography>
          </>
        )}
        <EntriesContainer>
          {!spinner ? (
            records.map((rec) => (
              <CardWrapper>
                <RecordCard record={rec} />
              </CardWrapper>
            ))
          ) : (
            <StyledCircularProgress />
          )}
        </EntriesContainer>
        <Image src="/temporary.png" width={300} height={188} />
      </StyledContainer>
      <Navbar />
    </>
  );
};

export default Main;

export const getServerSideProps = async function ({ req, res }) {
  return { props: {} };
};

const StyledContainer = styled(Container)`
  ${({ theme }) => css`
    padding: 0 ${theme.spacing(2.5)};
    height: 88vh;
    overflow: scroll;

    & .datepicker-strip {
      .datepicker-month-label {
        display: none;
      }

      .datepicker > div.wrapper {
        display: none;
      }
    }

    & > span {
      min-width: 100%;
    }
  `}
`;

const CardContainer = styled("div")`
  ${({ theme }) => css`
    margin: ${theme.spacing(2.5)} 0;
  `}
`;

const StyledCard = styled(Card)`
  ${({ theme }) => css`
    border-radius: ${theme.spacing(2.5)};
    border: 1px solid #ebebeb;
    box-shadow: none;
    display: flex;
    flex-direction: column;
    justify-content: end;
    padding: ${theme.spacing(2.125)} ${theme.spacing(1.625)};

    &.record {
      justify-content: start;
    }

    svg {
      margin: 0 0 ${theme.spacing(5)};
    }
  `}
`;

const HorizontalCalendar = styled("div")`
  display: flex;
  overflow: scroll;
  margin-bottom: 40px;
  justify-content: space-between;

  &::-webkit-scrollbar {
    display: none;
  }

  .selected > div {
    background: #000;
    border-radius: 12px;
    color: #fff;
  }
`;

const StyledCalendarCell = styled("div")`
  min-width: 44px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledCalendarDay = styled("div")`
  height: 44px;
  min-width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EntriesContainer = styled("div")`
  ${({ theme }) => css`
    margin: ${theme.spacing(2.5)} -${theme.spacing(2.5)} ${theme.spacing(2.5)} -${theme.spacing(
        2.5
      )};
    padding: 0 ${theme.spacing(2.5)};
    display: flex;
    overflow: scroll;

    & > div {
      width: 290px !important;
    }

    &::-webkit-scrollbar {
      display: none;
    }
  `}
`;

const StyledCircularProgress = styled(CircularProgress)`
  margin: 0 auto;
`;

const CardWrapper = styled("div")`
  min-width: 290px;
  margin-right: 8px;

  &:last-child {
    margin: 0;
  }
`;
