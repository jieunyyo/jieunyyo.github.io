import React from 'react'
import PropTypes from 'prop-types';

function H1(props) {
  const { hidden, children } = props

  return <h1 className={{ screen_out: hidden }}>{children}</h1>
}

H1.propTypes = {
  hidden: PropTypes.bool
}

// Paragraph.defaultProps = {
//   theme: PARAGRAPH_THEME.DEFAULT,
//   children:
//     'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat eum tempore, repudiandae est blanditiis repellendus alias ab doloremque aliquid illum consequuntur adipisci earum quia ratione modi, magnam odio? Libero, eius!',
// }


export default H1