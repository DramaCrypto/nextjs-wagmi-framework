import { Container, Group } from "@mantine/core";

// icons
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillYoutube,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
import { FiArrowRight } from "react-icons/fi";
import { useTranslation } from "packages/localization";
import { footerItemsData } from "../../data/FooterItemsData";

const Footer = () => {
  const { t } = useTranslation()

  return (
    <div className="w-full bg-white">
      <Container size={1536} className="py-8 xl:py-10 mxl:py-14">
        <div className="grid grid-cols-1 md:grid-cols-9 gap-6">
          <ul className="md:col-span-4 grid xsm:grid-rows-3 xsm:grid-cols-2 gap-3 mxl:gap-5">
            {footerItemsData.map((item) => {
              const { href, label } = item;
              return (
                <li key={label}>
                  <a
                    href={href}
                    className="text-black hover:text-cusOrange transition-all duration-300 
                    font-medium text-xs xsm:text-sm xl:text-base"
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="md:col-span-5 flex flex-col sm:flex-row justify-between items-center w-full">
            <div>
              <div className="flex justify-start items-center space-x-3 mt-2 md:mt-3.5">
                <a href=" " target="_blank">
                  <AiFillFacebook className="hover:text-cusOrange text-[#858585] transition-all duration-300 hover:scale-110 h-auto w-8 lg:w-10 xl:11 mxl:w-14" />
                </a>
                <a href=" " target="_blank">
                  <AiFillTwitterSquare className="hover:text-cusOrange text-[#858585] transition-all duration-300 hover:scale-110 h-auto w-8 lg:w-10 xl:11 mxl:w-14" />
                </a>
                <a href=" " target="_blank">
                  <AiFillInstagram className="hover:text-cusOrange text-[#858585] transition-all duration-300 hover:scale-110 h-auto w-8 lg:w-10 xl:12 mxl:w-16" />
                </a>
                <a href=" " target="_blank">
                  <AiFillLinkedin className="hover:text-cusOrange text-[#858585] transition-all duration-300 hover:scale-110 h-auto w-8 lg:w-10 xl:11 mxl:w-14" />
                </a>

                <a href=" " target="_blank">
                  <AiFillYoutube className="hover:text-cusOrange text-[#858585] transition-all duration-300 hover:scale-110 h-auto w-8 lg:w-10 xl:12 mxl:w-16" />
                </a>
              </div>
            </div>
            <div className="w-auto h-10 md:h-12 lg:h-16 mxl:h-20 mt-4 md:mt-0">
              <img src="/images/textLogo.png" alt="" className="w-auto h-full" />
            </div>
          </div>
        </div>
      </Container>

      <Group className="bg-[#FFE5A4] py-4 xl:py-6 justify-center flex-col xsm:flex-row space-x-4 lg:space-x-6 xl:space-x-8">
        <a
          href=" "
          className="inline-block w-fit text-sm sm:text-base xl:text-lg hover:underline"
        >
          <Group>
            <p>{t('Terms of Service')}</p>
            <div className="bg-cusOrange h-5 w-5 rounded-full p-0.5">
              <FiArrowRight className="text-black" />
            </div>
          </Group>
        </a>
        <a
          href=" "
          className="inline-block w-fit text-sm sm:text-base xl:text-lg hover:underline"
        >
          <Group>
            <p>{t('Copyright Policy')}</p>
            <div className="bg-cusOrange h-5 w-5 rounded-full p-0.5">
              <FiArrowRight className="text-black" />
            </div>
          </Group>
        </a>
        <a
          href=" "
          className="inline-block w-fit text-sm sm:text-base xl:text-lg hover:underline"
        >
          <Group>
            <p>{t('Privacy Policy')}</p>
            <div className="bg-cusOrange h-5 w-5 rounded-full p-0.5">
              <FiArrowRight className="text-black" />
            </div>
          </Group>
        </a>
      </Group>

      <div className="bg-[#253B7B] pt-7 xl:pt-10 pb-8">
        <Container size={1536}>
          <p className="text-white text-center w-fit mx-auto text-xs sm:text-sm">
            {t('Shibamon GO is playable in English, French, German, Italian, Russian, Japanese, Spanish, Traditional Chinese, Korean, Thai, Brazillian Portuguese, Turkish, and Indonesian.')}
            <br /> <br />
            {t('©2023 Niantic, Inc. ©2023 Shibamon. ©1995–2023 Nintendo / Creatures Inc. / GAME FREAK inc. Shibamon and Shibamon character names are trademarks of Nintendo. Apple and the Apple logo are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Android, Google Play and the Google Play logo are trademarks of Google LLC. During gameplay, please be aware of your surroundings and play safely.')}
          </p>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
