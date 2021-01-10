import React from 'react'
import PropTypes from 'prop-types';

function H1(props) {
  const { hidden, children } = props

  return <h1 className={{ screen_out: hidden }}>{children}</h1>
}

H1.propTypes = {
  hidden: PropTypes.bool
}
H1.defaultProps = {
  hidden: false
}

export default H1