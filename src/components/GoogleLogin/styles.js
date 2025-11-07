import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkGrey,
    borderRadius: 18,
    width: '40%',
    alignSelf: 'center',
    padding: 24,
    marginBottom: 40,
  },
  image: {
    alignSelf: 'center',
    width: 30,
    height: 30,
  },
});
