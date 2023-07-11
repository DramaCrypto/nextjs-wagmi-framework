import { Box } from "@mantine/core";
// icons
import { HiArrowRight } from "react-icons/hi";

import RanAnimatedBtn from "../../components/RanAnimatedBtn/RanAnimatedBtn";

const Hero = () => {
  return (
    <Box className="h-[190px] xxsm:h-[220px] xsm:h-[300px] sm:h-[390px] md:h-[480px] lg:h-[570px] xl:h-[700px] mxl:h-[780px] 2xl:h-[890px] 3xl:h-[990px] 4xl:h-screen relative overflow-hidden z-[2]">
      <Box
        className="h-full w-full relative flex justify-center items-end"
        style={{
          background: "url(/images/Banner.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
          backgroundSize: "100% 100%",
        }}
      >
        <Box className="absolute bottom-0 left-0 w-fit">
          <div className="flex justify-start items-end">
            <div className="hero_img_animation w-6 xsm:w-10 sm:w-16 md:w-20 lg:w-28 xl:w-32 mxl:w-40 2xl:w-44 3xl:w-48">
              <img src="/images/heroImg1.png" alt="" className="w-full h-auto" />
            </div>
            <div className="hero_img_animation2 w-6 xsm:w-10 sm:w-16 md:w-20 lg:w-28 xl:w-32 mxl:w-40 2xl:w-44 3xl:w-48">
              <img src="/images/heroImg2.png" alt="" className="w-full h-auto" />
            </div>
            <div className="hero_img_animation w-6 xsm:w-10 sm:w-16 md:w-20 lg:w-28 xl:w-32 mxl:w-40 2xl:w-44 3xl:w-48">
              <img src="/images/heroImg3.png" alt="" className="w-full h-auto" />
            </div>
          </div>
        </Box>

        <div className="-mb-5 xsm:mb-[2%] sm:mb-[6%] lg:mb-[9%] 3xl:mb-[11%] mr-16 xsm:mr-[7%] lg:mr-[3%] flex flex-col justify-center items-center scale-[0.50] xsm:scale-[0.60] sm:scale-75 md:scale-90 xl:scale-110 mxl:scale-100">
          <h2 className="text-white font-bold font-cusWickedMouse text-2xl mxl:text-3xl 2xl:text-[33px] 3xl:text-4xl tracking-widest">
            Download Now
          </h2>
          <div className="flex justify-center items-center space-x-2 mxl:space-x-3 mt-2 mxl:mt-5">
            <a href=" " target="_blank" className="block">
              <img
                src="/images/appStore.png"
                alt=""
                className="h-10 mxl:h-12 2xl:h-14 3xl:h-16 w-auto"
              />
            </a>
            <a href=" " target="_blank" className="block">
              <img
                src="/images/googlePlay.png"
                alt=""
                className="h-10 mxl:h-12 2xl:h-14 3xl:h-16 w-auto"
              />
            </a>
          </div>

          <div className="mt-4 mxl:mt-7">
            <RanAnimatedBtn classNames="bg-[#26316d] py-2 mxl:py-3 px-5 mxl:px-7 rounded-full transition-all duration-300">
              <div className="flex justify-center items-center text-white text-2xl mxl:text-[27px] 3xl:text-3xl font-semibold uppercase space-x-2 mxl:space-x-3">
                <img
                  src="/images/pandaIcon.png"
                  alt=""
                  className="w-auto h-7 mxl:h-9 3xl:h-11"
                />
                <span className="tracking-wider">Shibadex</span>
                <HiArrowRight className="stroke-white text-2xl mxl:text-[33px] 3xl:text-4xl -ml-4" />
              </div>
            </RanAnimatedBtn>
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default Hero;
