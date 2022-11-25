import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import { Pressable, PressableProps, StyleSheet, ViewStyle } from 'react-native';

import CheckIcon from './icons/CheckIcon';
import GradientBackground from './GradientBackground';
import React from 'react';

const COLORS = { start: '#FF3183', end: '#657BEA' };
const BUTTON_SIZE = 16;
const OFFSET_Y = 10;
const DELAY = 300;

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

interface Props extends PressableProps {
  additionalStyles: ViewStyle;
}

const GradientButton: React.FC<Props> = ({ additionalStyles, ...props }) => {
  const progress = useSharedValue(0);

  const animatedTextStyles = useAnimatedStyle(() => ({
    opacity: withTiming(interpolate(progress.value, [0, 1], [1, 0])),
  }));
  const animatedIconStyles = useAnimatedStyle(() => ({
    opacity: withTiming(interpolate(progress.value, [0, 1], [0, 1])),
  }));
  const animatedButton = useAnimatedStyle(() => ({
    opacity: withDelay(DELAY, withTiming(1 - progress.value)),
    transform: [
      { translateY: withDelay(DELAY, withTiming(progress.value * OFFSET_Y)) },
    ],
  }));

  return (
    <AnimatedPressable
      {...props}
      style={[styles.button, animatedButton, additionalStyles]}
      onPress={() => {
        progress.value = 1;
      }}>
      <GradientBackground colors={COLORS} />
      <Animated.Text style={[styles.text, animatedTextStyles]}>
        Join
      </Animated.Text>
      <Animated.View style={[styles.icon, animatedIconStyles]}>
        <CheckIcon width={BUTTON_SIZE} height={BUTTON_SIZE} />
      </Animated.View>
    </AnimatedPressable>
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
  icon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [
      { translateX: -BUTTON_SIZE / 2 },
      { translateY: -BUTTON_SIZE / 2 },
    ],
  },
});

export default GradientButton;
