import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'

const StyledStrong = styled.strong`
  font-size: 96px;
  font-weight: 700;
  line-height: 96px;
  letter-spacing: -0.3px;
`

function LargeStrongText(props) {
  const { children, ...rest } = props
  return <StyledStrong {...rest}>{ children }</StyledStrong>
}

LargeStrongText.propTypes = {
  hidden: PropTypes.bool
}

export default LargeStrongText