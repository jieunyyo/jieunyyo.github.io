import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledContent = styled.div`
  width: 1920px;
  margin: 110px auto 170px;
  padding: 0 360px;
`
function MainTemplate(props) {
  const { 
    header: HeaderComponent,
    footer: FooterComponent,
    headerProps,
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
    <div className="template_main">
      <StyledHeader {...headerProps} />
      <StyledContent>{children}</StyledContent>
      <StyledFooter />
    </div>
  )
}

MainTemplate.propTypes = {
  header: PropTypes.func,
  contents: PropTypes.func,
  footer: PropTypes.func,
}

export default MainTemplate