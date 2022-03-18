import {DefaultTheme} from 'react-native-paper';

export {default as theme} from './theme';

export const PaperTheme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#05386B',
    primaryVariant: '#379683',
    accent: '#5CDB95',
    secondaryVariant: '#8EE4AF',
  },
};
