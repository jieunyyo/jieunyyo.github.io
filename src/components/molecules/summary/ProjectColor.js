import React from 'react'
import styled from 'styled-components'
import { SIZE } from '../../../data/constant';
import { StrongText } from '../../atoms/text';
import ColorChip from '../../atoms/chip/ColorChip';
import ico_arrow from '../../../assets/img/ico_arrow.jpg'

const StyledDiv = styled.div`
  overflow: hidden;
  padding: 45px 0;
`
const StyledTitle = styled(StrongText)`
  display: block;
  margin-bottom: 90px;
`
const StyledChip = styled(ColorChip)`
  position: relative;
  float: left;
  margin: 0 110px 0 50px;
  &:last-of-type {
    float: right;
    margin: 0 0 0 110px;
    &:before {
      content: "";
      display: block;
      width: 44px;
      height: 10px;
      background: red;
      position: absolute;
      top: 130px;
      left: -155px;
      background: url(${ico_arrow}) center center / 100% auto;
    }
  }
`

function ProjectColor(props) {
  const { colors, ...rest } = props
  return (
    <StyledDiv {...rest}>
      <StyledTitle size={SIZE.SMALL}>Color</StyledTitle>
      { colors.map(({ name, color }) => {
        return <StyledChip key={`CHIP_${color}`} name={name} color={color} />
      }) }
    </StyledDiv>
  )
}

ProjectColor.propTypes = {}

export default ProjectColor