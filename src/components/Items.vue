<template>
  <transition-group tag="ul" class="items-list" name="fade" appear>
    <li
      class="items-list__item"
      v-for="(item, idx) in items"
      :key="item.id"
      @click="selectItem(idx)"
      @keyup.enter="selectItem(idx)"
      @keyup.delete="removedItem(idx)"
      tabindex="0"
    >
      <span>{{ item.title }}</span>
      <button
        class="btn btn_remove"
        type="button"
        @click.stop="removedItem(idx)"
        tabindex="-1"
      >
        <svg class="icon">
          <use xlink:href="#delete" />
        </svg>
      </button>
    </li>
  </transition-group>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  methods: {
    selectItem(idx) {
      this.$emit("select", idx);
    },
    removedItem(idx) {
      //Эмуляция запроса к серверу
      new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log("Preparing data... 1 sec");
          resolve();
        }, 1000);
      })
        .then(() => {
          this.$emit("removeItem", idx);
        })
        .catch(() => console.error("Server request error"));
    }
  }
};
</script>
