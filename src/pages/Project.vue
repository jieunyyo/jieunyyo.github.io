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

    <div class="inner_middle">
      <div :class="`box_sub sub_${project.filename}${project.subPageCount === 1 ? ' img_only' : ''}${project.subPageCount === 2 ? ' img_two' : ''}`" v-if="project.subPageCount > 0">
        <div :class="`box_column column_${num}`" v-for="(num) in project.subPageCount" :key="num">
          <img class="img_sub" :src="require(`@/assets/images/project_${project.filename}_img${num+1}.jpg`)" :alt="`서브페이지${num}`" />
        </div>
      </div>
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
    border: 1px solid #e5e5e5;
  }
  .box_sub {
    overflow: hidden;
    margin-bottom: 130px;
    column-width: 570px;
    column-gap: 60px;
    column-count: 2;
  }
  .box_column {
    display: block;
    margin-bottom: 60px;
  }
  .img_sub {
    width: 100%;
    border: 1px solid #e5e5e5;
  }
  .box_sub.img_only {
    column-width: none;
    column-gap: none;
    column-count: none;
  }
  .box_sub.img_only .box_column {
    width: 100%;
  }
  .box_sub.img_two .box_column {
    margin-bottom: 0;
    padding-bottom: 0;
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
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    /* for ie 10, 11 */
    .sub_speedrack .column_2,
    .sub_naraefood .column_2 {
      margin: 0;
    }
    .sub_speedrack .column_3,
    .sub_naraefood .column_3 {
      height: 0;
      margin: 0;
    }
  }
</style>