import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors, { Spacing, Typography } from '../styles/GlobalStyles';

export default function Header({ title }) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.border,
    backgroundColor: Colors.surface
  },
  title: {
    ...Typography.h2,
    color: Colors.textPrimary
  }
});
