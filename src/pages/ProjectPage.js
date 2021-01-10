import ProjectTemplate from '../components/templates/ProjectTemplate'
import Header from '../components/organisms/layout/Header'
import Footer from '../components/organisms/layout/Footer'
import { useParams } from 'react-router-dom'
import { StrongText } from '../components/atoms/text'
import { SIZE } from '../data/constant'

function ProjectPage(props) {
  const {  } = props
  const { num } = useParams()
  return (
    <ProjectTemplate header={Header} footer={Footer}>
      Project ~ { num }
      <StrongText size={SIZE.MEDIUM}>
        glgl
      </StrongText>
    </ProjectTemplate>
  )
}

export default ProjectPage