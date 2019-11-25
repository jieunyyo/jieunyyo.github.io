<template>
  <div class="box_title" :style="{ background: backgroundImage}">
    <div class="inner_middle">
      <h3 :class="`title_project${isEnglish}`" :style="{ color: titleColor }">{{ title }}</h3>
      <p class="category_project" :style="{ color: categoryColor }">{{ category }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectTitle',
  props: ['title', 'category', 'titleLang', 'titleColor', 'categoryColor', 'filename'],
  data() {
    return {
      isEnglish: this.titleLang === 'en' ? ' title_project_en' : '',
      backgroundImage: `url(${require('@/assets/images/project_'+ this.filename +'_main.png')})`
    }
  }
}
</script>

<style scoped>
  .box_title {
    height: 928px;
    padding-top: 192px;
  }
  .box_title .title_project {
    margin: 0 0 24px -3px;
    font-size: 90px;
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: -5px;
    vertical-align: middle;
    white-space: pre;
  }
  .box_title .title_project_en {
    margin-bottom: 0;
    font-family: 'Josefin Sans', sans-serif;
  }
  .box_title .category_project {
    font-family: 'Josefin Sans', sans-serif;
    font-size: 28px;
    font-weight: 400;
    line-height: 1.1;
    opacity: 0.6;
  }
</style>