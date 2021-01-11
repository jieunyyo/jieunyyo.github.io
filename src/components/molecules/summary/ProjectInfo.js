import React, { useState } from 'react'
import styled from 'styled-components'
import { SIZE } from '../../../data/constant';
import { StrongText } from '../../atoms/text';

const StyledDiv = styled.div`
  padding: 45px 0;
`
const StyledImg = styled.img`
  margin: 90px auto 0;
`

function ProjectInfo(props) {
  const { name, imgPath, ...rest } = props

  const [ realPath, setRealPath ] = useState('')
  import(`../../../assets/img${imgPath}`).then(data => {
    setRealPath(data.default)
  }).catch(() => {
    console.log('ProjectInfo error')
  });

  return (
    <StyledDiv {...rest}>
      <StrongText size={SIZE.SMALL}>{ name }</StrongText>
      <StyledImg src={realPath} alt="" />
    </StyledDiv>
  )
}

ProjectInfo.propTypes = {}

export default ProjectInfo