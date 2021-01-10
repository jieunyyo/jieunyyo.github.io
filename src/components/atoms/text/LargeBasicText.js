import React from 'react'
import styled from 'styled-components'

const StyledBasic = styled.span`
  font-size: 40px;
  font-weight: 700;
  line-height: 60px;
`

function LargeBasicText(props) {
  const { children, ...rest } = props
  return (
    <StyledBasic {...rest}>{ children }</StyledBasic>
  )
}

export default LargeBasicText