import { ChakraProvider, Grid, GridItem } from '@chakra-ui/react';

import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { theme } from '@/theme';
import { Footer } from '@/components/Footer/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Grid
        templateAreas={`
                        "main main"
                        "footer footer"
        `}
      >
        <GridItem area="main" overflow="auto" role="contentinfo" mt="0" mb={76}>
          <Component {...pageProps} />
        </GridItem>

        <GridItem area="footer" position="relative">
          <Footer />
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
}
