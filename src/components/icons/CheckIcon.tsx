import * as React from 'react';

import Svg, { Path } from 'react-native-svg';

const CheckIcon = ({
  width = 16,
  height = 16,
  fill = '#fff',
}: React.SVGProps<SVGSVGElement>) => (
  <Svg width={width} height={height} fill="none">
    <Path
      d="m2.667 8 4 4 6.666-8"
      stroke={fill}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const MemoCheckIcon = React.memo(CheckIcon);

export default MemoCheckIcon;
