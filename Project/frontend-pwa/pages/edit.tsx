import { Button, Container, css, styled } from "@mui/material";
import { signOut } from "firebase/auth";
import Image from "next/image";
import router, { useRouter } from "next/router";

import { auth } from "../utils/firebase";

const EditPage = () => {
  const router = useRouter();
  return (
    <>
      <StyledContainer>
        <ImageContainer>
          <Image src={"/memento.png"} layout="fixed" width={124} height={23} />
        </ImageContainer>
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
        >
          Sign out
        </Button>
      </StyledContainer>
    </>
  );
};

export default EditPage;

export const getServerSideProps = async function ({ req, res }) {
  return { props: {} };
};

const StyledContainer = styled(Container)`
  ${({ theme }) => css`
    padding: 0 ${theme.spacing(2.5)};
    text-align: center;
  `}
`;

const ImageContainer = styled("div")`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    margin: ${theme.spacing(5)} 0;
  `}
`;
