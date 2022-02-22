import {StyleSheet} from 'react-native';
import theme from '../../../config/theme';

const {FONT, SIZE} = theme;
const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: SIZE.sm,
  },
  title: {
    ...FONT.h1,
  },
  description: {
    ...FONT.body1,
    marginVertical: 10,
  },
  body: {
    marginTop: 10,
    padding: 20,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  chip: {
    // height: 40,
    // minWidth: 100,
    width: 'auto',
    textAlign: 'center',
  },
});

export default styles;
