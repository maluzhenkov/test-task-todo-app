<template>
  <div class="search">
    <div class="search__icon">
      <svg class="icon">
        <use xlink:href="#magnifying-glass" />
      </svg>
    </div>
    <input class="form__field" type="search" :placeholder="placeholder" v-model="search" />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: "Search"
    }
  },
  data() {
    return { search: this.value };
  },
  watch: {
    search(val) {
      this.$emit("search", val);
    }
  }
};
</script>
