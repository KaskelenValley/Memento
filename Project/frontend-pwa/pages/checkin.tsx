import { Container, styled, Typography } from "@mui/material";
import { arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Slider from "react-slick";

import { Button } from "../components/Buttons/Button";
import CloseButton from "../components/Buttons/CloseButton";
import { auth, db } from "../utils/firebase";

enum Mood {
  Awesome = 0,
  Neutral = 1,
  Sad = 2,
}

const CheckinPage = () => {
  const { push } = useRouter();
  const [activeSlide, setActiveSlide] = useState(0);
  const [user] = useAuthState(auth);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "center",
    centerMode: true,
    arrows: false,
    beforeChange: (current, next) => setActiveSlide(next),
  };

  return (
    <StyledContainer>
      <CloseButton position="top-right" onClick={() => push("main")} />
      <div>
        <Typography
          mt={9}
          align="center"
          sx={{
            fontWeight: 500,
            fontSize: 50,
            color: "rgba(44, 44, 44, 0.1)",
          }}
        >
          Hey
        </Typography>
        <Typography
          sx={{
            fontFamily: "Georgia",
            fontWeight: 700,
            fontSize: 22,
            lineHeight: "25px",
          }}
          align="center"
        >
          How are you on this
          <br />
          fine day?
        </Typography>
      </div>
      <StyledSlider {...settings}>
        <CheckinBlock src={"/icons/awesome-mood.png"} />
        <CheckinBlock src={"/icons/neutral-mood.png"} />
        <CheckinBlock src={"/icons/sad-mood.png"} />
      </StyledSlider>
      <Button
        onClick={async () => {
          const date = new Date().toLocaleString("en-US").split(",")[0];

          const docSnap: any = await getDoc(doc(db, "users", user.uid));
          const moodArr = docSnap.data().mood;
          const filtered = moodArr.filter((m) => m.date !== date);

          updateDoc(doc(db, "users", user.uid), {
            mood: filtered,
          }).then(() =>
            updateDoc(doc(db, "users", user.uid), {
              mood: arrayUnion({
                date,
                moodState: Mood[activeSlide].toLowerCase(),
              }),
            }).then(() => push("main"))
          );
        }}
      >
        Continue
      </Button>
    </StyledContainer>
  );
};

export default CheckinPage;

const StyledContainer = styled(Container)`
  padding: 25px 25px 50px 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

const CheckinBlock = styled("div")<{ src: string }>`
  border-radius: 11px;
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
`;

const StyledSlider = styled(Slider)`
  .slick-list {
    margin: 0 -25px;
  }

  .slick-slide {
    padding: 0 10px;

    & > div > div {
      margin-top: 90px;
      background-color: #f9f9f9;
      height: 258px;
    }

    &.slick-active {
      & > div > div {
        margin: 0;
        background-color: #accec8;
        height: 360px;
      }
    }
  }
`;
