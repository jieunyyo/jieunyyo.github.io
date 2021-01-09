import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'

const StyledParagraph = styled.p`
  font-size: 26px;
  font-weight: 300;
  line-height: 46px;
`

function LargeParagraph(props) {
  const { children, ...rest } = props
  return <StyledParagraph {...rest}>{ children }</StyledParagraph>
}

LargeParagraph.propTypes = {
  hidden: PropTypes.bool
}

export default LargeParagraph