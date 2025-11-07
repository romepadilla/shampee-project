import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    padding: 24,
    flexDirection: 'center',
    alginItems: 'center',
    height: '100%',
    marginVertical: 80,
  },
  titleContainer: {
    marginVertical: 54,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  innerTitle: {
    color: colors.orange,
    textDecorationLine: 'underline',
  },
  footerText: {
    color: colors.blue,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 20,
  },
});
