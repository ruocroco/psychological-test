import { imgSrc } from "@/utils/imgSrc";

export default function Question() {
  const resource = {
    title: "地之門",
    question: "你來到了一個被巨石包圍的神秘門扉前......",
    options: [
      "細心檢查門扉的機關和結構",
      "思考門扉背後可能隱藏的意義",
      "直接嘗試推開門扉，看看會發生什麼",
      "感受門扉散發的能量，試圖與之溝通",
    ],
  };

  return (
    <div className="relative max-w-[450px] h-screen mx-auto flex-col flex items-center">
      <img
        src={imgSrc("bg-question/01.png")}
        className="absolute h-full w-full object-cover object-center inset-0"
      />
      <img
        loading="lazy"
        src={imgSrc("decoration/up.png")}
        className="object-contain object-center w-[90%] absolute top-[12px] left-0 right-0 mx-auto"
      />
      <div className="relative text-orange-200 text-base font-bold tracking-widest mt-[50px]">
        {resource.title}
      </div>
      <div className="w-full absolute bottom-[60px] flex flex-col items-center">
        <div className="flex-col relative justify-center items-stretch overflow-hidden flex aspect-[5.276923076923077] w-[90%] p-4 pb-5">
          <img
            src={imgSrc("decoration/question-title.png")}
            className="absolute h-full w-full object-cover object-center inset-0"
          />
          <div className="relative items-stretch flex justify-between gap-2">
            <div className="text-orange-200 text-4xl whitespace-nowrap">Q1</div>
            <div className="text-orange-200 text-sm font-bold tracking-tight self-center grow shrink basis-auto my-auto">
              {resource.question}
            </div>
          </div>
        </div>
        {resource.options.map((option, index) => (
          <div
            key={index}
            className="flex-col relative items-stretch overflow-hidden flex aspect-[8.805555555555555] w-[317px] max-w-[317px] justify-center mt-2 border-[0.5px] border-solid border-orange-200"
          >
            <img
              src={imgSrc("decoration/option-button.png")}
              className="absolute h-full w-full object-cover object-center inset-0"
            />
            <div className="relative justify-between items-center flex gap-0 p-2.5">
              <div className="text-yellow-900 text-xs tracking-tighter whitespace-nowrap my-auto">
                Ⅰ.
              </div>
              <div className="text-yellow-900 text-xs font-bold self-stretch grow whitespace-nowrap">
                {option}
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src={imgSrc("decoration/bottom.png")}
        className="object-contain object-center w-[90%] absolute bottom-[10px] left-0 right-0 mx-auto"
      />
    </div>
  );
}
