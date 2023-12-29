export default function Question3() {
  return (
    <div className="flex-col overflow-hidden relative flex aspect-[0.5622188905547226] max-w-[375px] items-center px-4 py-3">
      <img
        loading="lazy"
        srcSet="public/start.png"
        className="absolute h-full w-full object-cover object-center inset-0"
      />
      <img
        loading="lazy"
        src="public/dec-up.png"
        className="aspect-[11.83] object-contain object-center w-full overflow-hidden"
      />
      <div className="relative text-white text-sm font-semibold max-w-[299px] mt-96">
        在一個古老的世界中，存在著四個強大的元素，地、水、火、風。這些元素不僅代表了自然的力量，也象徵著不同的人格特質，你是一位勇敢的探險家，踏上了尋找和平衡這四個元素的旅程。
      </div>
      <div className="flex-col relative text-orange-200 text-lg font-bold tracking-[3.6px] whitespace-nowrap justify-center items-stretch overflow-hidden aspect-[3] mt-6 px-8 py-4">
        <img
          loading="lazy"
          srcSet="public/button.png"
          className="absolute h-full w-full object-cover object-center inset-0"
        />
        遊戲開始
      </div>
      <img
        loading="lazy"
        src="public/dec-bottom.png"
        className="aspect-[10.39] object-contain object-center w-full overflow-hidden mt-9"
      />
    </div>
  );
}
