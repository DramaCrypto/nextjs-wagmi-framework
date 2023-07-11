import { Container, Group, Title } from "@mantine/core";

const GetOn = () => {
  return (
    <div className="bg-[linear-gradient(-20.22deg,#E71E25_0%,#F4B746_51.04%)] w-full relative py-10 xl:py-14 mxl:py-16">
      <Container
        className="flex flex-col md:flex-row justify-between items-center w-full"
        size={1536}
      >
        <div>
          <Group className="md:space-x-2">
            <div className="w-auto h-14 sm:h-16 md:h-20 lg:h-24">
              <img src="/images/trainerImg2.png" alt="" className="w-full h-full" />
            </div>
            {/* <span className="block mt-0.5 sm:mt-1 md:mt-2 lg:mt-3 text-white">
                DOWNLOAD NOW!
              </span> */}
            <div>
              <Title className="text-cusBlack font-bold text-lg sm:text-xl lg:text-2xl xl:text-3xl">
                Ready to Catch them all?{" "}
              </Title>
              <Title className="text-white font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mt-0.5 sm:mt-1 md:mt-2 lg:mt-3">
                DOWNLOAD NOW!
              </Title>
            </div>
          </Group>
          <Group className="mt-8 xl:mt-12 mxl:mt-14 justify-center md:justify-start">
            <a href=" " className="h-8 md:h-10 xl:h-12 mxl:h-14 block">
              <img src="/images/appStore.png" alt="" className="w-auto h-full" />
            </a>
            <a href=" " className="h-8 md:h-10 xl:h-12 mxl:h-14 block">
              <img src="/images/googlePlay.png" alt="" className="w-auto h-full" />
            </a>
            <a href=" " className="h-8 md:h-10 xl:h-12 mxl:h-14 block">
              <img src="/images/GalaxyStore.png" alt="" className="w-auto h-full" />
            </a>
          </Group>
        </div>

        <div className="h-48 xl:h-52 mxl:h-60 mt-8 sm:mt-12 md:mt-0">
          <img src="/images/largeLogo.png" alt="" className="w-auto h-full" />
        </div>
      </Container>
    </div>
  );
};

export default GetOn;
