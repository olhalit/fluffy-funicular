import { Pressable, StyleSheet, Text } from 'react-native';

import GradientBackground from './GradientBackground';
import React from 'react';

const COLORS = { start: '#FF3183', end: '#657BEA' };

const GradientButton: React.FC = () => {
  return (
    <Pressable style={styles.button}>
      <GradientBackground colors={COLORS} />
      <Text style={styles.text}>Join</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 62,
    height: 25,
    borderRadius: 16,
    overflow: 'hidden',

    elevation: 20,
    shadowColor: '#000',
    shadowOffset: { width: -2, height: -8 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
  },
  text: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: -0.32,
  },
});

export default GradientButton;
