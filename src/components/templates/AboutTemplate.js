import React from 'react'
import PropTypes from 'prop-types';

function AboutTemplate(props) {
  const { 
    header: HeaderComponent,
    footer: FooterComponent,
    children
  } = props
  
  return (
    <div>
      <HeaderComponent />
      {children}
      <FooterComponent />
    </div>
  )
}

AboutTemplate.propTypes = {
  header: PropTypes.func,
  contents: PropTypes.func,
  footer: PropTypes.func,
}

export default AboutTemplate