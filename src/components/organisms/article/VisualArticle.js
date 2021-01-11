import React from 'react'
import styled from 'styled-components'
import { PointTextLink } from '../../molecules/button'
import { StrongText, LargeParagraph } from '../../atoms/text';
import image from '../../../assets/img/img_bubble.jpg'

const StyledDiv = styled.div`
  position: relative;
  padding: 85px 0 95px;
`
const StyledLargeStrong = styled(StrongText)`
  display: block;
  margin-left: -3px;
`
const StyledLargeParagraph = styled(LargeParagraph)`
  margin: 50px 0 80px;
  color: #666;
`
const StyledImg = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 790px;
  height: auto;
  margin-right: -270px;
`

function VisualArticle(props) {
  const { ...rest } = props
  return (
    <StyledDiv {...rest}>
      <StyledLargeStrong>흔한 지은입니다.</StyledLargeStrong>
      <StyledLargeParagraph>
        제 이름은 흔하지만, 매일 밤 사용자의 편리함을 <br/>
        추구하고 보는이의  눈을 즐겁게하는 웹사이트를 <br/> 
        제작하는 여행중입니다.
      </StyledLargeParagraph>
      <PointTextLink to="/about">저에대해 더 궁금하신가요?</PointTextLink>
      <StyledImg src={image} alt="" />
    </StyledDiv>
  )
}

VisualArticle.propTypes = {}

export default VisualArticle