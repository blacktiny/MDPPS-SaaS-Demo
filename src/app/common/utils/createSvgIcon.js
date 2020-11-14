import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  display: block;
  width: 1.25em;
  height: 1.25em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
`;

export default function createSvgIcon(path, title, svgProps) {
  return React.memo(
    React.forwardRef((props, ref) => (
      <Svg ref={ref} {...svgProps} {...props}>
        <title>{title}</title>
        {path}
      </Svg>
    ))
  );
}
