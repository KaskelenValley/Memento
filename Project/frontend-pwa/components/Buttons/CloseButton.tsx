import { css, IconButton, styled } from "@mui/material";
import { CloseIcon } from "../../icons/CloseIcon";

interface Props {
  onClick: () => void;
  position?: "top-right";
}

const StyledIconButton = styled(IconButton)<{ position?: "top-right" }>`
  ${({ position }) => css`
    width: 38px;
    height: 38px;
    background: #f6f7f8;
    border-radius: 12px;
    position: absolute;
    top: 30px;

    ${position === "top-right"
      ? css`
          right: 16px;
        `
      : css`
          left: 16px;
        `};
  `}
`;

const CloseButton: React.FC<Props> = ({ onClick, position }) => {
  return (
    <StyledIconButton position={position} aria-label="close" onClick={onClick}>
      <CloseIcon fontSize="inherit" />
    </StyledIconButton>
  );
};

export default CloseButton;
