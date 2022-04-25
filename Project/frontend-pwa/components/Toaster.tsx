import toast, { Toaster as HotToaster } from "react-hot-toast";
import { styled } from "@mui/material/styles";
import { Typography, IconButton } from "@mui/material";

import { CloseIcon } from "../icons/CloseIcon";

export const Toaster = () => (
  <HotToaster
    position="bottom-center"
    reverseOrder={false}
    gutter={8}
    containerClassName="toaster-container"
    containerStyle={{ marginBottom: 56 }}
    toastOptions={{
      className: "toaster",
      duration: 5000,
      success: {
        duration: 3000,
      },
      error: {
        duration: 3000,
        animation: "custom-exit 1s ease",
      },
    }}
  />
);

export const CustomErrorToast = ({ msg }) => (
  <ErrorToast>
    <ToasterHeader>
      <Title>Error</Title>
      <CloseButton onClick={() => toast.remove()}>
        <CloseIcon />
      </CloseButton>
    </ToasterHeader>
    <Description>{msg}</Description>
  </ErrorToast>
);

const ErrorToast = styled("div")`
  width: 100%;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 15px;
  background: #fff;
  border-bottom: 3px solid #ff6359;
`;

const CloseButton = styled(IconButton)`
  background: #f3f3f3;
  width: 20px;
  height: 20px;

  svg {
    width: 15px;
    height: 15px;
  }
`;

const ToasterHeader = styled("div")`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const Title = styled(Typography)`
  font-family: "Georgia";
  font-weight: 700;
  font-size: 14px;
  line-height: 14px;
  color: #e72b32;
`;

const Description = styled(Typography)`
  font-size: 14px;
  line-height: 17px;
  color: #c0c0c0;
`;
