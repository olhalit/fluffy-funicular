import Svg, {
  Defs,
  LinearGradient,
  LinearGradientProps,
  Rect,
  Stop,
} from 'react-native-svg';

import React from 'react';
import { StyleSheet } from 'react-native';

interface Props extends LinearGradientProps {
  colors: { start: string; end: string };
}

const GradientBackground: React.FC<Props> = ({ colors, ...props }) => {
  return (
    <Svg height="100%" width="100%" style={StyleSheet.absoluteFillObject}>
      <Defs>
        <LinearGradient id="grad" x1="0" y1="0" x2="100%" y2="100%" {...props}>
          <Stop offset="0" stopColor={colors.start} />
          <Stop offset="7" stopColor={colors.end} />
        </LinearGradient>
      </Defs>
      <Rect width="100%" height="100%" fill="url(#grad)" />
    </Svg>
  );
};

export default GradientBackground;
