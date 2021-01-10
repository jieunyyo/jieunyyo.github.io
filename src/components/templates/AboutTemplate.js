import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledContent = styled.div`
  width: 1920px;
  margin: 40px auto 0;
  padding: 0 360px;
`

function AboutTemplate(props) {
  const { 
    header: HeaderComponent,
    footer: FooterComponent,
    children
  } = props

  const StyledHeader = styled(HeaderComponent)`
    width: 1920px;
    height: 110px;
  `
  const StyledFooter = styled(FooterComponent)`
    width: 1920px;
  `
  
  return (
    <div>
      <StyledHeader />
      <StyledContent>{children}</StyledContent>
      <StyledFooter />
    </div>
  )
}

AboutTemplate.propTypes = {
  header: PropTypes.func,
  contents: PropTypes.func,
  footer: PropTypes.func,
}

export default AboutTemplate