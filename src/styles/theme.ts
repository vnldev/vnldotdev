import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,
  fonts: {
    heading: 'Montserrat',
    body: 'Inter',
  },

  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode('gray.200', 'gray.900')(props),
        color: mode('gray.900', 'gray.50')(props),
        overflowX: 'hidden',
      },
      header: {
        bg: mode('gray.50', 'gray.900')(props),
      },
      footer: {
        bg: mode('gray.50', 'blackAlpha.200')(props),
      },
      'h1, h2, h3, h4, h5, h6': {
        color: mode('gray.700', 'gray.300')(props),
      },
      label: {
        color: mode('gray.700', 'gray.200')(props),
      },
      '.chakra-text': {
        color: mode('gray.900', 'white')(props),
      },
      '::placeholder': {
        color: mode('gray.600', 'gray.400')(props),
      },
      '.chakra-container': {
        color: mode('gray.900', 'gray.200')(props),
      },
    }),
  },
});
