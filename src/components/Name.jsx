import { useState } from "react";
import nameJson from "@/resources/name.json";
import { imgSrc } from "@/utils/imgSrc";

export default function Name(props) {
  const { scores, setUser } = props ?? {};

  const [fadeIn, setFadeIn] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ name: e.target.elements.username.value });
    // send scores and name to GA4 custom event
    console.log("scores :>> ", scores);
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
        src={imgSrc(nameJson.bgImg)}
        className="absolute h-full w-full object-cover object-center inset-0"
      />
      <img
        src={imgSrc(nameJson.decorationTopLineImg)}
        className="object-contain object-center w-[90%] absolute top-[12px] left-0 right-0 mx-auto"
      />

      <div className="relative top-[30%]">
        <form onSubmit={handleSubmit}>
          <div className="relative mx-auto w-[260px] h-[260px]">
            <img
              src={imgSrc(nameJson.inputBgImg)}
              alt=""
              className="absolute top-0 left-0"
            />
            <div className="absolute top-[40%] text-secondary text-lg left-0 w-full text-center">
              <label htmlFor="username" className="">
                {nameJson.inputLabel}
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="mt-[9px] w-[168px] rounded-[23px] border-border border-2 px-4 text-center"
              />
            </div>
          </div>
          <button
            type="submit"
            className="relative mt-[60px] w-[150px] h-[50px] block mx-auto cursor-pointer"
          >
            <img
              src={imgSrc(nameJson.buttonBgImg)}
              alt=""
              className="absolute top-0 left-0 w-full"
            />
            <span className="relative z-10 leading-[50px] text-primary tracking-[0.2em] text-lg">
              {nameJson.buttonText}
            </span>
          </button>
        </form>
      </div>
      <img
        src={imgSrc(nameJson.decorationBottomLineImg)}
        className="object-contain object-center w-[90%] absolute bottom-[10px] left-0 right-0 mx-auto"
      />
    </div>
  );
}
