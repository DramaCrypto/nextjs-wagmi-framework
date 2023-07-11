
const FindShibamons = () => {
  return (
    <div className="w-full relative z-[2] grid grid-cols-1 sm:grid-cols-9">
      <div className="sm:col-span-3 max-h-[1000px]">
        <img
          src="/images/findShibamons.png"
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="w-full h-full bg-[linear-gradient(126.24deg,#F4B746_13.85%,#E71E25_71.66%)] sm:col-span-6 flex justify-center items-center text-white p-6 xsm:p-10">
        <div className="max-w-2xl">
          <h1 className="font-bold text-[18px] sm:text-[20px] lg:text-[30px] xl:text-[36px] mxl:text-[36px] 2xl:text-[42px] 3xl:text-[48px] font-cusWickedMouse tracking-wider leading-normal">
            How to find treasure chests and Shibamons?
          </h1>

          <p className="text-sm md:text-base xl:text-xl 3xl:text-2xl font-medium mt-2 md:mt-3 3xl:mt-5">
            A world map exists <br /> for the universe in Shibamon.
          </p>

          <div className="flex justify-start items-center space-x-2 xl:space-x-3 mt-5 xsm:mt-2 md:mt-4 xl:mt-10 3xl:mt-14">
            <h3 className="text-4xl md:text-5xl xl:text-6xl font-medium">+</h3>
            <p className="text-xs md:text-sm xl:text-lg 3xl:text-xl">
              User receives a notification if they are in close proximity to a
              Shibamon, item, or treasure chest.
            </p>
          </div>

          <div className="flex justify-start items-center space-x-2 xl:space-x-3 mt-1 md:mt-2 xl:mt-5">
            <h3 className="text-4xl md:text-5xl xl:text-6xl font-medium">+</h3>
            <p className="text-xs md:text-sm xl:text-lg 3xl:text-xl">
              User can look at a directional map or more detailed map to see
              where they can go.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindShibamons;
