import { FC, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  CircularProgress,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import OpusMediaRecorderView from "./utils/OpusMediaRecorderView";
import "./App.css";

const App: FC = () => {
  const data: any = [];

  const [state, setState] = useState({ data: data, blob: new Blob(data) });
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(false);

  return (
    <div className="App">
      <OpusMediaRecorderView
        onDataAvailable={async (e: any) => {
          setLoading(true);
          const data = [...state.data, e.data];
          setState({
            data: data,
            blob: new Blob(data, { type: "audio/ogg; codecs=opus" }),
          });

          const formData = new FormData();
          formData.append("file", data[data.length - 1]);

          const res = await fetch(
            "https://memento-speech-recognition-dev.herokuapp.com/stt_sync/",
            {
              method: "POST",
              body: formData,
            }
          );
          const json = await res.json();
          console.log(json);
          setResult(json.result);
          setLoading(false);
        }}
        render={({
          status,
          start,
          stop,
          pause,
          resume,
        }: {
          status: any;
          start: any;
          stop: any;
          pause: any;
          resume: any;
        }) => (
          <Card sx={{ maxWidth: 500, height: 450 }}>
            <StyledCardContent>
              <audio
                src={state.data.length ? URL.createObjectURL(state.blob) : ""}
                controls
              />
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {status}
              </Typography>
              <Button onClick={start}>Start Recording</Button>
              <Button onClick={stop}>Stop Recording</Button>
              <Typography>{result}</Typography>
              {loading && <CircularProgress />}
            </StyledCardContent>
          </Card>
        )}
      />
    </div>
  );
};

export default App;

const StyledCardContent = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});
