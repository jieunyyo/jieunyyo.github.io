import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'

const StyledStrong = styled.strong`
  font-family: NotoSansKR;
  font-size: 32px;
  font-weight: 700;
`

function CardTitle(props) {
  const { text, children, ...rest } = props
  return (
    <StyledStrong {...rest}>
      { text ? text : children }
    </StyledStrong>
  )
}

CardTitle.propTypes = {
  text: PropTypes.string
}

export default CardTitle