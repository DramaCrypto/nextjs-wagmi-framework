import { useState, useEffect } from "react";
import {
  Header,
  Container,
  Group,
  Burger,
  Transition,
  Divider,
  Box,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link } from "packages/uikit";
import { useRouter } from 'next/router'
import { links } from "../../data/NavbarData";
import FreeMintButton from "../FreeMintButton/FreeMintButton";
import LanguageSelector from "../LanguageSelector";

const HEADER_HEIGHT = 85;

interface HeaderWithNavbarProps {
  lastScrollTopValue?: number;
  lastScrollTopValue2?: number;
}

const HeaderWithNavbar = (props: HeaderWithNavbarProps) => {
  const [opened, { toggle }] = useDisclosure(false);
  const { lastScrollTopValue = 765, lastScrollTopValue2 = 120 } = props;
  const [headerBg, setHeaderBg] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const { pathname } = useRouter()

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={
        `${pathname.startsWith(link.link) ? "bg-cusOrange md:rounded" : "nav-item"
        } block py-3 px-3 md:py-1 md:px-1.5 lg:px-2.5 mxl:px-5 group relative text-sm md:text-xs lg:text-sm xl:text-base
         font-medium transition-all duration-300 uppercase text-white`
      }
    >
      <span>{link.label}</span>
    </Link>
  ));

  useEffect(() => {
    const lastScrollTop = lastScrollTopValue;
    const lastScrollTop2 = lastScrollTopValue2;
    window.addEventListener("scroll", () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      // @ts-ignore
      if (scrollTop > lastScrollTop2) {
        setHeaderBg(1);
        // @ts-ignore
        if (scrollTop > lastScrollTop) {
          setHeaderBg(2);
        }
      } else {
        setHeaderBg(0);
      }
    });
  }, [lastScrollTopValue, lastScrollTopValue2]);

  return (
    <Header
      height={{ xs: 65, sm: HEADER_HEIGHT }}
      px="md"
      className={`z-50 bg-[#243D80] py-3
                ${headerBg === 0
          ? "relative -translate-y-0 border-none"
          : headerBg === 1
            ? "-translate-y-full"
            : headerBg === 2 &&
            "sticky top-0 -translate-y-0 transition-all duration-500 border-b-2 border-[#243D80] shadow-xl"
        }
            `}
    >
      <Container
        className="flex justify-between items-center h-full"
        size={1536}
      >
        <Box className="">
          <a href="/" className="flex justify-start items-center">
            <img
              className="h-8 sm:h-10 xl:h-12 mxl:h-[70px] w-auto md:w-24 lg:w-auto"
              src="/images/smallLogo.png"
              alt="Shibamon Go Logo"
            />
          </a>
        </Box>

        <Group spacing={0} className="hidden md:flex justify-end">
          {items}

          <LanguageSelector setSelectedLanguage={setSelectedLanguage} />

          <div className="hidden md:block lg:pl-2 xl:pl-3 mxl:pl-4">
            <FreeMintButton>Free Mint</FreeMintButton>
          </div>
        </Group>

        <Group spacing={0} className="md:hidden space-x-2">
          <LanguageSelector setSelectedLanguage={setSelectedLanguage} />
          <Burger opened={opened} onClick={toggle} color="#fff" size="md" />
        </Group>

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Box
              className="absolute bg-[#243D80] left-0 w-full z-10 overflow-hidden md:hidden rounded-none pb-2 overflow-y-auto"
              top={{ xs: 65, sm: HEADER_HEIGHT }}
              style={styles}
            >
              {items}

              <Divider my="xs" className="border-[#353564]" />

              <FreeMintButton>Free Mint</FreeMintButton>
            </Box>
          )}
        </Transition>
      </Container>
    </Header>
  );
};

export default HeaderWithNavbar;
