export enum LicenseType {
  GNU_AGPLv3 = 'GNU AGPLv3',
  GNU_GPLv3 = 'GNU GPLv3',
  GNU_LGPLv3 = 'GNU LGPLv3',
  MOZILLA_PUBLIC_2 = 'Mozilla Public License 2.0',
  APACHE_2 = 'Apache License 2.0',
  MIT = 'MIT License',
  BOOST_SOFTWARE_1 = 'Boost Software License 1.0',
  UNLICENSE = 'The Unlicense',
  OTHER = 'Other',
}

export type Mix = {
  author: Profile;
  version: string;
  url?: string;
  license: LicenseType;
  id: string;
};

export type Profile = {
  name: string;
  email: string;
  id: string;
  contactPreferences: ContactPreferences;
};

export type ContactPreferences = {
  whenPurchaseMade: boolean;
};

export interface Connector {
  send(channel: string, data: any): void;
  on(channel: string, listener: (data: any) => void): void;
}

export type Theme = {
  BLUE_100: string;
  BLUE_200: string;
  BLUE_300: string;
  BLUE_400: string;
  RED_100: string;
  RED_200: string;
  RED_300: string;
  GREEN_100: string;
  GREEN_200: string;
  GREEN_300: string;
  GREEN_400: string;
  GREY_100: string;
  GREY_200: string;
  GREY_300: string;
  GREY_400: string;
  YELLOW: string;
};

export const colors: Theme;
