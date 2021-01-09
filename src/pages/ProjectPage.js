import ProjectTemplate from '../components/templates/ProjectTemplate'
import Header from '../components/organisms/layout/Header'
import Footer from '../components/organisms/layout/Footer'

function ProjectPage() {
  return (
    <ProjectTemplate header={Header} footer={Footer}>
      Project ~
    </ProjectTemplate>
  )
}

export default ProjectPage