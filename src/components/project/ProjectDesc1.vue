<template>
  <div class="box_info">
    <div class="group_text">
      <strong class="title_desc1">{{ info.title }}</strong>
      <p class="text_desc1">{{ info.text }}</p>
    </div>
    <dl class="group_info">
      <dt>RELEASE DATE</dt>
      <dd>{{ releaseDate }}</dd>
      <dt>ROLE</dt>
      <dd>{{ role }}</dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'ProjectDesc1',
  props: ['info', 'releaseDate', 'role']
}
</script>

<style scoped>
  .box_info {
    overflow: hidden;
    margin: 50px auto 90px;
  }
  .box_info .group_text {
    float: left;
    width: 840px;
  }
  .group_text .title_desc1 {
    display: block;
    padding-bottom: 16px;
    font-size: 40px;
    font-weight: 700;
    line-height: 60px;
    border-bottom: 2px solid #222;
  }
  .group_text .text_desc1 {
    margin-top: 24px;
    font-size: 18px;
    line-height: 30px;
    color: #666;
    white-space: pre;
  }
  .box_info .group_info {
    float: right;
  }
  .group_info dt {
    margin-bottom: 16px;
    font-size: 18px;
    font-weight: 700;
    text-align: right;
    line-height: 1;
  }
  .group_info dd {
    margin-bottom: 40px;
    font-size: 16px;
    text-align: right;
  }
</style>