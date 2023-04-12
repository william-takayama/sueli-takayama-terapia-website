import { extendBaseTheme, theme as chakraTheme } from '@chakra-ui/react';
import { customColors } from './overrides/colors';
import { customComponents } from './overrides/components';
import { customStyles } from './overrides/styles';

export const theme = extendBaseTheme({
  components: customComponents,
  colors: customColors,
  styles: customStyles,
  breakpoints: {
    base: '0em',
    sm: '24em', // 380px
    md: '48em', // 768px
    lg: '62em', // 992px
    xl: '80em', // 1280px
    '2xl': '96em', // 1536px
  },
}) as typeof chakraTheme;
