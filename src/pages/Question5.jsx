export default function Question5() {
  return (
    <div className="flex-col overflow-hidden relative flex aspect-[0.5622188905547226] max-w-[375px] items-center px-4 py-3">
      <img
        loading="lazy"
        srcSet="public/finish.png"
        className="absolute h-full w-full object-cover object-center inset-0"
      />
      <img
        loading="lazy"
        src="public/dec-up.png"
        className="aspect-[11.83] object-contain object-center w-full overflow-hidden"
      />
      <div className="flex-col relative justify-center items-center overflow-hidden flex aspect-[0.9923954372623575] w-full max-w-[261px] mt-28 px-12 py-12">
        <img
          loading="lazy"
          srcSet="public/bk-input.png"
          className="absolute h-full w-full object-cover object-center inset-0"
        />
        <div className="relative text-yellow-900 text-center text-lg font-bold mt-14">
          請輸入你的名字
        </div>
        <div className="relative self-stretch bg-white flex shrink-0 h-[30px] flex-col mt-3 mb-12 rounded-3xl border-2 border-solid border-yellow-900" />
      </div>
      <div className="flex-col relative text-orange-200 text-lg font-bold tracking-[3.6px] whitespace-nowrap justify-center items-stretch overflow-hidden aspect-[3] mt-14 px-6 py-4">
        <img
          loading="lazy"
          srcSet="public/button.png"
          className="absolute h-full w-full object-cover object-center inset-0"
        />
        看測驗結果
      </div>
      <img
        loading="lazy"
        src="public/dec-bottom.png"
        className="aspect-[10.39] object-contain object-center w-full overflow-hidden mt-28"
      />
    </div>
  );
}
