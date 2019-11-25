<template>
  <ul class="list_project">
    <li v-for="(project, index) in projects" :key="index">
      <ProjectListItem v-if="parseInt((index+1)/2) !== parseInt((index)/2)" class="item_project small_item" :project="project"/>
      <ProjectListItem v-else class="item_project" :project="project"/>
    </li>
  </ul>
</template>

<script>
import ProjectListItem from './ProjectListItem'
import { projectList } from '../../data/projects'
export default {
  name: 'ProjectList',
  components: {
    ProjectListItem
  },
  data() {
    return {
      projects: projectList,
    }
  },
}
</script>

<style scoped>
  .list_project {
    overflow: hidden;
  }
  .list_project li {
    float: left;
    height: 720px;
    margin-bottom: 130px;
  }
  .list_project li:nth-child(2n) {
    margin-left: 105px;
  }
  .list_project .item_project {
    width: 675px;
    height: 720px;
    background: green;
  }
  .list_project .small_item {
    width: 420px;
    height: 420px;
    margin-top: 156px;
    background: blue;
  }
  
</style>