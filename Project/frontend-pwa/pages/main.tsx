import {
  Card,
  CardContent,
  Container,
  css,
  Grid,
  styled,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

import { Navbar } from "../components/Navbar/Navbar";
import { GratitudeIcon, WritingIcon } from "../icons";

const Main = () => {
  return (
    <>
      <StyledContainer>
        <ImageContainer>
          <Image src={"/memento.png"} layout="fixed" width={124} height={23} />
        </ImageContainer>
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
                <Typography sx={{ fontSize: 18, fontWeight: 700 }} gutterBottom>
                  Gratitude
                </Typography>
                <Typography sx={{ fontSize: 14, fontWeight: 400 }}>
                  3 things you're grateful for
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
                <Typography sx={{ fontSize: 18, fontWeight: 700 }} gutterBottom>
                  Morning pages
                </Typography>
                <Typography sx={{ fontSize: 14, fontWeight: 400 }}>
                  3 things you're grateful for
                </Typography>
              </StyledCard>
            </Link>
          </Grid>
        </Grid>
        <CardContainer>
          <Typography sx={{ fontSize: 20, fontWeight: 700 }}>
            Latest audio
          </Typography>
          <Typography sx={{ fontSize: 16, fontWeight: 300 }} gutterBottom>
            Sunday, March 13
          </Typography>
          <StyledCard
            sx={{
              background: "#414141",
              height: 164,
            }}
            className="record"
          >
            <Typography
              sx={{ fontSize: 18, fontWeight: 700 }}
              color="white"
              gutterBottom
            >
              My worries
            </Typography>
          </StyledCard>
        </CardContainer>
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
  `}
`;

const ImageContainer = styled("div")`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    margin: ${theme.spacing(5)} 0;
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
