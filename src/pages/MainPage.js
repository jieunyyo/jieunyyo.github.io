import React, { createRef, useEffect, useRef } from 'react'
import styled from 'styled-components'
import MainTemplate from '../components/templates/MainTemplate'
import Header from '../components/organisms/layout/Header'
import Footer from '../components/organisms/layout/Footer'
import VisualArticle from '../components/organisms/article/VisualArticle'
import VisualCardList from '../components/organisms/list/VisualCardList'
import { projectThumbs } from '../data/project'

const StyledVisualArticle = styled(VisualArticle)`
  margin-bottom: 100px;  
`

function MainPage(props) {
  const { location } = props

  useEffect(() => {
    if (location.hash) {
      document.querySelector(location.hash).scrollIntoView()
    }
  }, [location])

  return (
    <MainTemplate header={Header} footer={Footer}>
      <StyledVisualArticle />
      <VisualCardList id="project" list={projectThumbs} />
    </MainTemplate>
  )
}

export default MainPage