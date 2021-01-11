import React from 'react'
import styled from 'styled-components'
import { SIZE } from '../../../data/constant';
import { BasicParagraph, StrongText } from '../../atoms/text';
import ProjectColor from '../../molecules/summary/ProjectColor';
import ProjectInfo from '../../molecules/summary/ProjectInfo';
import ProjectPoint from '../../molecules/summary/ProjectPoint';

const StyledDiv = styled.div`
  padding: 150px 360px 185px;
`
const StyledStrong = styled(StrongText)`
  display: block;
  margin-bottom: 45px;
`
const StyledParagraph = styled(BasicParagraph)`
  margin-bottom: 90px;
  line-height: 30px;
  color: #666;
`
const StyledPoint = styled(ProjectPoint)`
  margin-bottom: 25px;
`

function ProjectInfoArticle(props) {
  const { 
    projectObj: {
      info: {
        designElement,
        point,
        colors,
        images
      }
    },
    ...rest } = props
  return (
    <StyledDiv {...rest}>
      <StyledStrong size={SIZE.SMALL}>Design element</StyledStrong>
      <StyledParagraph>{ designElement }</StyledParagraph>
      
      { point && <StyledPoint point={point} />}
      { colors && <ProjectColor colors={colors} />}
      
      { images && images.map(({ name, imgPath }) => {
        return imgPath && <ProjectInfo key={`INFO_${name}`} name={name} imgPath={imgPath} />
      })}
    </StyledDiv>
  )
}

ProjectInfoArticle.propTypes = {}

export default ProjectInfoArticle