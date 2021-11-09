import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    fontSize: 14,
    height: 24,
    iconHeight: 16,
    borderThickness: 1,
  },
  large: {
    fontSize: 18,
    height: 36,
    iconHeight: 24,
    borderThickness: 2,
  },
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  ...delegated
}) => {
  const styles = STYLES[size];

  if(!styles){
    throw new Error('Const `styles` has unknow size: ${size}');
  }

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ '--height': styles.iconHeight + 'px'}}>
        <Icon id={icon} size={styles.iconHeight}/>
      </IconWrapper>
      <TextInput {...delegated} style={{
        '--width': styles.width + 'px',
        '--height': styles.height + 'px',
        '--border': styles.borderThickness + 'px',
        '--fontsize': styles.fontSize / 16 + 'rem'}}>
      </TextInput>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  position: relative;
  display: block;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`
const TextInput = styled.input`
  height: var(--height);
  width: var(--width);
  border: none;
  border-bottom: var(--border) solid ${COLORS.black};
  padding-left: var(--height);
  color: inherit;
  font-size: var(--fontsize);
  font-weight: 700;
  outline-offset: 2px;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  height: var(--height);
`

export default IconInput;
