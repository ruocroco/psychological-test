import { useState } from "react";
import characterJson from "@/resources/character.json";
import { imgSrc } from "@/utils/imgSrc";

export default function Charactor(props) {
  const { scores, user } = props ?? {};
  const [fadeIn, setFadeIn] = useState(true);

  let indexOfMax = 0;
  scores.forEach((score, index) => {
    if (score >= scores[indexOfMax]) indexOfMax = index;
  });

  const character = characterJson[indexOfMax] ?? {};

  return (
    <div
      className={`${
        fadeIn && "animate-fadeIn"
      } relative max-w-[450px] h-full mx-auto flex flex-col items-center`}
      onAnimationEnd={() => {
        setFadeIn(false);
      }}
    >
      {/* TODO: 調整背景圖大小 */}
      <img
        src={imgSrc(character.bgImg)}
        className="absolute h-full w-full object-cover object-center inset-0"
      />
      <div className="relative top-[14px]">
        <div className="text-[14px] tracking-[0.1em] text-center">
          {user.name}
        </div>
        <div className="relative text-primary text-center text-base font-bold tracking-widest mt-1">
          {character.character.shortDesc}
        </div>
        <img
          src={imgSrc(character.decorationTopLineImg)}
          className="object-contain object-center w-[90%] mx-auto mt-1"
        />
      </div>
      {/* 角色名稱 ＋ 描述 */}
      <div className="relative top-[40px]">
        <div className="text-center">{character.character.nameZh}</div>
        <div className="text-center">{character.character.nameEn}</div>
        <div className="text-center">{character.character.descTitle}</div>
        <div className="text-center">{character.character.descSubTitle}</div>
        <div className="text-center">{character.character.descContent}</div>
      </div>
      {/* 置底 */}
      <div className="absolute bottom-4 w-full">
        {/* 行為特質 */}
        <div className="relative">
          <img
            src={imgSrc(character.decorationMiddleLineImg)}
            alt=""
            className="absolute w-[90%] left-0 right-0 top-0 block object-contain object-center mx-auto"
          />
          <span className="text-center block text-lg text-primary tracking-[0.1em] leading-[25px]">
            {character.character.featureTitle}
          </span>
          <div className="px-4 mt-1">{character.character.featureContent}</div>
        </div>
        {/* 代表色 ＋ 好夥伴 */}
        <div className="flex justify-between px-4 mt-3">
          <div className="relative w-1/2">
            <div className="text-center">
              {character.character.primaryColorTitle}
            </div>
            <div className="text-center">
              {character.character.primaryColorContent}
            </div>
          </div>
          <div className="border-l border-primary mx-3"></div>
          <div className="relative w-1/2">
            <div className="text-center">
              {character.character.greatPartnerTitle}
            </div>
            <div className="text-center">
              {character.character.greatPartnerContent}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
