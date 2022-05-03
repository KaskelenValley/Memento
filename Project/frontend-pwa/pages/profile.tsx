import {
  Button,
  Card,
  CircularProgress,
  Container,
  css,
  Grid,
  IconButton,
  styled,
  Typography,
} from "@mui/material";
import { signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { ArrowIcon, SettingsIcon, SupportIcon } from "../icons";

import { auth, db } from "../utils/firebase";

const EditPage = () => {
  const router = useRouter();
  const [user, loading] = useAuthState(auth);
  const [stat, setStat] = useState<any>();

  useEffect(() => {
    if (!loading) {
      const fetchStats = async () => {
        const docRef = doc(db, "users", user?.uid);
        const docSnap = await getDoc(docRef);
        let writing = 0;
        let gratitude = 0;

        if (docSnap?.data().records) {
          docSnap.data().records.map((rec) => {
            if (rec.type === "writing") writing += 1;
            else if (rec.type === "gratitude") gratitude += 1;
          });
        }

        setStat({
          writing,
          gratitude,
          reflections: docSnap.data()?.records?.length ?? 0,
          checkins: docSnap.data()?.mood?.length ?? 0,
        });
      };

      fetchStats();
    }
  }, [loading, user]);

  return (
    <StyledContainer>
      <IconButton
        sx={{
          position: "absolute",
          top: "30px",
          left: "15px",
          background: "#fff",
          borderRadius: "12px",
          backdropFilter: "blur(4px)",
        }}
        href="main"
      >
        <ArrowIcon />
      </IconButton>
      <Button
        onClick={() =>
          signOut(auth)
            .then(() => {
              alert("Sign out");
              router.push("/");
            })
            .catch((error) => {
              alert(error);
            })
        }
        sx={{ position: "absolute", top: "30px", right: "15px" }}
      >
        Sign out
      </Button>
      <ProfileInfoContainer>
        <ProfileAvatarContainer url={user?.photoURL} />
        {!loading && stat ? (
          <>
            <Typography
              sx={{
                fontFamily: "Georgia",
                fontWeight: 700,
                fontSize: 24,
                mt: 7.125,
                mb: 3.125,
              }}
              align="center"
            >
              {user?.displayName || "No name :("}
            </Typography>
            <StatisticsContainer>
              <StatisticsWrapper>
                <Typography
                  sx={{
                    fontFamily: "Georgia",
                    fontWeight: 700,
                    fontSize: 18,
                  }}
                  align="center"
                >
                  {stat.checkins}
                </Typography>
                <Typography sx={{ fontWeight: 300, fontSize: 12 }}>
                  Check-ins
                </Typography>
              </StatisticsWrapper>
              <StatisticsWrapper>
                <Typography
                  sx={{
                    fontFamily: "Georgia",
                    fontWeight: 700,
                    fontSize: 18,
                  }}
                  align="center"
                >
                  {stat.reflections}
                </Typography>
                <Typography sx={{ fontWeight: 300, fontSize: 12 }}>
                  Reflections
                </Typography>
              </StatisticsWrapper>
              <StatisticsWrapper>
                <Typography
                  sx={{
                    fontFamily: "Georgia",
                    fontWeight: 700,
                    fontSize: 18,
                  }}
                  align="center"
                >
                  {stat.gratitude}
                </Typography>
                <Typography sx={{ fontWeight: 300, fontSize: 12 }}>
                  Gratitude
                </Typography>
              </StatisticsWrapper>
              <StatisticsWrapper>
                <Typography
                  sx={{
                    fontFamily: "Georgia",
                    fontWeight: 700,
                    fontSize: 18,
                  }}
                  align="center"
                >
                  {stat.writing}
                </Typography>
                <Typography sx={{ fontWeight: 300, fontSize: 12 }}>
                  Free writing
                </Typography>
              </StatisticsWrapper>
            </StatisticsContainer>
          </>
        ) : (
          <CircularProgress sx={{ margin: "70px auto", display: "block" }} />
        )}
        <StyledHr />
        <Grid container columnSpacing={3} sx={{ marginBottom: 22.5 }}>
          <Grid item xs={6}>
            <StyledCard>
              <SupportIcon />
              <Typography
                mt={9.375}
                sx={{
                  fontSize: 16,
                  lineHeight: "19px",
                  color: "#787E8D",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                Contact
                <br />
                support
              </Typography>
              <BackgroundTypography>Support</BackgroundTypography>
            </StyledCard>
          </Grid>
          <Grid item xs={6}>
            <StyledCard>
              <SettingsIcon />
              <Typography
                mt={9.375}
                sx={{
                  fontSize: 16,
                  lineHeight: "19px",
                  color: "#787E8D",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                Settings
                <br />
                and privacy
              </Typography>
              <BackgroundTypography>Settings</BackgroundTypography>
            </StyledCard>
          </Grid>
        </Grid>
      </ProfileInfoContainer>
    </StyledContainer>
  );
};

export default EditPage;

export const getServerSideProps = async function ({ req, res }) {
  return { props: {} };
};

const StyledContainer = styled(Container)`
  ${({ theme }) => css`
    padding: 0;
    background: rgba(172, 206, 200, 0.17);
    display: flex;
    padding: 0;
    width: 100%;
    justify-content: end;
    flex-direction: column;
    min-height: 100vh;
  `}
`;

const ProfileInfoContainer = styled("div")`
  ${({ theme }) => css`
    border-radius: 20px 20px 0px 0px;
    padding: 18px 25px;
    background: #fff;
    position: relative;
  `}
`;

const ProfileAvatarContainer = styled("div")<{ url?: string }>`
  width: 120px;
  height: 120px;
  background-image: ${(props) => (props?.url ? `url(${props.url})` : "gray")};
  background-size: cover;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border-radius: 17px;
  top: -60px;
  left: 50%;
  transform: translate(-50%, 0);
  position: absolute;
`;

const StatisticsContainer = styled("div")`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-evenly;
  `}
`;

const StatisticsWrapper = styled("div")`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
  `}
`;

const StyledHr = styled("hr")`
  border: 1px solid #efefef;
  margin: 25px -25px;
`;

const StyledCard = styled(Card)`
  ${({ theme }) => css`
    padding: 18px 19px;
    background: #f9f9f9;
    border-radius: 12px;
    box-shadow: none;
    position: relative;
  `}
`;

const BackgroundTypography = styled(Typography)`
  font-family: "Georgia";
  font-weight: 700;
  font-size: 40px;
  color: #f1f1f1;
  position: absolute;
  bottom: 30px;
  left: 25px;
`;
