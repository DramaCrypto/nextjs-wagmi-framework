import { Container, Title } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { FaArrowRight } from "react-icons/fa";
import { teamData } from "../../data/TeamData";

// icons
import RanAnimatedBtn from "../../components/RanAnimatedBtn/RanAnimatedBtn";

const Team = () => {
  return (
    <div>
      <Container className="w-full" size={1536}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-12 mt-10 xl:mt-16 max-w-sm mx-auto md:max-w-full">
          <div className="bg-[#FFFFC3] p-4 lg:p-5 mxl:p-6 rounded-lg md:rounded-xl flex flex-col justify-center items-center">
            <h3 className="text-base md:text-lg xl:text-xl mxl:text-2xl text-cusBlack mb-3 text-center">
              Hatch Eggs by Spending Mongo or Shib
            </h3>
            <RanAnimatedBtn>Go To Page</RanAnimatedBtn>
          </div>
          <div className="bg-[#FFFFC3] p-4 lg:p-5 mxl:p-6 rounded-lg md:rounded-xl flex flex-col justify-center items-center">
            <h3 className="text-base md:text-lg xl:text-xl mxl:text-2xl text-cusBlack mb-3 text-center">
              Stake Token and get Rewarded Shibamon Balls
            </h3>
            <RanAnimatedBtn>Go To Page</RanAnimatedBtn>
          </div>
          <div className="bg-[#FFFFC3] p-4 lg:p-5 mxl:p-6 rounded-lg md:rounded-xl flex flex-col justify-center items-center">
            <h3 className="text-base md:text-lg xl:text-xl mxl:text-2xl text-cusBlack mb-3 text-center">
              Upgrade Shibamon Ball Center
            </h3>
            <RanAnimatedBtn>Go To Page</RanAnimatedBtn>
          </div>
        </div>

        <div className="mt-28 md:mt-32 xl:mt-44">
          <Title className="text-cusBlack font-bold text-xl sm:text-2xl lg:text-3xl xl:text-4xl mxl:text-5xl font-cusWickedMouse tracking-wider text-center">
            Shibadex
          </Title>

          <div className="mt-4 lg:mt-6 xl:mt-10">
            <Carousel
              className="relative"
              withControls
              withIndicators={false}
              nextControlIcon={
                <div className="bg-white border-2 sm:border-4 border-[#EE9D00] rounded-full p-1 sm:p-2 xl:p-3 w-full h-full">
                  <FaArrowRight className="text-[#EE9D00] w-5 sm:w-6 h-auto" />
                </div>
              }
              previousControlIcon={
                <div className="bg-white border-2 sm:border-4 border-[#605E5E] rounded-full p-1 sm:p-2 xl:p-3 w-full h-full">
                  <FaArrowRight className="text-[#605E5E] w-5 sm:w-6 h-auto rotate-180" />
                </div>
              }
              classNames={{
                control: "border-none",
              }}
              slideSize="22%"
              loop
              dragFree
              slideGap={25}
              breakpoints={[
                { maxWidth: "3xl", slideSize: "22%", slideGap: 25 },
                { maxWidth: "2xl", slideSize: "22%", slideGap: 20 },
                { maxWidth: "mxl", slideSize: "23%", slideGap: 20 },
                { maxWidth: "xl", slideSize: "24%", slideGap: 20 },
                { maxWidth: "lg", slideSize: "32%", slideGap: 10 },
                { maxWidth: "md", slideSize: "39%", slideGap: 20 },
                { maxWidth: "sm", slideSize: "47%", slideGap: 20 },
                { maxWidth: "xsm", slideSize: "100%", slideGap: 5 },
              ]}
              align="start"
            >
              {teamData.map((member) => {
                const { id, photo, name } = member;
                return (
                  <Carousel.Slide
                    key={id}
                    className="flex justify-center items-center overflow-hidden"
                  >
                    <div className="w-[210px] sm:w-[260px] lg:w-[280px] xl:w-[313.52px] h-auto relative">
                      <img src={photo} alt="" className="w-full h-full" />

                      <Title className="text-white font-bold text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-center">
                        {name}
                      </Title>
                    </div>
                  </Carousel.Slide>
                );
              })}
            </Carousel>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Team;
