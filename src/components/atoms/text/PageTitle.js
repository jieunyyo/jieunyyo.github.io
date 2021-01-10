import React from 'react'
import styled from 'styled-components'

const StyledText = styled.span`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.3px;
  color: #666;
`
function PageTitle(props) {
  const { children, ...rest } = props
  return <StyledText {...rest}>{ children }</StyledText>
}

export default PageTitle