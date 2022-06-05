import { Flex } from '@chakra-ui/react';

import { Logo } from './Logo';
import { Navbar } from './Navbar';
import { ThemeButton } from './ThemeButton';

export function Header() {
  return (
    <Flex
      as='header'
      w='100%'
      px='2rem'
      h='14'
      justify='space-around'
      boxShadow='md'
      position='fixed'
      top='0'
      zIndex={2}
    >
      <Logo />
      <Navbar />

      <ThemeButton />
    </Flex>
  );
}
