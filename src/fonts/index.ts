import { Cormorant_Garamond, Inter } from '@next/font/google';

export const FontCormorantGaramond = Cormorant_Garamond({
  weight: ['400', '500', '700'],
  style: ['italic', 'normal'],
  subsets: ['latin'],
  variable: '--font-cormorant-garamond',
});

export const FontInter = Inter({
  weight: ['200', '300', '400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-inter',
});
