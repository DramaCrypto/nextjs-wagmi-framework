import { Container, Group, Text, Title } from "@mantine/core";

const CatchShibamon = () => {
  return (
    <div
      className="w-full relative py-4 sm:py-5 md:py-7 lg:py-10 mxl:py-20"
      style={{
        background: `url(/images/catchShibamon.png)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Container className="w-full py-[10%] 4xl:py-44" size={1536}>
        <div>
          <Group className="md:space-x-2">
            <div className="w-14 sm:w-16 md:w-20 lg:w-24 h-14 sm:h-16 md:h-20 lg:h-24 rounded-full bg-white p-1 md:p-2 lg:p-3">
              <img
                src="/images/trainerImg2.png"
                alt=""
                className="w-full h-full rounded-full"
              />
            </div>
            <div className="text-left">
              <Title className="text-cusBlack font-bold text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-cusWickedMouse tracking-wider">
                Catch Shibamon
              </Title>
              <Title className="text-white font-medium text-xl sm:text-2xl lg:text-3xl xl:text-4xl sm:mt-1">
                and Find Treasure!
              </Title>
            </div>
          </Group>
          <Text
            component="p"
            className="p-0 m-0 mt-3 lg:mt-5 mxl:mt-8 text-white max-w-[200px] xsm:max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg text-sm md:text-base xl:text-lg"
          >
            Catch and Collect Shibamon while seeking for treasure, eggs, and
            items out in the world. Can use this image below instead of the
            dinosaur.
          </Text>
        </div>
      </Container>
    </div>
  );
};

export default CatchShibamon;
