import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'

const StyledSpan = styled.span`
  font-family: NotoSansKR;
  font-size: 16px;
  font-weight: 300;
`

function CardSubTitle(props) {
  const { text, children, ...rest } = props
  return (
    <StyledSpan {...rest}>
      { text ? text : children }
    </StyledSpan>
  )
}

CardSubTitle.propTypes = {
  text: PropTypes.string
}

export default CardSubTitle