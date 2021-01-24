import { createContext } from 'react';
import { Profile } from 'sohda-api';

export const ProfileContext = createContext<Profile | null>(null);
