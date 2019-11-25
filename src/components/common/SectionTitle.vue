<template>
  <div>
    <h2>{{ title }}</h2>
    <p>
      {{ description }}
    </p>
  </div>
</template>

<script>
export default {
  name: "SectionTitle",
  props: {
    title: String,
    description: String
  }
}
</script>

<style scoped>
  h2 {
    font-family: 'Josefin Sans', sans-serif;
    font-size: 50px;
    font-weight: 700;
    text-align: center;
    letter-spacing: 0.25;
    text-transform: uppercase;
  }

  p {
    margin-top: 16px;
    font-size: 24px;
    font-weight: 300;
    text-align: center;
    letter-spacing: -0.25;
  }
</style>