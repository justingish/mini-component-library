import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';
import VisuallyHidden from '../VisuallyHidden';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <SelectContainer>
      <VisuallyHidden>
        <SelectLabel>{label}</SelectLabel>
      </VisuallyHidden>
      <SelectInput value={value} onChange={onChange}>
        {children}
      </SelectInput>
      <IconWrapper>
        <Icon id="chevron-down" size="24" />
      </IconWrapper>
    </SelectContainer>
  );
};

const SelectContainer = styled.div`
  display: inline-flex;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const SelectInput = styled.select`
  -webkit-appearance: none;
  width: max-content;
  color: inherit;
  height: 43px;
  padding: 12px 48px 12px 16px;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  border: none;
`;

const IconWrapper = styled.div`
  position: absolute;
  height: 24px;
  top: 0;
  bottom: 0;
  margin: auto 0;
  right: 16px;
`;

const SelectLabel = styled.label``;

export default Select;
