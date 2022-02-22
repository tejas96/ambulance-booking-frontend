import {TextStyle} from 'react-native';

const COLOR = {
  primary: '#FF7034', //'#F86778', //'#2B4E74',
  primaryDark: '#c53f00', //'#b34e24',
  secondary: '#5BB26E', //'#FAB190',
  background: '#ffffff', //'#fbfbfc',
  success: '#1E6F5C',
  info: '#2A528A',
  warn: '#F5B971',
  danger: '#E2363F',
  text1: '#111f2e',
  text2: '#414c58',
  text3: '#8095ac',
  text4: '#f4f6f8',
  border: '#eaedf1',
  white: '#FFFFFF',
  black: '#000000',
};

const SIZE = {
  xs: 4,
  sm: 8,
  m: 16,
  l: 24,
  xl: 32,
  radius: 12,
  marginXS: 4,
  marginSM: 8,
  marginM: 12,
  marginL: 24,
};

/**
 * 1. OpenSans-Light
 * 2. OpenSans-Regular
 * 3. OpenSans-Medium
 * 4. OpenSans-SemiBold
 */
const FONT: {
  [id: string]: TextStyle;
} = {
  h1: {
    fontSize: 34,
    fontFamily: 'OpenSans-SemiBold',
    color: COLOR.text1,
  },
  h2: {
    fontSize: 24,
    fontFamily: 'OpenSans-SemiBold',
    color: COLOR.text1,
  },
  h3: {
    fontSize: 20,
    fontFamily: 'OpenSans-SemiBold',
    color: COLOR.text1,
  },
  h4: {
    fontSize: 16,
    fontFamily: 'OpenSans-SemiBold',
    color: COLOR.text1,
  },
  h5: {
    fontSize: 14,
    fontFamily: 'OpenSans-SemiBold',
    color: COLOR.text1,
  },
  body1: {
    fontSize: 16,
    fontFamily: 'OpenSans-Regular',
    color: COLOR.text1,
  },
  body2: {
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
    color: COLOR.text1,
  },
  caption: {
    fontSize: 12,
    fontFamily: 'OpenSans-Medium',
    color: COLOR.text1,
  },
  overline: {
    fontSize: 10,
    textTransform: 'uppercase',
    fontFamily: 'OpenSans-Light',
    color: COLOR.text1,
  },
  button: {
    fontSize: 18,
    fontFamily: 'OpenSans-Medium',
  },
};

const SHADOW = {
  card: {
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  dp_2: {
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  dp_4: {
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
};

export default {
  COLOR,
  SIZE,
  FONT,
  SHADOW,
};
