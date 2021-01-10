import React from 'react'
import styled from 'styled-components'
import { SIZE } from '../../../data/constant';
import { StrongText, BasicParagraph } from '../../atoms/text';

const StyledDiv = styled.div`
  padding: 130px 360px 180px;
`
const StyledTitle = styled(StrongText)`
  display: block;
  margin-left: -6px;
`
const StyledParagraph = styled(BasicParagraph)`
  margin: 70px 0 60px;
  white-space: pre-line;
`
const StyledText = styled.span`
  font-size: 16px;
  font-weight: 700;
  span {
    margin-left: 4px;
    font-weight: 300;
  }
`

function ProjectDescArticle(props) {
  const { 
    projectObj: {
      title,
      desc,
      info
    },
    ...rest } = props
  return (
    <StyledDiv {...rest}>
      <StyledTitle size={SIZE.MEDIUM}>{ title }</StyledTitle>
      <StyledParagraph>{ desc }</StyledParagraph>
      <StyledText>Role<span>{ info.role }</span></StyledText>
    </StyledDiv>
  )
}

ProjectDescArticle.propTypes = {}

export default ProjectDescArticle