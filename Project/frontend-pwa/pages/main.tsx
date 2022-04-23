import {
  Button,
  Card,
  Container,
  css,
  Grid,
  styled,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { add } from "date-fns";

import { Navbar } from "../components/Navbar/Navbar";
import {
  GratitudeIcon,
  PlayIcon,
  SlySmileIcon,
  SmileIcon,
  ThreeDotsIcon,
  WritingIcon,
} from "../icons";
import { auth } from "../utils/firebase";
import Image from "next/image";

const Main = () => {
  const [user] = useAuthState(auth);
  console.log(user);

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
          {new Date().toLocaleString("default", {
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
                pathname: "/record",
                query: { type: "gratitude" },
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
                pathname: "/record",
                query: { type: "writing" },
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
        <Typography
          sx={{ fontFamily: "Georgia", fontSize: 20, fontWeight: 700 }}
          gutterBottom
        >
          Latest entry
        </Typography>
        <Typography sx={{ fontSize: 16, fontWeight: 300 }} gutterBottom>
          2 day ago...
        </Typography>
        <EntriesContainer>
          <EntryCard>
            <TitleContainer>
              <Typography sx={{ fontSize: 14, fontWeight: 600 }} gutterBottom>
                Sudden thoughts
              </Typography>
              <StyledButton variant="outlined" endIcon={<PlayIcon />}>
                -2:54
              </StyledButton>
            </TitleContainer>
            <Typography sx={{ fontSize: 14, fontWeight: 300 }} gutterBottom>
              There are certain moments in life when something changes in our
              soul...
            </Typography>
            <ActionsContainer>
              <TagCardContainer>
                <TagCard style={{ background: "rgba(137, 205, 210, 0.15)" }}>
                  <SlySmileIcon />
                  <Typography sx={{ fontSize: 11, color: "#69696A" }}>
                    Down
                  </Typography>
                </TagCard>
                <TagCard style={{ background: "rgba(137, 210, 144, 0.15)" }}>
                  <SlySmileIcon />
                  <Typography sx={{ fontSize: 11, color: "#69696A" }}>
                    Work
                  </Typography>
                </TagCard>
              </TagCardContainer>
              <StyledOptionButton>
                <ThreeDotsIcon />
              </StyledOptionButton>
            </ActionsContainer>
          </EntryCard>

          <EntryCard>
            <TitleContainer>
              <Typography sx={{ fontSize: 14, fontWeight: 600 }} gutterBottom>
                Sudden thoughts
              </Typography>
              <StyledButton variant="outlined" endIcon={<PlayIcon />}>
                -2:54
              </StyledButton>
            </TitleContainer>
            <Typography sx={{ fontSize: 14, fontWeight: 300 }} gutterBottom>
              There are certain moments in life when something changes in our
              soul...
            </Typography>
            <ActionsContainer>
              <TagCardContainer>
                <TagCard style={{ background: "rgba(137, 205, 210, 0.15)" }}>
                  <SlySmileIcon />
                  <Typography sx={{ fontSize: 11, color: "#69696A" }}>
                    Down
                  </Typography>
                </TagCard>
                <TagCard style={{ background: "rgba(137, 210, 144, 0.15)" }}>
                  <SlySmileIcon />
                  <Typography sx={{ fontSize: 11, color: "#69696A" }}>
                    Work
                  </Typography>
                </TagCard>
              </TagCardContainer>
              <StyledOptionButton>
                <ThreeDotsIcon />
              </StyledOptionButton>
            </ActionsContainer>
          </EntryCard>
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
    margin: ${theme.spacing(2.5)} -${theme.spacing(2.5)} ${theme.spacing(2.5)} 0;
    display: flex;
    overflow: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
  `}
`;

const EntryCard = styled(Card)`
  ${({ theme }) => css`
    min-width: 290px;
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

    &:first-of-type {
      margin-right: 8px;
    }
  `}
`;

const TitleContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ActionsContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TagCardContainer = styled("div")`
  display: flex;

  svg {
    margin: 0 5px 0 0;
  }
`;

const TagCard = styled("div")`
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 6.5px 8px;
  margin: 32px 8px 0 0;
`;

const StyledOptionButton = styled(Button)`
  border: 1px solid rgba(197, 204, 209, 0.5);
  border-radius: 50%;
  width: 32px;
  height: 32px;
  min-width: 32px;
  min-height: 32px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin: 0;
  }
`;

const StyledButton = styled(Button)`
  border: 1px solid rgba(197, 204, 209, 0.5);
  border-radius: 8px;
  padding: 9px 8px;
  color: #69696a;
  font-size: 10px;

  svg {
    margin: 0;
  }

  .MuiButton-endIcon {
    margin-left: 4px;
  }
`;
