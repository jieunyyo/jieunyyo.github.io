import AboutTemplate from '../components/templates/AboutTemplate'
import Header from '../components/organisms/layout/Header'
import Footer from '../components/organisms/layout/Footer'

function AboutPage() {
  return (
    <AboutTemplate header={Header} footer={Footer}>
      about ~
    </AboutTemplate>
  )
}

export default AboutPage