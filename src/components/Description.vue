<template>
  <div class="app__item-description description" tabindex="0">
    <div class="description__text">{{ text }}</div>
    <div class="description__date">{{ date }}</div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: false
    }
  }
};
</script>
