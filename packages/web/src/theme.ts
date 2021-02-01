import { createGlobalStyle } from 'styled-components';

type Colors = {
  BLACK: string;
  WHITE: string;
  GRAY_100: string;
  GRAY_200: string;
  GRAY_500: string;
  BLUE_100: string;
  BLUE_300: string;
  GREEN_200: string;
  RED_100: string;
  RED_200: string;
  RED_300: string;
  RED_400: string;

  YELLOW: string;
  ORANGE: string;
  HIGHLIGHT: string;
  [name: string]: string;
};

type Breakpoints = {
  MOBILE: string;
  TABLET: string;
  DESKTOP: string;
  DESKTOP_LARGE: string;
  [name: string]: string;
};

type Theme = {
  colors: Colors;
  breakpoints: Breakpoints;
};

const colors: Colors = {
  BLACK: '#222222',
  WHITE: '#E8F1F2',
  GRAY_100: '#232E21',
  GRAY_200: '#33312E',
  GRAY_500: '#E1DEE9',

  BLUE_100: '#3584A7',
  BLUE_300: '#87F6FF',

  GREEN_200: '#52B788',

  RED_100: '#BA324F',
  RED_200: '#D80032',
  RED_300: '#EF233C',
  RED_400: '#FF5964',

  YELLOW: '#FFE066',
  ORANGE: '#EE6C4D',
  PURPLE: '#473b7b',
  TEAL: '#3584A7',

  HIGHLIGHT: '#3584A7',
};

const breakpoints: Breakpoints = {
  MOBILE: '320px',
  TABLET: '768px',
  DESKTOP: '1224px',
  DESKTOP_LARGE: '1824px',
};

const theme: Theme = {
  colors,
  breakpoints,
};

const globalThemeMatches = [
  ['blue', 'BLUE_300'],
  ['purple', 'PURPLE'],
  ['tea', 'TEAL'],
  ['red', 'RED_300'],
  ['orange', 'ORANGE'],
  ['yellow', 'YELLOW'],
  ['green', 'GREEN_200'],
  ['white', 'WHITE'],
  ['gray', 'GRAY_500'],
  ['gray-dark', 'GRAY_200'],
  ['primary', 'BLUE_300'],
  ['secondary', 'GRAY_200'],
  ['success', 'GREEN_200'],
  ['info', 'BLUE_300'],
  ['warning', 'YELLOW'],
  ['danger', 'RED_200'],
  ['light', 'WHITE'],
  ['dark', 'GRAY_200'],
];

const globalThemeElement =
  document.getElementById('injected-theme') || document.createElement('style');
globalThemeElement.id = 'injected-theme';
globalThemeElement.innerText = `
    :root {
      ${globalThemeMatches.reduce(
        (cssString, [globalName, themeName]) =>
          `${cssString} --${globalName}: ${colors[themeName]};`,
        ''
      )}
  
      --font-family-sans-serif: 'Open Sans', sans-serif;
      --font-family-monospace: Consolas, monospace;
    }
  `;
// this allows for hot reloading capability of the root selector
if (!document.getElementById('injected-theme')) {
  document.body.appendChild(globalThemeElement);
}

export default theme;
