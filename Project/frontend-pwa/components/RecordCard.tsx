import { FC, useEffect, useState } from "react";
import { Button, Card, Typography, styled, css } from "@mui/material";
import getBlobDuration from "get-blob-duration";

import {
  PlayIcon,
  SlySmileIcon,
  SmilingSmileIcon,
  ThreeDotsIcon,
  WearySmileIcon,
} from "../icons";
import { secondsToHms } from "../utils";
import { capitalize } from "../utils/capitalize";
import { LeaveIcon } from "../icons/LeaveIcon";

interface Props {
  record: any;
  handleOpen?: (record) => void;
}

export const RecordCard: FC<Props> = ({
  record: { title, result, blob, id, mood, date },
  handleOpen,
}) => {
  const [duration, setDuration] = useState<number>();

  useEffect(() => {
    if (blob)
      getBlobDuration(blob).then((dur) => {
        setDuration(dur);
      });
  }, [blob]);

  return (
    <EntryCard>
      <TitleContainer>
        <Typography sx={{ fontSize: 14, fontWeight: 600 }} gutterBottom>
          {title}
        </Typography>
        {duration && (
          <StyledButton
            href={`/records/${id}`}
            variant="outlined"
            endIcon={<PlayIcon />}
          >
            {`-${secondsToHms(duration)}`}
          </StyledButton>
        )}
      </TitleContainer>
      <Typography sx={{ fontSize: 14, fontWeight: 300 }} gutterBottom>
        {result}
      </Typography>
      <ActionsContainer>
        <TagCardContainer>
          {mood && (
            <TagCard style={{ background: "rgba(137, 205, 210, 0.15)" }}>
              {mood === "neutral" && <SlySmileIcon />}
              {mood === "positive" && <SmilingSmileIcon />}
              {mood === "negative" && <WearySmileIcon />}
              <Typography sx={{ fontSize: 11, color: "#69696A" }}>
                {capitalize(mood)}
              </Typography>
            </TagCard>
          )}
          <TagCard style={{ background: "rgba(137, 210, 144, 0.15)" }}>
            <LeaveIcon />
            <Typography sx={{ fontSize: 11, color: "#69696A" }}>
              Work
            </Typography>
          </TagCard>
        </TagCardContainer>
        {handleOpen && (
          <StyledOptionButton
            onClick={() => handleOpen({ title, result, blob, id, mood, date })}
          >
            <ThreeDotsIcon />
          </StyledOptionButton>
        )}
      </ActionsContainer>
    </EntryCard>
  );
};

const EntryCard = styled(Card)`
  ${({ theme }) => css`
    width: 100%;
    border-radius: ${theme.spacing(2.5)};
    border: 1px solid #ebebeb;
    box-shadow: none;
    display: flex;
    flex-direction: column;
    justify-content: end;
    padding: ${theme.spacing(2.75)} ${theme.spacing(1.75)};

    &.record {
      justify-content: start;
    }
  `}
`;

const TitleContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ActionsContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 26px;
`;

const TagCardContainer = styled("div")`
  display: flex;

  svg {
    margin: 0 5px 0 0;
  }
`;

const TagCard = styled("div")`
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 6.5px 8px;
  margin: 0 8px 0 0;
`;

const StyledOptionButton = styled(Button)`
  border: 1px solid rgba(197, 204, 209, 0.5);
  border-radius: 50%;
  width: 32px;
  height: 32px;
  min-width: 32px;
  min-height: 32px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin: 0;
  }
`;

const StyledButton = styled(Button)`
  border: 1px solid rgba(197, 204, 209, 0.5);
  border-radius: 8px;
  padding: 9px 8px;
  color: #69696a;
  font-size: 10px;

  svg {
    margin: 0;
  }

  .MuiButton-endIcon {
    margin-left: 4px;
  }
`;
