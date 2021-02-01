import styled from 'styled-components';

export type HeroProps = {
  withBg?: boolean;
};

export const StyledHero = styled.div<HeroProps>`
  height: 100%;
  width: 100%;
  position: relative;
  color: ${(props) => props.theme.colors.WHITE};
  ${(props) =>
    props.withBg && `background-color: ${props.theme.colors.GRAY_200};`}
`;
