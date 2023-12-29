export default function Question2() {
  return (
    <div className="flex-col overflow-hidden relative flex aspect-[0.5622188905547226] max-w-[375px] items-center px-4 py-3">
      <img
        loading="lazy"
        srcSet="public/home.png"
        className="absolute h-full w-full object-cover object-center inset-0"
      />
      <img
        loading="lazy"
        src="public/dec-up.png"
        className="aspect-[11.83] object-contain object-center w-full overflow-hidden"
      />
      <div className="flex-col relative text-orange-200 text-lg font-bold tracking-[3.6px] whitespace-nowrap justify-center items-stretch overflow-hidden aspect-[3] mt-96 px-9 py-4">
        <img
          loading="lazy"
          srcSet="public/button.png"
          className="absolute h-full w-full object-cover object-center inset-0"
        />
        立即測驗
      </div>
      <img
        loading="lazy"
        src="public/dec-bottom.png"
        className="aspect-[10.39] object-contain object-center w-full overflow-hidden mt-36"
      />
    </div>
  );
}
