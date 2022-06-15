import { Container, css, styled, Skeleton, Typography } from "@mui/material";

import { Navbar } from "../components/Navbar/Navbar";

const StatisticsPage = () => {
  return (
    <StyledContainer>
      <Typography sx={{ fontSize: 24, fontWeight: 500, mb: 4 }} align="center">
        Statistics
      </Typography>
      <Skeleton variant="rectangular" height={250} />
      <Navbar />
    </StyledContainer>
  );
};

export default StatisticsPage;

export const getServerSideProps = async function ({ req, res }) {
  return { props: {} };
};

const StyledContainer = styled(Container)`
  ${({ theme }) => css`
    padding: 15px;
    display: flex;
    width: 100%;
    flex-direction: column;
    min-height: 100vh;
  `}
`;
