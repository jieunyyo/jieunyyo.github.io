<template>
  <div style="">
    <router-link :to="`/project/${project.id}`">
      <strong class="screen_out">{{ project.title }}</strong>
      <img class="thumb_project" :src="require(`@/assets/images/thumb_${project.filename}.jpg`)" :alt="project.category" />
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'ProjectListItem',
  props: ['project'],
  data() {
    return {
      // project: Object
    }
  },
  mounted() {
    console.dir(this.project)
  }
}
</script>

<style>

</style>