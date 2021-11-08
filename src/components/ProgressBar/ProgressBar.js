import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  large: {
    height: '24px',
    padding: '4px',
    borderRadius: '8px',
  },
  medium: {
    height: '12px',
    padding: '0',
    borderRadius: '4px',
  },
  small: {
    height: '8px',
    padding: '0',
    borderRadius: '4px',
  },
};
const ProgressBar = ({ value, size }) => {
  const boundedValue = Math.min(Math.max(value, 0), 100);
  const style = STYLES[size ?? 'medium'];

  return (
    <Wrapper
      size={size ?? 'medium'}
      style={{
        '--padding': style.padding,
        '--border-radius': style.borderRadius,
      }}
      role="progressbar"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow={boundedValue}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <BarWrapper>
        <Bar
          value={boundedValue}
          style={{
            '--height': style.height,
            '--width': `${boundedValue}%`,
          }}
        />
      </BarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  position: relative;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--border-radius);
  height: var(--height);
  padding: var(--padding);
`;

// Rounds edges at high values
const BarWrapper = styled.div`
  overflow: hidden;
  border-radius: 4px;
`;

const Bar = styled.div`
  background-color: ${COLORS.primary};
  height: var(--height);
  width: var(--width);
`;

export default ProgressBar;
