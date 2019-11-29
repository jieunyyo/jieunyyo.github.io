<template>
  <div id="projects" class="inner_middle">
    <SectionTitle class="title_section" title="My Project" description="저는 창의적이지만 실용적인 프로젝트를 만들기 위해 노력하고 있습니다." />
    <ProjcetList />
  </div>
</template>

<script>
import SectionTitle from '../common/SectionTitle'
import ProjcetList from './ProjectList'
export default {
  name: 'IntroProject',
  components: {
    SectionTitle,
    ProjcetList
  }
}
</script>

<style scoped>
  .title_section {
    margin: 60px 0 90px;
    padding-top: 94px;
  }
</style>