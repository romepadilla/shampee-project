import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    color: colors.blue,
    marginVertical: 8,
    fontSize: 14,
    fontWeight: '500',
  },
  inputContainer: {
    borderColor: colors.grey,
    borderWidth: 1,
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    flex: 1,
  },
  eye: {
    width: 24,
    height: 24,
    marginHorizontal: 16,
  },
});
