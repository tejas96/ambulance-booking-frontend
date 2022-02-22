import {StyleSheet} from 'react-native';
import theme from '../../../config/theme';

const {FONT, SIZE} = theme;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: SIZE.sm,
  },
  inputs: {
    width: '95%',
    marginVertical: 10,
  },
  title: {
    ...FONT.h1,
  },
  subTitle: {
    ...FONT.body1,
    marginVertical: 10,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
  },
  form: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  submitBtn: {
    marginVertical: 10,
  },
});

export default styles;
