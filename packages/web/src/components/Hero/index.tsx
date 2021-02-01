import React from 'react';
import { StyledHero, HeroProps } from './styles';

const Hero = (props: React.PropsWithChildren<HeroProps>) => (
  <StyledHero {...props}>{props.children}</StyledHero>
);

export default Hero;
