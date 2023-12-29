export default function Question1() {
  return (
    <div className="flex-col overflow-hidden relative flex aspect-[0.5622188905547226] max-w-[375px] items-center px-4 py-3">
      <img
        loading="lazy"
        srcSet="bk-question01.png"
        className="absolute h-full w-full object-cover object-center inset-0"
      />
      <img
        loading="lazy"
        src="dec-up.png"
        className="aspect-[11.83] object-contain object-center w-full overflow-hidden"
      />
      <div className="relative text-orange-200 text-base font-bold tracking-widest whitespace-nowrap mt-3.5">
        地之門
      </div>
      <div className="flex-col relative justify-center items-stretch overflow-hidden flex aspect-[5.276923076923077] w-full mt-72 px-3.5 py-3">
        <img
          loading="lazy"
          srcSet="title.png"
          className="absolute h-full w-full object-cover object-center inset-0"
        />
        <div className="relative items-stretch flex justify-between gap-2">
          <div className="text-orange-200 text-4xl whitespace-nowrap">Q1</div>
          <div className="text-orange-200 text-sm font-bold tracking-tight self-center grow shrink basis-auto my-auto">
            你來到了一個被巨石包圍的神秘門扉前......
          </div>
        </div>
      </div>
      <div className="flex-col relative items-stretch overflow-hidden flex aspect-[8.805555555555555] w-[317px] max-w-[317px] justify-center mt-2 border-[0.5px] border-solid border-orange-200">
        <img
          loading="lazy"
          srcSet="list.png"
          className="absolute h-full w-full object-cover object-center inset-0"
        />
        <div className="relative justify-between items-center flex gap-0 p-2.5">
          <div className="text-yellow-900 text-xs tracking-tighter whitespace-nowrap my-auto">
            Ⅰ.
          </div>
          <div className="text-yellow-900 text-xs font-bold self-stretch grow whitespace-nowrap">
            細心檢查門扉的機關和結構
          </div>
        </div>
      </div>
      <div className="flex-col relative items-stretch overflow-hidden flex aspect-[8.805555555555555] w-[317px] max-w-[317px] justify-center mt-2 border-[0.5px] border-solid border-orange-200">
        <img
          loading="lazy"
          srcSet="list.png"
          className="absolute h-full w-full object-cover object-center inset-0"
        />
        <div className="relative justify-between items-center flex gap-0 p-2.5">
          <div className="text-yellow-900 text-xs tracking-tighter whitespace-nowrap my-auto">
            Ⅱ.
          </div>
          <div className="text-yellow-900 text-xs font-bold self-stretch grow whitespace-nowrap">
            思考門扉背後可能隱藏的意義
          </div>
        </div>
      </div>
      <div className="flex-col relative items-stretch overflow-hidden flex aspect-[8.805555555555555] w-[317px] max-w-[317px] justify-center mt-2 border-[0.5px] border-solid border-orange-200">
        <img
          loading="lazy"
          srcSet="list.png"
          className="absolute h-full w-full object-cover object-center inset-0"
        />
        <div className="relative justify-between items-center flex gap-0 p-2.5">
          <div className="text-yellow-900 text-xs tracking-tighter whitespace-nowrap my-auto">
            Ⅲ.
          </div>
          <div className="text-yellow-900 text-xs font-bold self-stretch grow whitespace-nowrap">
            直接嘗試推開門扉，看看會發生什麼
          </div>
        </div>
      </div>
      <div className="flex-col relative items-stretch overflow-hidden flex aspect-[8.805555555555555] w-[317px] max-w-[317px] justify-center mt-2 border-[0.5px] border-solid border-orange-200">
        <img
          loading="lazy"
          srcSet="list.png"
          className="absolute h-full w-full object-cover object-center inset-0"
        />
        <div className="relative justify-between items-center flex gap-0 p-2.5">
          <div className="text-yellow-900 text-xs tracking-tighter whitespace-nowrap my-auto">
            Ⅳ.
          </div>
          <div className="text-yellow-900 text-xs font-bold self-stretch grow whitespace-nowrap">
            感受門扉散發的能量，試圖與之溝通
          </div>
        </div>
      </div>
      <img
        loading="lazy"
        src="dec-bottom.png"
        className="aspect-[10.39] object-contain object-center w-full overflow-hidden mt-3"
      />
    </div>
  );
}
