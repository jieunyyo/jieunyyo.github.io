import React, { useState } from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  background-color: #f3f3f3;
`

function ProjectImageArticle(props) {
  const { 
    projectObj: {
      imgPath
    },
    ...rest } = props

    const [realPath, setRealPath] = useState('');
    import(`../../../assets/img${imgPath}`).then(data => {
      setRealPath(data.default);
    }).catch(() =>{
      console.log('errer ~')
    });

  return (
    <StyledDiv {...rest}>
      <img src={realPath} alt="" />
    </StyledDiv>
  )
}

ProjectImageArticle.propTypes = {}

export default ProjectImageArticle