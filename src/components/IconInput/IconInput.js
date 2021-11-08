/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  large: {
    fontSize: '1.2rem',
    height: '36px',
    iconSize: '16',
    borderThickness: '2px',
  },
  small: {
    fontSize: '.875rem',
    height: '24px',
    iconSize: '12',
    borderThickness: '1px',
  },
};

const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
  const style = STYLES[size ?? 'large'];

  return (
    <Label>
      <IconWrapper style={{ height: style.iconSize + 'px' }}>
        <Icon id={icon} size={style.iconSize} />
      </IconWrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <TextInput
        style={{
          '--font-size': style.fontSize,
          '--height': style.height,
          '--width': width + 'px',
          '--border-thickness': style.borderThickness,
        }}
        {...delegated}
      />
    </Label>
  );
};

const Label = styled.label`
  display: flex;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  height: var(--height);
  top: 0;
  bottom: 0;
  margin: auto 0;
`;

const TextInput = styled.input`
  width: var(--width);
  font-size: var(--font-size);
  padding-left: var(--height);
  font-weight: 700;
  border: none;
  border-bottom: var(--border-thickness) solid ${COLORS.black};
  outline-offset: 2px;
  color: inherit;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 300;
  }
`;

export default IconInput;
