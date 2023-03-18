export enum CTAActionName {
  EMAIL = 'email',
  SCROLL = 'scroll',
  WHATSAPP = 'whatsapp',
}

export type CallToAction = {
  id: string;
  title: string;
  bgColor: string;
  color: string;
  icon: React.ReactElement;
  action: CTAActionName;
};

export type ContentDescription = {
  color: string;
  text: string;
};

export type ContentSubTitle = {
  color: string;
  text: string;
};

export type ContentTitle = {
  color: string;
  text: string;
};
