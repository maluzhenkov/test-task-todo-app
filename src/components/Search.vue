<template>
  <div class="search">
    <div class="icon icon__search">
      <svg class="icon">
        <use xlink:href="../assets/sprite.svg#magnifying-glass" />
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
