<template>
  <ul class="list_project">
    <li v-for="(project, index) in projects" :key="index">
      <ProjectListItem :project="project" :class="`${parseInt((index+1)/2)%2 ? ' small_item' : ''}`"/>
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
  }
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
  .list_project li:hover img {
    width: 80%;
    height: 80%;
  }
  .list_project li:nth-child(2n) {
    margin-left: 105px;
  }
  .list_project .item_project img {
    width: 100%;
  }
</style>