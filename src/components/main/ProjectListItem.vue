<template>
  <router-link class="item_project" :to="`/project/${project.id}`">
    <strong class="screen_out">{{ project.title }}</strong>
    <img class="thumb_project" :src="require(`@/assets/images/thumb_${project.filename}.jpg`)" :alt="project.category" />
  </router-link>
</template>

<script>
export default {
  name: 'ProjectListItem',
  props: ['project', 'isOver'],
  data() {
    return {
      // project: Object
    }
  }
}
</script>

<style scoped>
  .item_project {
    display: block;
    width: 675px;
    height: 720px;
    transition: padding 0.2s;
  }
  .item_project:hover {
    padding: 15px;
  }
  .item_project.small_item {
    width: 420px;
    height: 420px;
    margin-top: 156px;
  }
  .item_project img {
    display: block;
    width: 100%;
    height: 100%;
  }
</style>