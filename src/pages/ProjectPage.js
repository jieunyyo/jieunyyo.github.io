import ProjectTemplate from '../components/templates/ProjectTemplate'
import Header from '../components/organisms/layout/Header'
import Footer from '../components/organisms/layout/Footer'
import { useParams } from 'react-router-dom'
import { projects } from '../data/project'
import ProjectDescArticle from '../components/organisms/article/ProjectDescArticle'
import ProjectImageArticle from '../components/organisms/article/ProjectImageArticle'
import ProjectInfoArticle from '../components/organisms/article/ProjectInfoArticle'

function ProjectPage(props) {
  const { num } = useParams()
  
  const intNum = Number(num);
  const projectObj = projects.find(({ num }) => num === intNum)

  return (
    <ProjectTemplate header={Header} footer={Footer}>
      <ProjectDescArticle projectObj={projectObj} />
      <ProjectImageArticle projectObj={projectObj} />
      <ProjectInfoArticle projectObj={projectObj} />
    </ProjectTemplate>
  )
}

export default ProjectPage