import {
  Backdrop,
  CircularProgress,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import { Button } from "../Buttons/Button";

import { StyledContainer } from "./Recorder.styles";

interface Props {
  result: string;
  setTitle: (arg) => void;
  setResult: (arg: any) => any;
  save: () => Promise<void>;
}

const RecordPreview: React.FC<Props> = ({
  result,
  setTitle,
  setResult,
  save,
}) => {
  const { push } = useRouter();
  const [openBackdrop, setOpenBackdrop] = useState(false);

  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setResult(event.target.value);
  };

  return (
    <StyledContainer
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openBackdrop}
      >
        <CircularProgress />
      </Backdrop>
      <DateTypography>
        {new Date().toLocaleString("en-US", {
          weekday: "long",
          month: "long",
          day: "numeric",
        })}
      </DateTypography>
      <TextFieldContainer>
        <TitleTextField placeholder="Title..." onChange={handleChangeTitle} />
        <TextTextField
          defaultValue={result}
          onChange={handleChange}
          placeholder="Text..."
          minRows={12}
          multiline
        />
      </TextFieldContainer>
      <Button
        onClick={() => {
          setOpenBackdrop(true);
          save().then(() => push("/records"));
        }}
      >
        Save Note
      </Button>
    </StyledContainer>
  );
};

export default RecordPreview;

const DateTypography = styled(Typography)`
  font-weight: 500;
  font-size: 14px;
  text-transform: uppercase;
  color: #8f8f8f;
  position: absolute;
  top: 35px;
`;

const TextFieldContainer = styled("div")``;

const TitleTextField = styled(TextField)`
  margin: 52px 0 24px;
  width: 100%;

  input {
    background: #f9f9f9;
    border-radius: 20px;
    padding: 25px 21px;
    font-family: "Georgia";
    font-weight: 700;
    font-size: 20px;
  }

  fieldset {
    border: none;
  }
`;

const TextTextField = styled(TextField)`
  width: 100%;

  & > div {
    padding: 0;
  }

  textarea {
    background: #f9f9f9;
    border-radius: 20px;
    padding: 25px 21px;
    font-weight: 300;
    font-size: 16px;
    line-height: 30px;
  }

  fieldset {
    border: none;
  }
`;
