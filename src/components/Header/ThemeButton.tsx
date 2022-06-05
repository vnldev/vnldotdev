import { Button, Icon, useColorMode, useMediaQuery } from '@chakra-ui/react';
import { MdLightMode, MdDarkMode } from 'react-icons/md';

export function ThemeButton() {
  const { colorMode, toggleColorMode } = useColorMode();

  const [isGreaterThan618] = useMediaQuery('(min-width: 618px)');

  const text = isGreaterThan618
    ? `Change to ${colorMode === 'light' ? 'dark' : 'light'} mode`
    : '';

  return (
    <Button
      variant='outline'
      alignSelf='center'
      display='flex'
      alignItems='center'
      gap='2'
      size={['xs', 'xs', 'sm', 'md']}
      fontSize={['xs', 'xs', 'sm', 'md']}
      onClick={toggleColorMode}
    >
      <Icon
        alignSelf='center'
        as={colorMode === 'light' ? MdDarkMode : MdLightMode}
      />
      {text}
    </Button>
  );
}
