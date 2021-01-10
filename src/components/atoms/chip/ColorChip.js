import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  width: 465px;
`
const Circle = styled.div`
  float: left;
  width: 270px;
  height: 270px;
  margin-right: 50px;
  border-radius: 50%;
  background-color: ${props => props.color};
`
const StyledText = styled.span`
  display: block;
  margin-top: 110px;
  font-size: 18px;
  line-height: 18px;
  span {
    display: block;
    margin-top: 18px;
    color: #666;
  }
`

function ColorChip(props) {
  const { name, color, ...rest } = props
  return (
    <StyledDiv {...rest}>
      <Circle color={color}/>
      <StyledText>
        { name }
        <span>{color}</span>
      </StyledText>
    </StyledDiv>
  )
}

ColorChip.propTypes = {}

export default ColorChip