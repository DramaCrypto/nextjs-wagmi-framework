import { Group, Avatar, Text, Menu } from "@mantine/core";
import { useState } from "react";
import { RiArrowDownSFill } from "react-icons/ri";
import { LanguageData } from "../data/LanguageData";

interface LanguageSelectorProps {
  setSelectedLanguage: Function;
}

const LanguageSelector = ({ setSelectedLanguage }: LanguageSelectorProps) => {
  const [lang, setLang] = useState({
    flag: "https://flagcdn.com/w320/us.png",
    langName: "ENG",
    value: "en",
  });

  const handleSelectorOnchange = (value: string | null) => {
    const selectedData = LanguageData.find((lang) => lang.value === value);
    if (selectedData) {
      setSelectedLanguage(value);
      setLang(selectedData);
    } else {
      
    }
  };

  return (
    <label
      htmlFor="languageSelector"
      className="relative cursor-pointer ml-2 lg:ml-3 xl:ml-5"
    >
      <Menu
        shadow="lg"
        width="none"
        trigger="hover"
        position="bottom-end"
        arrowPosition="side"
        withArrow
        arrowSize={15}
        arrowOffset={20}
        classNames={{
          dropdown: "w-32 xl:w-36 mxl:w-44",
        }}
        transitionProps={{ transition: "pop-top-right", duration: 350 }}
      >
        <Menu.Target>
          <Group noWrap spacing={0} className="w-fit space-x-0 mr-1 lg:mr-0">
            <Avatar
              src={lang.flag}
              radius={0}
              classNames={{
                root: "flex justify-center items-center min-w-[0px] w-6 md:w-4 lg:w-5 xl:w-6 mxl:w-10 h-4 lg:h-5 xl:h-6 mxl:h-6 mr-1 md:mr-0 lg:mr-2",
                image: "rounded-none w-full h-full",
              }}
            />
            <Text className="text-white text-base xl:text-lg font-semibold m-0 p-0 lg:ml-2 uppercase lg:inline-block md:hidden">
              {lang.langName}
            </Text>
            <RiArrowDownSFill className="text-white w-5 lg:w-7 h-5 lg:h-7" />
          </Group>
        </Menu.Target>

        <Menu.Dropdown>
          {LanguageData.map((item) => {
            const { flag, langName, value } = item;
            return (
              <Menu.Item
                key={value}
                onClick={() => handleSelectorOnchange(value)}
              >
                <div className="flex justify-start items-center space-x-2">
                  <div className="w-6 xl:w-7 mxl:w-8 h-auto">
                    <img alt="" src={flag} />
                  </div>
                  <span className="text-xs lg:text-sm mxl:text-base font-semibold text-gray-700">
                    {langName}
                  </span>
                </div>
              </Menu.Item>
            );
          })}
        </Menu.Dropdown>
      </Menu>
    </label>
  );
};

export default LanguageSelector;
