import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'

const StyledParagraph = styled.p`
  font-family: NotoSansKR;
  font-size: 20px;
  font-weight: 300;
  line-height: 32px;
`
function BasicParagraph(props) {
  const { children, ...rest } = props
  return <StyledParagraph {...rest}>{ children }</StyledParagraph>
}

BasicParagraph.propTypes = {
  hidden: PropTypes.bool
}

export default BasicParagraph