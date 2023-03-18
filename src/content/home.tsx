import { theme } from '@/theme';
import { CTAActionName } from '@/types';
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { HiArrowDown, HiArrowUp } from 'react-icons/hi';

import mainImage from '../../public/images/capa-01.jpg';
import bg2 from '../../public/images/bg-02.jpg';
import bg3 from '../../public/images/bg-03.jpg';
import bg4 from '../../public/images/bg-04.jpg';
import bg5 from '../../public/images/bg-05.jpg';

const teal = theme.colors.teal[400];
const gray700 = theme.colors.gray[700];

export const CONTENT = [
  {
    id: 'home-content-wrapper-001',
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
      text: 'Trabalho terapêutico atendendo a demanda do cliente que me procura com queixas, sendo as mais diversas, como: doenças físicas, emocionais, psiquiátricas, problemas de relacionamento interpessoal, problemas amorosos, problemas financeiros, etc.',
      color: 'rgba(0,0,0,0.49)',
    },
    CTAS: [
      {
        id: 'home-content-wrapper-00whatsapp-button-1',
        title: 'Whatsapp',
        icon: <FaWhatsapp color="white" />,
        bgColor: 'teal.400',
        color: 'gray.50',
        action: CTAActionName.WHATSAPP,
      },
      {
        id: 'home-content-wrapper-00check-more-button-1',
        title: 'Continue lendo',
        icon: <HiArrowDown color={gray700} />,
        bgColor: 'gray.100',
        color: 'gray.700',
        action: CTAActionName.SCROLL,
      },
    ],
  },
  {
    id: 'home-content-wrapper-002',
    subTitle: {
      text: 'Métodos utilizados',
      color: 'white',
    },
    title: {
      text: 'PSYCH-K',
      color: 'white',
    },
    image: {
      src: bg2,
      alt: 'bg-2',
    },
    description: {
      text: 'O PSYCH-K é uma abordagem que ajuda a superar padrões de pensamento negativos e crenças limitantes, promovendo a realização pessoal e o desenvolvimento humano.',
      color: 'white',
    },
    CTAS: [
      {
        id: 'home-content-wrapper-00check-more-button-2',
        title: 'Continue lendo',
        icon: <HiArrowDown color={teal} />,
        bgColor: 'gray.100',
        color: 'teal.400',
        action: CTAActionName.SCROLL,
      },
    ],
  },
  {
    id: 'home-content-wrapper-003',
    subTitle: {
      text: 'Métodos utilizados',
      color: '#9DACB5',
    },
    title: {
      text: 'Barras de Access',
      color: 'black',
    },
    image: {
      src: bg3,
      alt: 'bg-3',
    },
    description: {
      text: 'Barras de Access é uma terapia energética que consiste em toques suaves em pontos específicos da cabeça, promovendo relaxamento profundo e equilíbrio emocional.',
      color: 'rgba(0,0,0,0.49)',
    },
    CTAS: [
      {
        id: 'home-content-wrapper-00check-more-button-3',
        title: 'Continue lendo',
        icon: <HiArrowDown color={gray700} />,
        bgColor: 'gray.100',
        color: 'gray.700',
        action: CTAActionName.SCROLL,
      },
    ],
  },
  {
    id: 'home-content-wrapper-004',
    subTitle: {
      text: 'Métodos utilizados',
      color: 'white',
    },
    title: {
      text: 'Constelações familiares',
      color: 'white',
    },
    image: {
      src: bg4,
      alt: 'bg-4',
    },
    description: {
      text: 'Constelações Familiares é uma abordagem terapêutica que ajuda as pessoas a se reconectarem com suas raízes familiares, promovendo a cura e a compreensão dos traumas do passado.',
      color: 'white',
    },
    CTAS: [
      {
        id: 'home-content-wrapper-00check-more-button-4',
        title: 'Continue lendo',
        icon: <HiArrowDown color={teal} />,
        bgColor: 'gray.100',
        color: 'teal.400',
        action: CTAActionName.SCROLL,
      },
    ],
  },
  {
    id: 'home-content-wrapper-005',
    image: {
      src: bg5,
      alt: 'bg-5',
    },
    description: {
      text: 'Cada cliente tem sua demanda, sendo assim vou orquestrando a utilização dos recursos técnicos que disponho para ajudar o indivíduo a elaborar suas questões e sua auto cura.',
      color: 'rgba(0,0,0,0.49)',
    },
    CTAS: [
      {
        id: 'home-content-wrapper-00check-more-button-5',
        title: 'Voltar para o topo',
        icon: <HiArrowUp color={gray700} />,
        bgColor: 'gray.100',
        color: 'gray.700',
        action: CTAActionName.SCROLL,
      },
    ],
  },
];
