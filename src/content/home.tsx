import { theme } from '@/theme';
import { CTAActionName } from '@/types';
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { HiArrowDown, HiArrowUp } from 'react-icons/hi';

import mainImage from '../../public/images/capa-01.jpg';
import mente_subconsciente from '../../public/images/mente-subconsciente.jpg';
import access_bars_background from '../../public/images/access-bars-background.jpg';
import family_constellations_background from '../../public/images/family-constellations-background.jpg';
import body_mind_talk_background from '../../public/images/body-mind-talk-background.jpg';
import calatonia_background from '../../public/images/calatonia-background.png';
import selfHealing from '../../public/images/bg-07.jpg';

const gray700 = theme.colors.gray[700];
const blue700 = theme.colors.blue[700];
const yellow800 = theme.colors.yellow[800];
const orange100 = theme.colors.orange[100];

export const CONTENT = [
  {
    id: 'presentation',
    useAnimation: false,
    subTitle: {
      text: 'Terapeuta',
      color: '#9DACB5',
    },
    title: {
      text: 'Sueli Takayama',
      color: 'black',
    },
    image: {
      src: mainImage,
      alt: 'main-picture',
    },
    description: {
      text: 'Trabalho terapêutico - atendo a demanda do cliente que me procura com queixas das mais diversas, como: doenças físicas, emocionais, psiquiátricas, traumas, problemas de relacionamento interpessoal, problemas amorosos, problemas financeiros, etc.',
      color: 'rgba(0,0,0,0.49)',
    },
    CTAS: [
      {
        id: 'whatsapp-button',
        title: 'Whatsapp',
        icon: <FaWhatsapp color="white" />,
        bgColor: 'teal.400',
        color: 'gray.50',
        action: CTAActionName.WHATSAPP,
      },
      {
        id: 'check-more-button-presentation',
        title: 'Continue lendo',
        icon: <HiArrowDown color={gray700} />,
        bgColor: 'gray.100',
        color: 'gray.700',
        action: CTAActionName.SCROLL,
      },
    ],
  },
  {
    id: 'psych-k',
    useAnimation: true,
    backgroundColor: blue700,
    subTitle: {
      text: 'Métodos utilizados',
      color: 'white',
    },
    title: {
      text: 'PSYCH-K ®',
      color: 'white',
    },
    image: {
      src: mente_subconsciente,
      alt: 'psych-k',
    },
    description: {
      text: 'O PSYCH-K® é uma ferramenta técnica segura que respeita o processo evolutivo de autoconhecimento, que permite mudar crenças limitantes de forma rápida e eficiente, dando ao indivíduo o empoderamento de seu processo para criar novas formas de sua realidade.',
      color: 'white',
    },
    CTAS: [
      {
        id: 'check-more-button-psych-k',
        title: 'Continue lendo',
        icon: <HiArrowDown color={blue700} />,
        bgColor: 'gray.100',
        color: 'blue.700',
        action: CTAActionName.SCROLL,
      },
    ],
  },
  {
    id: 'access-bars',
    useAnimation: false,
    title: {
      text: 'Barras de Access',
      color: 'black',
    },
    image: {
      src: access_bars_background,
      alt: 'access-bars',
    },
    description: {
      text: 'Criada por Gary Douglas, é uma terapia energética que consiste em toques sutis em 32 pontos específicos da cabeça, “deletando” crenças. limitantes, promovendo relaxamento profundo e equilíbrio fisico-emocional. Processos Corporais - do Access Consciousness',
      color: 'rgba(0,0,0,0.49)',
    },
    CTAS: [
      {
        id: 'check-more-button-access-bars',
        title: 'Continue lendo',
        icon: <HiArrowDown color={gray700} />,
        bgColor: 'gray.100',
        color: 'gray.700',
        action: CTAActionName.SCROLL,
      },
    ],
  },
  {
    id: 'family-constellations',
    useAnimation: true,
    backgroundColor: yellow800,
    title: {
      text: 'Constelações familiares',
      color: 'white',
    },
    image: {
      src: family_constellations_background,
      alt: 'family-constellations',
    },
    description: {
      text: 'Constelações Familiares, criada por Bert Helinger, é uma abordagem terapêutica que ajuda as pessoas a se reconectarem com suas raízes familiares, promovendo a compreensão e a cura das repetições de padrões comportamentais transgeracionais e de traumas do passado.',
      color: 'white',
    },
    CTAS: [
      {
        id: 'check-more-button-family-constellations',
        title: 'Continue lendo',
        icon: <HiArrowDown color={yellow800} />,
        bgColor: 'gray.100',
        color: 'yellow.800',
        action: CTAActionName.SCROLL,
      },
    ],
  },
  {
    id: 'body-mind-talk',
    useAnimation: false,
    title: {
      text: 'Body Mind Talk (BMT)',
      color: 'black',
    },
    image: {
      src: body_mind_talk_background,
      alt: 'body-mind-talk',
    },
    description: {
      text: 'Criado por Nehemias Tavares, trabalha com as “chaves” do corpo e da mente ativamos os potenciais inconscientes de cura, transformação e revitalização do corpo e da mente',
      color: 'rgba(0,0,0,0.49)',
    },
    CTAS: [
      {
        id: 'check-more-button-body-mind-talk',
        title: 'Continue lendo',
        icon: <HiArrowDown color={gray700} />,
        bgColor: 'gray.100',
        color: 'gray.700',
        action: CTAActionName.SCROLL,
      },
    ],
  },
  {
    id: 'calatonia',
    useAnimation: true,
    backgroundColor: orange100,
    title: {
      text: 'Calatonia',
      color: 'black',
    },
    image: {
      src: calatonia_background,
      alt: 'calatonia',
    },
    description: {
      text: 'Cinesiologia Psicológica, criada por Petho Sandor, é uma abordagem corporal que trabalha a integração corpo-mente, através de toques sutis. Costumo dizer: “seu corpo sabe tudo de vc e ele não mente jamais” e, nessa “conversa” com o corpo, , facilito a integração fisio-psíquica.',
      color: 'rgba(0,0,0,0.49)',
    },
    CTAS: [
      {
        id: 'check-more-button-calatonia',
        title: 'Continue lendo',
        icon: <HiArrowDown color={orange100} />,
        bgColor: 'orange.700',
        color: 'orange.100',
        action: CTAActionName.SCROLL,
      },
    ],
  },
  {
    id: 'wrap-up',
    useAnimation: false,
    image: {
      src: selfHealing,
      alt: 'wrap-up',
    },
    description: {
      text: 'Estou a serviço do cliente, no processo de autoconhecimento e autocura.',
      color: 'rgba(0,0,0,0.49)',
    },
    CTAS: [
      {
        id: 'home-content-wrapper-00check-more-button-7',
        title: 'Voltar para o topo',
        icon: <HiArrowUp color={gray700} />,
        bgColor: 'gray.100',
        color: 'gray.700',
        action: CTAActionName.SCROLL,
      },
    ],
  },
];
