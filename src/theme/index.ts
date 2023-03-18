import { extendBaseTheme, theme as chakraTheme } from '@chakra-ui/react';
import { customColors } from './overrides/colors';
import { customComponents } from './overrides/components';
import { customStyles } from './overrides/styles';

export const theme = extendBaseTheme({
  components: customComponents,
  colors: customColors,
  styles: customStyles,
}) as typeof chakraTheme;
