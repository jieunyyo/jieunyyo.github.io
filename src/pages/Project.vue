<template>
  <div>
    <h2 class="screen_out">프로젝트 소개</h2>
    <ProjectTitle
      :title="project.title"
      :category="project.category"
      :titleLang="project.titleLang"
      :titleColor="project.titleColor"
      :categoryColor="project.categoryColor"
      :filename="project.filename"
    />

    <ProjectDesc1
      class="inner_middle section_desc1 down"
      :info="project.desc1"
      :releaseDate="project.releaseDate"
      :role="project.role"
    />

    <img
      class="inner_middle img1_project"
      :src="require(`@/assets/images/project_${project.filename}_img1.jpg`)"
      alt="페이지1"
    />

    <ProjectDesc2
      v-if="project.desc2"
      class="section_desc2 down"
      :desc2="project.desc2"
      :filename="project.filename"
    />

    <div class="box_sub inner_middle" v-if="project.subPageCount > 0">
      <img v-for="(num) in project.subPageCount" :key="num" class="img_sub" :src="require(`@/assets/images/project_${project.filename}_img${num+1}.jpg`)" :alt="`서브페이지${num}`" />
    </div>

    <ProjectSummary v-if="hasSummary()" :designDesc="project.designDesc" :colors="project.colors" :fonts="project.fonts" :filename="project.filename" />
  </div>
</template>

<script>
import ProjectTitle from '../components/project/ProjectTitle'
import ProjectDesc1 from '../components/project/ProjectDesc1'
import ProjectDesc2 from '../components/project/ProjectDesc2'
import ProjectSummary from '../components/project/ProjectSummary'
import { projectList } from '../data/projects'
export default {
  name: 'Project',
  components: { 
    ProjectTitle,
    ProjectDesc1,
    ProjectDesc2,
    ProjectSummary
  },
  data() {
    return {
      project: projectList[this.$route.params.id],
      isDownDesc1: true,
      isDownDesc2: true,
    }
  },
  methods: {
    hasSummary() {
      return this.project.designDesc || this.project.colors || this.project.fonts
    },
    positionScroll(center) {
      window.scrollTo(center, 0)
    }
  },
  mounted() {
    const center = (document.body.scrollWidth - document.body.clientWidth) / 2
    this.positionScroll(center)
  }
}
</script>

<style scoped>
  .img1_project {
    margin-bottom: 130px;
  }
  .box_sub {
    overflow: hidden;
    margin-bottom: 130px;
    column-width:570px;
    column-gap: 60px;
  }
  .img_sub {
    float: left;
    width: 100%;
    margin-bottom: 60px;
  }
  .section_desc1,
  .section_desc2 {
    margin-top: 0;
    transition: margin 1s;
  }
  .section_desc1.down,
  .section_desc2.down {
    margin-top: 30px;
  }
</style>