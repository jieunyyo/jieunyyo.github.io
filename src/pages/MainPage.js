import MainTemplate from '../components/templates/MainTemplate'
import Header from '../components/organisms/layout/Header'
import Footer from '../components/organisms/layout/Footer'
import VisualArticle from '../components/organisms/article/VisualArticle'

function MainPage() {
  return (
    <MainTemplate header={Header} footer={Footer}>
      <VisualArticle></VisualArticle>
    </MainTemplate>
  )
}

export default MainPage