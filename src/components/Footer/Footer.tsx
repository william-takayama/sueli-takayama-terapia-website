import { FOOTER_HEIGHT_LARGE, FOOTER_HEIGHT_SMALL } from '@/constants/size';
import { SocialMedia } from '@/constants/social';
import { getWhatsappLink } from '@/utils/socialMedia';
import {
  ButtonGroup,
  Flex,
  Heading,
  IconButton,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export const Footer = () => (
  <Flex
    as="footer"
    role="footer"
    position="fixed"
    px={8}
    py={4}
    bottom={0}
    w="full"
    bgColor="gray.200"
    h={[FOOTER_HEIGHT_SMALL, FOOTER_HEIGHT_LARGE]}
  >
    <Stack spacing={2} w="full">
      <Stack justify="space-between" direction="row" align="center">
        <Heading as="h2" fontSize={['small', 'sm']} letterSpacing="wide">
          Sueli Takayama Terapia
        </Heading>

        <ButtonGroup variant="ghost">
          <IconButton
            as="a"
            href={getWhatsappLink()}
            aria-label="Whatsapp"
            icon={<FaWhatsapp />}
          />
          <IconButton
            as="a"
            href={SocialMedia.INSTAGRAM}
            target="_blank"
            aria-label="Instagram"
            icon={<FaInstagram />}
          />
          <IconButton
            as="a"
            href={SocialMedia.FACEBOOK}
            target="_blank"
            aria-label="Facebook"
            icon={<FaFacebook />}
          />
        </ButtonGroup>
      </Stack>

      <Text color="gray.400" fontSize={['xx-small', 'xs']}>
        &copy; {new Date().getFullYear()} Sueli Takayama, Inc. All rights
        reserved.
      </Text>
    </Stack>
  </Flex>
);
