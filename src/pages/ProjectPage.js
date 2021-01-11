import ProjectTemplate from '../components/templates/ProjectTemplate'
import Header from '../components/organisms/layout/Header'
import Footer from '../components/organisms/layout/Footer'
import { useParams } from 'react-router-dom'
import { projects } from '../data/project'
import ProjectDescArticle from '../components/organisms/article/ProjectDescArticle'
import ProjectImageArticle from '../components/organisms/article/ProjectImageArticle'
import ProjectInfoArticle from '../components/organisms/article/ProjectInfoArticle'
import { useEffect } from 'react'

function ProjectPage(props) {
  const { num } = useParams()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  const intNum = Number(num);
  const projectObj = projects.find(({ num }) => num === intNum)
  const contentHeader = () => <ProjectDescArticle projectObj={projectObj} />
  const contentFooter = () => <ProjectInfoArticle projectObj={projectObj} />

  return (
    <ProjectTemplate 
      header={Header}
      footer={Footer}
      contentHeader={contentHeader}
      contentFooter={contentFooter}
      color={'#f3f3f3'}
    >
      <ProjectImageArticle projectObj={projectObj} />
    </ProjectTemplate>
  )
}

export default ProjectPage