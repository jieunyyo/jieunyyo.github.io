import React, { Fragment } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledContent = styled.div`
  width: 100%;
  min-width: 1920px;
  margin: 0 auto;
  background-color: ${ props => props.color};
`
const StyledDiv = styled.div`
  width: 1920px;
  margin: 0 auto;
`
function ProjectTemplate(props) {
  const { 
    header: HeaderComponent,
    footer: FooterComponent,
    contentHeader: ContentHeader,
    contentFooter: ContentFooter,
    color,
    children
  } = props

  const StyledHeader = styled(HeaderComponent)`
    width: 100%;
    min-width: 1920px;
    height: 110px;
  `
  const StyledFooter = styled(FooterComponent)`
    width: 100%;
    min-width: 1920px;
  `
  
  return (
    <Fragment>
      <StyledHeader />
      
      <StyledDiv>
        <ContentHeader />
      </StyledDiv>
      
      <StyledContent color={color}>
        {children}
      </StyledContent>
      
      <StyledDiv>
        <ContentFooter />
      </StyledDiv>
      
      <StyledFooter />
    </Fragment>
  )
}

ProjectTemplate.propTypes = {
  header: PropTypes.func,
  footer: PropTypes.func,
}

export default ProjectTemplate