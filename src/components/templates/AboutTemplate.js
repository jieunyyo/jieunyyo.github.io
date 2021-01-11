import React, { Fragment } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledContent = styled.div`
  width: 100%;
  min-width: 1920px;
  margin: 40px auto 0;
  padding: 0 360px;
`

function AboutTemplate(props) {
  const { 
    header: HeaderComponent,
    footer: FooterComponent,
    media: MediaComponent,
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
  const StyledDiv = styled.div`
    width: 100%;
    margin: 145px auto 0;
    background-color: #f3f3f3;
  `

  return (
    <Fragment>
      <StyledHeader />
      
      <StyledContent>{children}</StyledContent>
      
      <StyledDiv>
        <MediaComponent />
      </StyledDiv>

      <StyledFooter />
    </Fragment>
  )
}

AboutTemplate.propTypes = {
  header: PropTypes.func,
  contents: PropTypes.func,
  footer: PropTypes.func,
}

export default AboutTemplate