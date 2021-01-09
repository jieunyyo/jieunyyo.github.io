import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'

const StyledA = styled.a`
  color: #111;
`

function A(props) {
  const {href, target, children, ...rest} = props

  return <StyledA href={href} target={target} {...rest}>{children}</StyledA>
}

A.propTypes = {
  href: PropTypes.string,
  target: PropTypes.string
}

export default A