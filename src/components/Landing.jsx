import { imgSrc } from "@/utils/imgSrc";
import landingJson from "@/resources/landing";

export default function Landing(props) {
  const { setScores } = props ?? {};
  if (!setScores) return null;

  function begin() {
    setScores([0, 0, 0, 0]);
  }

  return (
    <div className="relative max-w-[450px] h-screen pt-[60vh] mx-auto">
      <img
        src={imgSrc(landingJson.landingBgImg)}
        className="absolute h-full w-full object-cover object-center inset-0"
      />
      <img
        src={imgSrc(landingJson.decorationTopLineImg)}
        className="aspect-[11.83] object-contain object-center w-[90%] absolute top-[12px] left-0 right-0 mx-auto"
      />
      <button
        className="relative w-[150px] h-[50px] cursor-pointer hover:brightness-[1.05] bg-transparent mx-auto z-10 flex items-center justify-center"
        onClick={begin}
      >
        <span className="relative tracking-[0.2em] text-[18px] z-10">
          {landingJson.buttonText}
        </span>
        <img
          src={imgSrc(landingJson.buttonBgImg)}
          className="absolute h-full w-full object-cover object-center top-0"
        />
      </button>
      <img
        src={imgSrc(landingJson.decorationBottomLineImg)}
        className="absolute bottom-[10px] aspect-[10.39] object-contain object-center mx-auto w-[90%] left-0 right-0"
      />
    </div>
  );
}
