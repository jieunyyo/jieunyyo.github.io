import React, { useEffect } from 'react'
import styled from 'styled-components'
import { SIZE } from '../../../data/constant';
import { BasicParagraph, StrongText } from '../../atoms/text';
import ProjectColor from '../../molecules/summary/ProjectColor';
import ProjectInfo from '../../molecules/summary/ProjectInfo';
import ProjectPoint from '../../molecules/summary/ProjectPoint';

const getTransitionCss = (order) => {
  return `
    opacity: 0;
    margin-top: -30px;
    transition: opacity 1s, margin 1s;
    transition-timing-function: ease-out;
    transition-delay: ${ order * 0.1 }s;
  `
}
const StyledDiv = styled.div`
  padding: 150px 360px 185px;
`
const StyledTitle = styled(StrongText)`
  display: block;
  margin-bottom: 45px;
  ${ props => getTransitionCss(props.order) }
`
const StyledParagraph = styled(BasicParagraph)`
  margin-bottom: 90px;
  line-height: 30px;
  color: #666;
  white-space: pre-line;
  ${ props => getTransitionCss(props.order) }
`
const StyledPoint = styled(ProjectPoint)`
  margin-bottom: 25px;
  ${ props => getTransitionCss(props.order) }
`
const StyledColor = styled(ProjectColor)`
  ${ props => getTransitionCss(props.order) }
`
const StyledInfo = styled(ProjectInfo)`
  ${ props => getTransitionCss(props.order) }
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
    ...rest} = props

  let timer = null
  const onScroll = e => {
    if (!timer) {
      timer = setTimeout(() => {
        timer = null
        const pageYOffset = window.pageYOffset
        const transElements = document.querySelectorAll('.obj_trans')
        transElements.forEach(element => {
          if (element.offsetTop < pageYOffset + window.innerHeight) {
            element.classList.add('show')
          }
        });
      }, 100)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll, false)
    return () => {
      const transElements = document.querySelectorAll('.obj_trans')
      transElements.forEach(element => {
        element.classList.remove('show')
      });
    }
  }, [])

  return (
    <StyledDiv {...rest}>
      <StyledTitle 
        className="obj_trans"
        order={1}
        size={SIZE.SMALL}>
          Design element
      </StyledTitle>
      <StyledParagraph
        className="obj_trans"
        order={2}>
          { designElement }
      </StyledParagraph>

      { point && (
        <StyledPoint 
          className="obj_trans"
          order={3}
          point={point} />
      )}
      
      { colors && (
        <StyledColor 
          className="obj_trans"
          order={4}
          colors={colors} />
      )}
      
      { images && images.map(({ name, imgPath }, idx) => (
        imgPath && (
          <StyledInfo 
            className="obj_trans"
            order={ 5 + idx }
            key={`INFO_${name}`}
            name={name}
            imgPath={imgPath} />
        ) 
      ))}
    </StyledDiv>
  )
}

ProjectInfoArticle.propTypes = {}

export default ProjectInfoArticle