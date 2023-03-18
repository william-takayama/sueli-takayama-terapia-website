import { SocialMedia } from '@/constants/social';

export const SUBJECT = 'Gostaria de receber mais informações';
export const BODY = 'Olá, você poderia me passar mais informações';

export const getWhatsappLink = () =>
  `https://api.whatsapp.com/send?text=${encodeURIComponent(BODY)}&phone=${
    SocialMedia.PHONE_NUMBER
  }`;

export const getEmailLink = () =>
  `mailto:${SocialMedia.EMAIL}?subject=${encodeURIComponent(
    SUBJECT
  )}&body=${encodeURIComponent(BODY)}`;
