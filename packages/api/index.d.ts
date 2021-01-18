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
  authorId: string;
  version: string;
  url?: string;
  license: LicenseType;
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
