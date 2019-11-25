<template>
  <div>
    <h2 class="screen_out">프로젝트 소개</h2>
    <ProjectTitle :title="project.title" :category="project.category" :titleLang="project.titleLang" :titleColor="project.titleColor" :categoryColor="project.categoryColor" :filename="project.filename" />

    <ProjectDesc1 class="inner_middle" :info="project.desc1" :releaseDate="project.releaseDate" :role="project.role" />
    <img class="inner_middle img1_project" :src="require(`@/assets/images/project_${project.filename}_img1.jpg`)" alt="페이지1" />

    <ProjectDesc2 v-if="project.desc2" :desc2="project.desc2" :filename="project.filename"/>

    <div class="box_sub inner_middle">
      <img v-for="(num) in project.subPageCount" :key="num" class="img_sub" :src="require(`@/assets/images/project_${project.filename}_img${num+1}.jpg`)" :alt="`서브페이지${num}`" />
    </div>

    <ProjectSummery :designDesc="project.designDesc" :colors="project.colors" :fonts="project.fonts" :filename="project.filename" />
  </div>
</template>

<script>
import ProjectTitle from '../components/project/ProjectTitle'
import ProjectDesc1 from '../components/project/ProjectDesc1'
import ProjectDesc2 from '../components/project/ProjectDesc2'
import ProjectSummery from '../components/project/ProjectSummary'
import { projectList } from '../data/projects'
export default {
  name: 'Project',
  components: { 
    ProjectTitle,
    ProjectDesc1,
    ProjectDesc2,
    ProjectSummery
  },
  data() {
    return {
      project: projectList[this.$route.params.id],
      publicPath: process.env.BASE_URL
    }
  },
  created() {
    this.project = projectList[this.$route.params.id]
  },
  mounted() {
    window.scrollTo(0,0);
  }
}
</script>

<style scoped>
  .img1_project {
    margin-bottom: 130px;
  }
  .box_sub {
    overflow: hidden;
    column-width:570px;
    column-gap: 60px;
  }
  .img_sub {
    float: left;
    width: 100%;
    /* margin-right: 60px; */
  }
  /* .img_sub:nth-child(2n) { */
  /* } */
</style>