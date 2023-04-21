import { theme } from '@/theme';
import { CTAActionName } from '@/types';
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { HiArrowDown, HiArrowUp } from 'react-icons/hi';

import mainImage from '../../public/images/capa-01.jpg';
import menteSubconsciente from '../../public/images/mente-subconsciente.jpg';
import accessBarsBackground from '../../public/images/access-bars-background.jpg';
import familyConstellationsBackground from '../../public/images/family-constellations-background.jpg';
import bmtBackground from '../../public/images/body-mind-talk-background.jpg';
import cinesiologiaBackground from '../../public/images/cinesiologia-background.png';
import cistoOvario from '../../public/images/cisto-ovario.jpg';
import depression from '../../public/images/depression.jpg';
import socialPhobia from '../../public/images/social-phobia.jpg';
import alzheimer from '../../public/images/alzheimer.jpg';

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
      text: 'Trabalho terapêutico - atendo a  demanda do cliente que me procura com queixas das mais diversas, como: doenças físicas, emocionais, psiquiátricas, traumas, problemas de relacionamento interpessoal, problemas amorosos, problemas financeiros, etc.',
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
    id: 'wrap-up',
    useAnimation: false,
    videos: [
      {
        id: 'testimonial-01',
        videoUrl:
          'https://www.youtube.com/watch?v=R7OO00OmjWk&list=PL8ncryKn3V9-N7Y_sDmXeQutgOQDGVXIx&index=2',
        title: 'Ansiedade e depressão',
        thumbnailImage: depression,
      },
      {
        id: 'testimonial-02',
        videoUrl: 'https://www.youtube.com/watch?v=5n0J8-JWiGc',
        title: 'Cisto no Ovário',
        thumbnailImage: cistoOvario,
      },
      {
        id: 'testimonial-03',
        videoUrl:
          'https://www.youtube.com/watch?v=t0TVCB9p9k0&list=PL8ncryKn3V9-N7Y_sDmXeQutgOQDGVXIx&index=3',
        title: 'Fobia Social',
        thumbnailImage: socialPhobia,
      },
      {
        id: 'testimonial-04',
        videoUrl:
          'https://www.youtube.com/watch?v=6c0-SfDtts8&list=PL8ncryKn3V9-N7Y_sDmXeQutgOQDGVXIx&index=7',
        title: 'Alzheimer',
        thumbnailImage: alzheimer,
      },
    ],
    description: {
      text: 'Estou a serviço do cliente, no processo de autoconhecimento e autocura.',
      color: 'rgba(0,0,0,0.49)',
    },
    CTAS: [
      {
        id: 'home-content-wrapper-00check-more-button-7',
        title: 'Continue lendo',
        icon: <HiArrowDown color={gray700} />,
        bgColor: 'gray.100',
        color: 'gray.700',
        action: CTAActionName.SCROLL,
      },
    ],
  },
  {
    id: 'access-bars',
    subTitle: {
      text: 'Métodos utilizados',
      color: 'black',
    },
    useAnimation: false,
    title: {
      text: 'Barras de Access',
      color: 'black',
    },
    image: {
      src: accessBarsBackground,
      alt: 'access-bars',
    },
    description: {
      text: 'É uma terapia energética que consiste em toques sutis em 32 pontos específicos da cabeça, “deletando” crenças. limitantes, promovendo relaxamento profundo e equilíbrio fisico-emocional. Processos Corporais - do Access Consciousness',
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
    id: 'psych-k',
    useAnimation: true,
    backgroundColor: blue700,
    title: {
      text: 'PSYCH-K ®',
      color: 'white',
    },
    image: {
      src: menteSubconsciente,
      alt: 'psych-k',
    },
    description: {
      text: 'Ajuda a identificar e transformar padrões de pensamentos negativos, traumas, crenças autolimitantes, promovendo a realização pessoal e o desenvolvimento humano.',
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
    id: 'family-constellations',
    useAnimation: true,
    backgroundColor: yellow800,
    title: {
      text: 'Constelações familiares',
      color: 'white',
    },
    image: {
      src: familyConstellationsBackground,
      alt: 'family-constellations',
    },
    description: {
      text: 'É uma abordagem terapêutica que ajuda as pessoas a se reconectarem com suas raízes familiares, promovendo a compreensão e a cura das repetições de padrões comportamentais transgeracionais e de traumas do passado.',
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
      src: bmtBackground,
      alt: 'body-mind-talk',
    },
    description: {
      text: 'Trabalha com as “chaves” do corpo e da mente ativamos os potenciais inconscientes de cura, transformação e revitalização do corpo e da mente',
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
    id: 'cinesiologia',
    useAnimation: true,
    backgroundColor: orange100,
    title: {
      text: 'Cinesiologia Psicológica',
      color: 'black',
    },
    image: {
      src: cinesiologiaBackground,
      alt: 'cinesiologia',
    },
    description: {
      text: 'Criada por Petho Sandor, é uma abordagem corporal que trabalha a integração corpo-mente, através de toques sutis.',
      color: 'rgba(0,0,0,0.49)',
    },
    CTAS: [
      {
        id: 'check-more-button-calatonia',
        title: 'Voltar para o topo',
        icon: <HiArrowUp color={orange100} />,
        bgColor: 'orange.700',
        color: 'orange.100',
        action: CTAActionName.SCROLL,
      },
    ],
  },
];
