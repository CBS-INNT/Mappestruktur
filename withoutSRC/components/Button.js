import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Colors, { Spacing, Typography, Radius } from '../styles/GlobalStyles';

export default function Button({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btn} activeOpacity={0.8}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.primary,
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.md,
    borderRadius: Radius.lg,
    alignSelf: 'flex-start'
  },
  label: {
    ...Typography.button,
    color: Colors.onPrimary
  }
});
