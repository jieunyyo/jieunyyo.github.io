import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Circle = styled.span`
  display: block;
  width: 50px;
  height: 50px;
  margin: -35px 0 0 -25px;
  border-radius: 25px;
  background-color: #f3f3f3;
`

const StyledLink = styled(Link)`
  display: inline-block;
  height: 50px;
  padding: 17px 25px;
  font-size: 15px;
  font-weight: 400;
  ${Circle} {
    animation: toLeft 0.7s;
  }
  &:hover ${Circle} {
    width: 50px;
    margin-left: 140px;
    animation: toRight 0.7s;
  }

  @keyframes toRight {
    0% {
      width: 50px;
      margin-left: -25px;
    }
    50% {
      width: 215.5px;
      margin-left: -25px;
    }
    100% {
      width: 50px;
      margin-left: 140px;
    }
  }
  @keyframes toLeft {
    0% {
      width: 50px;
      margin-left: 140px;
    }
    50% {
      width: 215.5px;
      margin-left: -25px;
    }
    100% {
      width: 50px;
      margin-left: -25px;
    }
  }
`

function PointTextLink(props) {
  const { to, children, ...rest } = props
  return (
    <StyledLink to={to} {...rest}>
      { children }
      <Circle />
    </StyledLink>
  )
}

PointTextLink.propTypes = {
  href: PropTypes.string,
  target: PropTypes.string
}

export default PointTextLink