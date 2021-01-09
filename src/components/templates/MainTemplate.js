import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledContent = styled.div`
  width: 1920px;
  margin: 110px auto 170px;
  padding: 0 270px;
`

function MainTemplate(props) {
  const { 
    header: HeaderComponent,
    footer: FooterComponent,
    children
  } = props
  
  return (
    <div className="template_main">
      <HeaderComponent />
        <StyledContent>{children}</StyledContent>
      <FooterComponent />
    </div>
  )
}

MainTemplate.propTypes = {
  header: PropTypes.func,
  contents: PropTypes.func,
  footer: PropTypes.func,
}

export default MainTemplate