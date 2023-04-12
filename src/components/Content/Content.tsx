import { CONTENT } from '@/content/home';
import {
  CallToAction,
  ContentDescription,
  ContentSubTitle,
  ContentTitle,
  CTAActionName,
} from '@/types';
import { SocialMediaUtils } from '@/utils';
import { Button, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react';

export interface IContentProps {
  CTAS: CallToAction[];
  scrollIntoView: (id: string) => void;
  description: ContentDescription;
  subTitle?: ContentSubTitle;
  title?: ContentTitle;
  nextIndex: number;
  isLast: boolean;
}

export const Content = ({
  CTAS,
  description,
  subTitle,
  title,
  scrollIntoView,
  nextIndex,
  isLast,
}: IContentProps) => {
  const handleScroll = () => {
    const nextId = CONTENT[nextIndex]?.id;

    if (isLast) {
      scrollIntoView(CONTENT[0].id);
      return;
    }

    if (nextId) {
      scrollIntoView(nextId);
    }
  };

  const handleEmail = () => {
    window.open(SocialMediaUtils.getEmailLink());
  };

  const handleWhatsApp = () => {
    window.open(SocialMediaUtils.getWhatsappLink());
  };

  const ActionMap = {
    [CTAActionName.EMAIL]: handleEmail,
    [CTAActionName.SCROLL]: handleScroll,
    [CTAActionName.WHATSAPP]: handleWhatsApp,
  };

  return (
    <Flex
      direction="column"
      w="full"
      h="full"
      px={[8, 8, 16, 32]}
      alignItems="center"
      justifyContent="center"
      zIndex={1}
    >
      {subTitle ? (
        <Text
          textAlign="center"
          fontSize={['xs', 'xs', 'small']}
          wordBreak="keep-all"
          color={subTitle.color}
          mt={[8, 8, 12, 0]}
          mb={[8, 8, 12, 16]}
          textTransform="uppercase"
          letterSpacing="0.4rem"
          fontWeight={300}
        >
          {subTitle.text}
        </Text>
      ) : null}

      {title ? (
        <Heading
          textAlign="center"
          as={nextIndex > 1 ? 'h2' : 'h1'}
          color={title.color}
          fontSize={['1.5em', '1.5em', '2.4em', '3.5em']}
          mt={subTitle ? 0 : 8}
        >
          {title.text}
        </Heading>
      ) : null}

      <Text
        my={[8, 8, 16]}
        textAlign="center"
        fontSize={['small', 'small', 'medium']}
        color={description.color}
        fontWeight={200}
        lineHeight={2}
        noOfLines={[3, 6, 8]}
      >
        {description.text}
      </Text>

      <Stack direction="column" spacing={4} mb={8}>
        {CTAS.map(({ id: buttonId, title, bgColor, color, icon, action }) => (
          <Button
            key={buttonId}
            bgColor={bgColor}
            aria-label={title}
            rightIcon={icon}
            variant="solid"
            justifyContent="space-between"
            onClick={ActionMap[action]}
          >
            <Text
              textAlign="left"
              fontSize={['x-small', 'x-small', 'small']}
              textTransform="uppercase"
              fontWeight={300}
              letterSpacing="0.2rem"
              color={color}
            >
              {title}
            </Text>
          </Button>
        ))}
      </Stack>
    </Flex>
  );
};
