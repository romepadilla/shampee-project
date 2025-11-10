import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // centers children
    marginBottom: 54,
  },

  title: {
    color: colors.black,
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    position: 'absolute',
    left: 0,
    right: 0, // makes title span full width
  },
  iconLeft: {
    position: 'absolute',
    left: 0,
  },
  iconRight: {
    position: 'absolute',
    right: 0,
  },
});
