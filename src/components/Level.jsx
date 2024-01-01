import { imgSrc } from "@/utils/imgSrc";
import levelsJson from "@/resources/level.json";

export default function Level(props) {
  console.log("here");
  const { scores, setScores } = props ?? {};
  if (!scores || !setScores) return null;
  console.log("there");

  const index = scores.reduce((sum, score) => sum + score);

  const level = levelsJson[index];

  return (
    <div
      onClick={() => {
        scores[0]++;
        setScores([...scores]);
      }}
    >
      Level: {index}
    </div>
    // <div className="relative max-w-[450px] h-screen mx-auto flex-col flex items-center">
    //   <img
    //     src={imgSrc(level.levelBgImg)}
    //     className="absolute h-full w-full object-cover object-center inset-0"
    //   />
    //   <img
    //     loading="lazy"
    //     src={imgSrc(level.decorationTopLineImg)}
    //     className="object-contain object-center w-[90%] absolute top-[12px] left-0 right-0 mx-auto"
    //   />
    //   <div className="relative text-orange-200 text-base font-bold tracking-widest mt-[50px]">
    //     {level.story.title}
    //   </div>
    //   <div className="w-full absolute bottom-[60px] flex flex-col items-center">
    //     <div className="flex-col relative justify-center items-stretch overflow-hidden flex aspect-[5.276923076923077] w-[90%] p-4 pb-5">
    //       <img
    //         src={imgSrc(level.questionBlockBgImg)}
    //         className="absolute h-full w-full object-cover object-center inset-0"
    //       />
    //       <div className="relative items-stretch flex justify-between gap-2">
    //         <div className="text-orange-200 text-4xl whitespace-nowrap">Q1</div>
    //         <div className="text-orange-200 text-sm font-bold tracking-tight self-center grow shrink basis-auto my-auto">
    //           {level.story.question}
    //         </div>
    //       </div>
    //     </div>
    //     <ul>
    //       {level.story.options.map((option) => (
    //         <div
    //           key={option.key}
    //           className="flex-col relative items-stretch overflow-hidden flex aspect-[8.805555555555555] w-[317px] max-w-[317px] justify-center mt-2 border-[0.5px] border-solid border-orange-200"
    //         >
    //           <img
    //             src={imgSrc(level.optionBlockBgImg)}
    //             className="absolute h-full w-full object-cover object-center inset-0"
    //           />
    //           <div className="relative justify-between items-center flex gap-0 p-2.5">
    //             <div className="text-yellow-900 text-xs tracking-tighter whitespace-nowrap my-auto">
    //               Ⅰ.
    //             </div>
    //             <div className="text-yellow-900 text-xs font-bold self-stretch grow whitespace-nowrap">
    //               {option.content}
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </ul>
    //   </div>
    //   <img
    //     src={imgSrc(level.decorationBottomLineImg)}
    //     className="object-contain object-center w-[90%] absolute bottom-[10px] left-0 right-0 mx-auto"
    //   />
    // </div>
  );
}
