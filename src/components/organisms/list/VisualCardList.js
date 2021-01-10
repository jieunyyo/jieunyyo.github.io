import React, { forwardRef } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'
import VisualCard from '../../molecules/card/VisualCard'

const StyledUl = styled.ul`
  overflow: hidden;
  padding-top: 110px;
`
const StyledCard = styled(VisualCard)`
  width: 570px;
  height: 740px;
`
const StyledLi = styled.li`
  float: left;
  margin: 0 60px 120px 0;
  &:hover ${StyledCard} {
    transform: scale(0.95);
  }
  &:nth-child(2n-1) {
    clear: both;
  }
  &:nth-child(2n) {
    margin: -60px 0 0;
    padding: 0;
    ${StyledCard} {
      height: 680px;
    }
  }
  &:nth-child(4) {
    margin-top: -120px;
  }
  &:nth-child(6) {
    margin-top: -180px;
  }
`

function VisualCardList(props) {
  const { list, ...rest } = props

  const RefCardList = forwardRef((props, ref) => 
    <StyledUl ref={ref} {...props}> 
      { props.children }
    </StyledUl>
  )
  
  return <RefCardList {...rest}>
    {
      list.map(({title, path, ...restData}) => (
        <StyledLi key={`project_thumb_${title}`}>
          <StyledCard 
            title={title}
            to={`/project/${path}`}
            {...restData} />
        </StyledLi>
      ))
    }
    {/* <StyledLi>
      <StyledCard  title="1" to="/" />
    </StyledLi>
    <StyledLi>
      <StyledCard  title="2" to="/" />
    </StyledLi>
    <StyledLi>
      <StyledCard  title="3" to="/" />
    </StyledLi>
    <StyledLi>
      <StyledCard  title="4" to="/" />
    </StyledLi>
    <StyledLi>
      <StyledCard  title="5" to="/" />
    </StyledLi>
    <StyledLi>
      <StyledCard  title="6" to="/" />
    </StyledLi> */}
  </RefCardList>
}

VisualCardList.propTypes = {
  list: PropTypes.array
}

export default VisualCardList