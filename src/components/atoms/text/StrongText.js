import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { SIZE } from '../../../data/constant';

const StyledLarge = styled.strong`
  font-size: 96px;
  font-weight: 700;
  line-height: 96px;
  letter-spacing: -0.3px;
`
const StyledMedium = styled.strong`
  font-size: 80px;
  font-weight: 700;
  letter-spacing: -0.3px;
`

const getStyledComponent = size => {
  switch (size) {
    case SIZE.MEDIUM:
      return StyledMedium
    default:
      return StyledLarge
  }
}

function StrongText(props) {
  const { size, hidden, children, ...rest } = props
  const Component = getStyledComponent(size)
  return (
    <Component className={{ screen_out: hidden }} {...rest}>
      { children }
    </Component>
  )
}

StrongText.propTypes = {
  size: PropTypes.string,
  hidden: PropTypes.bool
}
StrongText.defaultProps = {
  size: SIZE.LARGE,
  hidden: false
}

export default StrongText