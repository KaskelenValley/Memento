import { IconButton, styled } from "@mui/material";
import { CloseIcon } from "../../icons/CloseIcon";

interface Props {
  onClick: () => void;
  position?: "top-right";
}

const StyledIconButton = styled(IconButton)<{ position?: "top-right" }>`
  width: 38px;
  height: 38px;
  background: #f6f7f8;
  border-radius: 12px;
  align-self: ${({ position }) =>
    position === "top-right" ? "flex-end" : "flex-start"};
`;

const CloseButton: React.FC<Props> = ({ onClick, position }) => {
  return (
    <StyledIconButton position={position} aria-label="close" onClick={onClick}>
      <CloseIcon fontSize="inherit" />
    </StyledIconButton>
  );
};

export default CloseButton;
