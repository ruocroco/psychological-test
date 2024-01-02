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
      } relative max-w-[450px] mx-auto h-screen flex flex-col items-center overflow-hidden`}
      onAnimationEnd={() => {
        setFadeIn(false);
      }}
    >
      <img
        src={imgSrc(character.bgImg)}
        className={`absolute h-full w-full object-cover object-center inset-0 scale-110
        ${
          character.character.descContentAlign === "right"
            ? "-translate-x-6"
            : "translate-x-2"
        }`}
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
      <div
        className={`relative top-[50px] w-[55%] ${
          character.character.descContentAlign === "right"
            ? "ml-auto mr-5"
            : "mr-auto ml-5"
        }`}
      >
        <div
          className={`w-[182px] ${
            character.character.descContentAlign === "right"
              ? "float-right"
              : "float-left"
          }`}
        >
          <div className="text-[28px] text-primary text-justify">
            {character.character.nameZh}
          </div>
          <div className="text-[18px] text-primary text-justify leading-[21px]">
            {character.character.nameEn}
          </div>
        </div>
        <div
          className={`mt-[14px] relative p-3 w-[182px] h-[190px] ${
            character.character.descContentAlign === "right"
              ? "float-right"
              : "float-left"
          }`}
        >
          <img
            src={imgSrc(character.characterDescBgImg)}
            alt=""
            className="absolute top-0 right-0"
          />
          <div className="text-[14px] text-primary text-center relative z-10">
            {character.character.descTitle}
          </div>
          <div className="text-[14px] text-primary text-center relative z-10">
            {character.character.descSubTitle}
          </div>
          <div className="mt-3 text-[12.5px] text-white text-justify relative z-10">
            {character.character.descContent}
          </div>
        </div>
      </div>
      {/* 置底 */}
      <div className="relative mt-auto mb-4 w-full">
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
            <img
              src={imgSrc(character.decorationShortLineImg)}
              alt=""
              className="absolute"
            />
            <div className="text-center">
              {character.character.primaryColorTitle}
            </div>
            <img
              src={imgSrc(character.character.primaryColorImg)}
              alt=""
              className="mt-[6px]"
            />
            <div className="text-center mt-[6px]">
              {character.character.primaryColorContent}
            </div>
          </div>
          <div className="border-l border-primary mx-3 mt-3"></div>
          <div className="relative w-1/2">
            <img
              src={imgSrc(character.decorationShortLineImg)}
              alt=""
              className="absolute"
            />
            <div className="text-center">
              {character.character.greatPartnerTitle}
            </div>
            <img
              src={imgSrc(character.character.greatPartnerImg)}
              alt=""
              className="mt-[6px]"
            />
            <div className="text-center mt-[6px]">
              {character.character.greatPartnerContent}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
