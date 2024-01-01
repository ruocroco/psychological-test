import { useState } from "react";
import { imgSrc } from "@/utils/imgSrc";
import levelsJson from "@/resources/level.json";

export default function Level(props) {
  const { scores, setScores } = props ?? {};

  const [fadeIn, setFadeIn] = useState(true);
  const levelIndex = scores.reduce((sum, score) => sum + score);
  const questionNumber = "Q" + (levelIndex + 1);
  const level = levelsJson[levelIndex];

  const onOptionClick = (optionIndex) => {
    scores[optionIndex]++;
    setScores([...scores]);
    setFadeIn(true);
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
        src={imgSrc(level.levelBgImg)}
        className="absolute h-full w-full object-cover object-center inset-0"
      />
      <img
        src={imgSrc(level.decorationTopLineImg)}
        className="object-contain object-center w-[90%] absolute top-[12px] left-0 right-0 mx-auto"
      />
      <div className="relative text-primary text-base font-bold tracking-widest mt-[50px]">
        {level.story.title}
      </div>
      <div className="w-full absolute bottom-[60px] flex flex-col items-center">
        <div className="flex-col relative justify-center items-stretch overflow-hidden flex aspect-[5.27] w-[90%] p-4 pb-5">
          <img
            src={imgSrc(level.questionBlockBgImg)}
            className="absolute h-full w-full object-cover object-center inset-0"
          />
          <div className="relative text-primary flex justify-between gap-2 cursor-default">
            <div className="text-4xl whitespace-nowrap">{questionNumber}</div>
            <div className="text-sm font-bold tracking-tight self-center grow shrink basis-auto my-auto">
              {level.story.question}
            </div>
          </div>
        </div>
        <ul className="flex flex-col gap-2 list-roman mt-2">
          {level.story.options.map((option, index) => (
            <button
              key={option.key}
              className="relative block w-[317px] h-[36px] border-[0.5px] pl-10 border-orange-200 cursor-pointer"
              onClick={() => onOptionClick(index)}
            >
              <img
                src={imgSrc(level.optionBlockBgImg)}
                alt=""
                className="w-full h-full absolute left-0 top-0 object-cover object-center aspect-[8.8]"
              />
              <li className="relative z-10 text-secondary text-left text-xs">
                {option.content}
              </li>
            </button>
          ))}
        </ul>
      </div>
      <img
        src={imgSrc(level.decorationBottomLineImg)}
        className="object-contain object-center w-[90%] absolute bottom-[10px] left-0 right-0 mx-auto"
      />
    </div>
  );
}
