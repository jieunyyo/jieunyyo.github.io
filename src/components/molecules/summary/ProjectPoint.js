import React from 'react'
import styled from 'styled-components'
import { SIZE } from '../../../data/constant';
import { StrongText, BasicParagraph } from '../../atoms/text';

const StyledDiv = styled.div`
  display: flex;
  height: 204px;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #222;
  border-bottom: 1px solid #222;
`
const StyledStrong = styled(StrongText)`
  font-size: 60px;
  font-weight: 600;
  letter-spacing: -0.3px;
`
const StyledParagraph = styled(BasicParagraph)`
  line-height: 30px;
`

function ProjectPoint(props) {
  const { 
    point: {
      keyword,
      desc
    },
    ...rest } = props
  return (
    <StyledDiv {...rest}>
      <StyledStrong>{ keyword }</StyledStrong>
      <StyledParagraph>{ desc }</StyledParagraph>
    </StyledDiv>
  )
}

ProjectPoint.propTypes = {}

export default ProjectPoint