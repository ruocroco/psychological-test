export default function LandingPage() {
  return (
    <div className="relative max-w-[450px] h-screen pt-[60vh] mx-auto">
      <img
        loading="lazy"
        src="/home.png"
        className="absolute h-full w-full object-cover object-center inset-0"
      />
      <img
        loading="lazy"
        src="/dec-up.png"
        className="aspect-[11.83] object-contain object-center w-[90%] absolute top-[12px] left-0 right-0 mx-auto"
      />
      <button className="relative w-[150px] h-[50px] cursor-pointer hover:brightness-[1.05] bg-transparent mx-auto z-10 flex items-center justify-center">
        <span className="relative tracking-[0.2em] text-[18px] z-10">
          立即測驗
        </span>
        <img
          loading="lazy"
          src="/button.png"
          className="absolute h-full w-full object-cover object-center top-0"
        />
      </button>
      <img
        loading="lazy"
        src="/dec-bottom.png"
        className="absolute bottom-[10px] aspect-[10.39] object-contain object-center mx-auto w-[90%] left-0 right-0"
      />
    </div>
  );
}
