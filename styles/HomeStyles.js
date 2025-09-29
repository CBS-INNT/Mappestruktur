import { StyleSheet } from 'react-native';
import Colors, { Spacing, Typography } from './GlobalStyles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background
  },
  content: {
    flex: 1,
    padding: Spacing.lg,
    gap: Spacing.lg
  },
  text: {
    ...Typography.body,
    color: Colors.textPrimary
  }
});
