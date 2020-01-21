<template>
  <form class="app__item-add form" @submit.prevent="addItem">
    <div class="form__group">
      <div class="form__label_group">
        <label class="form__label">Title</label>
        <small class="error" v-if="!$v.title.required && $v.title.$dirty">Field is required</small>
      </div>

      <input class="form__field" type="text" v-model.trim="$v.title.$model" />
    </div>
    <div class="form__group flex-grow">
      <div class="form__label_group">
        <label class="form__label">Description</label>
        <small
          class="error"
          v-if="!$v.description.required && $v.description.$dirty"
        >Field is required</small>
      </div>

      <textarea class="form__field textarea" rows="3" v-model.trim="$v.description.$model"></textarea>
    </div>
    <button
      type="submit"
      class="btn btn_success btn_size_wide"
      :class="{ disabled: loading || ($v.$dirty && $v.$invalid) }"
      :disabled="loading || ($v.$dirty && $v.$invalid)"
    >
      <span v-if="loading" class="spinner"></span>
      <span v-else>
        <svg class="icon">
          <use xlink:href="#plus" />
        </svg>Add
      </span>
    </button>
  </form>
</template>

<script>
import { required } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      title: "",
      description: "",
      loading: false
    };
  },
  validations: {
    title: {
      required
    },
    description: {
      required
    }
  },
  methods: {
    addItem() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return false;
      }
      this.loading = true;
      const item = { title: this.title, description: this.description };
      //Эмуляция запроса к серверу
      new Promise(resolve => {
        setTimeout(() => {
          console.log("Preparing data... 2 sec");
          resolve();
        }, 2000);
      })
        .then(() => {
          this.$emit("addItem", item);
        })
        .finally(() => {
          this.loading = false;
        });

      this.$v.$reset();
      this.title = "";
      this.description = "";
    }
  }
};
</script>
