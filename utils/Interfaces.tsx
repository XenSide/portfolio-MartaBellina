export interface HomeTranslation {
  Hero: HeroType;
  Gallery: Gallery;
  AboutComponent: AboutType;
}

export interface FooterType {
  text: string;
  buttoncontent: string;
}

export interface NavbarType {
  home: String;
  portfolio: String;
  about: String;
  contact: String;
}

export interface AboutType {
  Title: string;
  Content: string;
}

export interface Gallery {
  Category: string;
  Title: string;
  Subtitle: string;
  Link: string;
}

export interface HeroType {
  smalltitle: string;
  title: string;
  subtitle: string;
}

export interface About {
  Hero: HeroType;
  About: AboutType;
  Services: ServicesType[];
}

export interface AboutType {
  Title: string;
  Content: string;
}

export interface ServicesType {
  title: string;
  description: string;
  image: string;
}

export interface Contact {
  Hero: HeroType;
  Contact: ContactType;
  QuadGallery: QuadGalleryType;
}

export interface ContactType {
  title: string;
  subtitle: string;
  flair1: string;
  flair2: string;
  flair3: string;
  flair4: string;
}

export interface QuadGalleryType {
  title: string;
  subtitle: string;
  link: string;
}

export interface PortfolioEntry {
  shortName: string;
  title: string;
  Description: string;
  image: string;
  link: string;
  tag: string;
}
