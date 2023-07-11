import { Box, Container, Group, Text, Title } from "@mantine/core";
import RanAnimatedBtn from "../../components/RanAnimatedBtn/RanAnimatedBtn";

const NewTrainer = () => {
  return (
    <Container
      className="flex flex-col md:flex-row justify-between items-center w-full mt-14"
      size={1536}
    >
      <Group className="lg:space-x-3 xl:space-x-6">
        <Box>
          <div className="bg-[linear-gradient(180deg,#FDAA1C_0%,#FFE76A_100%)] border-4 border-white p-2 sm:p-3 md:p-4 w-16 sm:w-24 md:w-28 lg:w-32 xl:w-36 h-16 sm:h-24 md:h-28 lg:h-32 xl:h-36 rounded-full hover:animate-spin">
            <div className="w-full h-full bg-white flex justify-center items-center rounded-full">
              <span className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl text-[#082F7A] font-black">
                1
              </span>
            </div>
          </div>
        </Box>

        <Group className="flex-col items-start">
          <Title className="text-cusBlack font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-cusWickedMouse">
            New Trainer
          </Title>
          <Text
            component="p"
            className="p-0 m-0 text-cusBlack text-xs sm:text-sm lg:text-base xl:text-lg max-w-[250px] lg:max-w-sm font-medium"
          >
            Follow this simple guide on getting started with Shibamon GO!
          </Text>
          <RanAnimatedBtn>White Paper</RanAnimatedBtn>
        </Group>
      </Group>

      <Group
        noWrap
        className="items-end justify-end flex-1 mt-8 xsm:mt-5 sm:mt-8 md:mt-0"
      >
        <div className="up_down_animation bottom_circle_shadow z-[4] w-[20.5%] md:w-[17%]">
          <img src="/images/trainerImg1.png" alt="" className="w-full h-auto" />
        </div>
        <div className="up_down_animation2 bottom_circle_shadow z-[4] w-[31%] md:w-[23%]">
          <img src="/images/trainerImg2.png" alt="" className="w-full h-auto" />
        </div>
        <div className="up_down_animation bottom_circle_shadow z-[4] w-[20.5%] md:w-[17%]">
          <img src="/images/trainerImg3.png" alt="" className="w-full h-auto" />
        </div>
        <div className="up_down_animation2 bottom_circle_shadow z-[4] w-[19%] md:w-[16%]">
          <img src="/images/trainerImg4.png" alt="" className="w-full h-auto" />
        </div>
      </Group>
    </Container>
  );
};

export default NewTrainer;
