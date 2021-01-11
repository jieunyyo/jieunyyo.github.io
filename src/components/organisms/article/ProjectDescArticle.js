import React, { useEffect } from 'react'
import styled from 'styled-components'
import { SIZE } from '../../../data/constant';
import { StrongText, BasicParagraph } from '../../atoms/text';

const StyledDiv = styled.div`
  padding: 130px 360px 180px;
  @keyframes toAppear {
    0% {
      opacity: 0;
      margin-top: -30px;
    }
    100% {
      opacity: 1;
      margin-top: 0;
    }
  };
`
const StyledTitle = styled(StrongText)`
  display: block;
  margin: 0 0 70px -6px;
  animation: toAppear 1s;
`
const StyledParagraph = styled(BasicParagraph)`
  margin-bottom: 60px;
  white-space: pre-line;
  animation: toAppear 1s;
`
const StyledText = styled.span`
  display: block;
  font-size: 16px;
  font-weight: 700;
  animation: toAppear 1s;
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