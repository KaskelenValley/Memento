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

import { Navbar } from "../components/Navbar";

const Main = () => {
  return (
    <>
      <StyledContainer>
        <ImageContainer>
          <Image src={"/memento.png"} layout="fixed" width={124} height={23} />
        </ImageContainer>
        <Grid container columnSpacing={1}>
          <Grid item xs={6}>
            <StyledCard
              sx={{
                background:
                  "linear-gradient(180deg, #FFCEAD 0%, #F59085 100%);",
              }}
            >
              <Typography
                sx={{ fontSize: 18, fontWeight: 700 }}
                color="white"
                gutterBottom
              >
                Gratitude
              </Typography>
              <Typography sx={{ fontSize: 14, fontWeight: 400 }} color="white">
                3 things you're grateful for
              </Typography>
            </StyledCard>
          </Grid>
          <Grid item xs={6}>
            <StyledCard
              sx={{
                background:
                  "linear-gradient(180deg, #FFFCAC 0%, #F5A785 100%);",
              }}
            >
              <Typography
                sx={{ fontSize: 18, fontWeight: 700 }}
                color="white"
                gutterBottom
              >
                Morning pages
              </Typography>
              <Typography sx={{ fontSize: 14, fontWeight: 400 }} color="white">
                3 things you're grateful for
              </Typography>
            </StyledCard>
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
    border-radius: ${theme.spacing(1.875)};
    box-shadow: none;
    height: 178px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    padding: ${theme.spacing(2.75)} ${theme.spacing(1.75)};

    &.record {
      justify-content: start;
    }
  `}
`;
