import {
  Button,
  Container,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

import CloseButton from "../components/Button/CloseButton";
import { UploadIcon } from "../icons";

const GratitudePage = () => {
  const { push } = useRouter();
  const [isStart, setIsStart] = useState(true);

  return (
    <StyledContainer>
      <CloseButton position="top-right" onClick={() => push("main")} />
      {!isStart ? (
        <>
          <Typography
            sx={{
              fontFamily: "Georgia",
              fontWeight: 700,
              fontSize: 20,
              mt: 1.625,
            }}
            align="center"
          >
            Practicing gratitude
          </Typography>
          <DescriptionContainer>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: 18,
                mt: 1,
              }}
            >
              01
            </Typography>
            <Description>
              <StyledHr />
              <DescriptionContent>
                <Typography
                  sx={{
                    fontFamily: "Georgia",
                    fontWeight: 700,
                    fontSize: 20,
                  }}
                >
                  Description
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Georgia",
                    fontWeight: 400,
                    fontSize: 16,
                    lineGeight: "18px",
                  }}
                >
                  The practice of gratitude is an effective and accessible way
                  for everyone to change their lives for the better in a short
                  time.
                </Typography>
              </DescriptionContent>
            </Description>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: 18,
                mt: 1,
                color: "rgba(44, 44, 44, 0.4)",
              }}
            >
              02
            </Typography>
            <Description>
              <StyledHr />
              <DescriptionContent>
                <Typography
                  sx={{
                    fontFamily: "Georgia",
                    fontWeight: 700,
                    fontSize: 20,
                  }}
                >
                  Instruction
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Georgia",
                    fontWeight: 400,
                    fontSize: 16,
                    lineGeight: "18px",
                  }}
                >
                  Write down three things you are thankful for a couple of times
                  a week. We need to focus on descriptions of details
                </Typography>
              </DescriptionContent>
            </Description>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: 18,
                mt: 1,
                color: "rgba(44, 44, 44, 0.4)",
              }}
            >
              03
            </Typography>
            <Description>
              <StyledHr />
              <DescriptionContent>
                <Typography
                  sx={{
                    fontFamily: "Georgia",
                    fontWeight: 700,
                    fontSize: 20,
                  }}
                >
                  Example
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Georgia",
                    fontWeight: 400,
                    fontSize: 16,
                    lineGeight: "18px",
                  }}
                >
                  If it's food we're thankful for, we describe the taste. If
                  it's a relationship, you describe a moment you felt happy
                </Typography>
              </DescriptionContent>
            </Description>
          </DescriptionContainer>
          <StyledButton sx={{ mt: 4 }} onClick={() => setIsStart(true)}>
            Let's start
          </StyledButton>
        </>
      ) : (
        <>
          <Typography
            sx={{
              fontFamily: "Georgia",
              fontWeight: 700,
              fontSize: 20,
              mt: 1.625,
            }}
            align="center"
          >
            Gratitude
          </Typography>
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: 14,
              textTransform: "uppercase",
              color: "#B6BAC3",
            }}
            align="center"
          >
            {new Date().toLocaleString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
            })}
          </Typography>
          <StyledTextField
            variant="standard"
            placeholder="I am grateful for..."
            multiline
          />
          <UploadButton variant="outlined" as={"label"}>
            <UploadIcon />
            Add a photo
            <input type="file" hidden />
          </UploadButton>
          <StyledButton
            variant="contained"
            sx={{
              position: "absolute",
              bottom: "44px",
              left: "50%",
              transform: "translate(-50%, 0)",
              width: "90%",
            }}
          >
            Save Reflection
          </StyledButton>
        </>
      )}
    </StyledContainer>
  );
};

export default GratitudePage;

const StyledContainer = styled(Container)`
  padding: 25px 25px 50px 25px;
`;

const StyledHr = styled("hr")`
  height: 140px;
  border: 1px solid rgba(44, 44, 44, 0.25);
  width: 1px;
  margin: 0 24px 0 10px;
`;

const DescriptionContainer = styled("div")`
  margin: 50px 0 8px;
`;

const Description = styled("div")`
  display: flex;
  margin-top: 8px;
`;

const DescriptionContent = styled("div")``;

const StyledButton = styled(Button)`
  background: #000000;
  border-radius: 12px;
  color: #fff;
  width: 100%;
  height: 49px;
  text-transform: none;
  font-weight: 500;
  font-size: 16px;

  :disabled {
    background: #f3f3f3;
    color: #8f8f8f;
  }

  &:hover {
    background: #000;
  }
`;

const StyledTextField = styled(TextField)`
  width: 100%;
  margin: 40px 0 32px;

  .MuiInput-root {
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
  }

  .MuiInput-root:before,
  .MuiInput-root:after,
  .MuiInput-root:hover:not(.Mui-disabled):before {
    border-bottom: none;
  }
`;

const UploadButton = styled(Button)`
  background: #f9f9f9;
  border-radius: 8px;
  padding: 14px 16px;
  font-weight: 500;
  font-size: 12px;
  text-align: center;
  width: fit-content;
  display: flex;

  & > svg {
    margin-right: 10px;
  }
`;
