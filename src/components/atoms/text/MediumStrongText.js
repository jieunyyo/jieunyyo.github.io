import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'

const StyledStrong = styled.strong`
  font-size: 96px;
  font-weight: 700;
  line-height: 96px;
  letter-spacing: -0.3px;
`

function MediumStrongText(props) {
  const { hidden, children, ...rest } = props
  return (
    <StyledStrong className={{ screen_out: hidden }} {...rest}>
      { children }
    </StyledStrong>
  )
}

MediumStrongText.propTypes = {
  hidden: PropTypes.bool
}
MediumStrongText.defaultProps = {
  hidden: false
}

export default MediumStrongTexts