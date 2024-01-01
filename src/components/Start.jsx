import { useState } from "react";
import startJson from "@/resources/start.json";
import { imgSrc } from "@/utils/imgSrc";

export default function Start(props) {
  const { setScores } = props ?? {};

  const [fadeIn, setFadeIn] = useState(true);

  const gameStarts = () => {
    setScores([0, 0, 0, 0]);
  };

  return (
    <div
      className={`${
        fadeIn && "animate-fadeIn"
      } relative max-w-[450px] h-full mx-auto flex flex-col items-center`}
      onAnimationEnd={() => {
        setFadeIn(false);
      }}
    >
      <img
        src={imgSrc(startJson.bgImg)}
        className="absolute h-full w-full object-cover object-center inset-0"
      />
      <div className="absolute bottom-[80px] px-9">
        <div className="text-[14px]">{startJson.storyText}</div>
        <button
          className="relative w-[150px] h-[50px] mt-6 block mx-auto hover:brightness-[1.1] focus-visible:outline-0"
          onClick={gameStarts}
        >
          <img
            src={imgSrc(startJson.buttonBgImg)}
            alt=""
            className="absolute"
          />
          <span className="relative z-10 leading-[50px] text-lg tracking-[0.2em] text-primary">
            {startJson.buttonText}
          </span>
        </button>
      </div>
      <img
        src={imgSrc(startJson.decorationTopLineImg)}
        className="object-contain object-center w-[90%] absolute top-[12px] left-0 right-0 mx-auto"
      />

      <img
        src={imgSrc(startJson.decorationBottomLineImg)}
        className="object-contain object-center w-[90%] absolute bottom-[10px] left-0 right-0 mx-auto"
      />
    </div>
  );
}
