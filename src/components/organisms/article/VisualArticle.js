import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { PointTextLink } from '../../molecules/button'
import { LargeStrongText, LargeParagraph } from '../../atoms/text';

const StyledLargeStrong = styled(LargeStrongText)`
  display: block;
`
const StyledLargeParagraph = styled(LargeParagraph)`
  margin: 50px 0 80px;
  color: #666;
`
function VisualArticle() {

  return (
    <div>
      <StyledLargeStrong>흔한 지은입니다.</StyledLargeStrong>
      <StyledLargeParagraph>
        제 이름은 흔하지만, 매일 밤 사용자의 편리함을 <br/>
        추구하고 보는이의  눈을 즐겁게하는 웹사이트를 <br/> 
        제작하는 여행중입니다.
      </StyledLargeParagraph>
      <PointTextLink to="/about">저에대해 더 궁금하신가요?</PointTextLink>
    </div>
  )
}

VisualArticle.propTypes = {}

export default VisualArticle