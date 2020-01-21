<template>
  <div class="page">
    <div class="app container">
      <!-- TOOLBAR -->
      <div class="app__toolbar">
        <NewItem @addItem="addItem" />
        <Description :text="description" :date="date" />
      </div>
      <!-- SEARCH -->
      <div v-show="items.length" class="app__search">
        <Search :value="search" placeholder="Fiend our item" @search="search = $event" />
      </div>
      <!-- CONTENT -->
      <div class="app__content">
        <div class="app__content_text" v-if="items.length && !itemsFiltred.length">Nothing found</div>
        <items
          v-if="items.length"
          :items="itemsFiltred"
          @select="selectItem"
          @removeItem="removeItem"
        />
        <div class="app__content_text" v-else>The list is empty, add item</div>
      </div>
      <!-- FOOTER -->
      <div class="app__footer">Footer 50px</div>
    </div>
  </div>
</template>

<script>
import Items from "@/components/Items.vue";
import NewItem from "@/components/NewItem.vue";
import Description from "@/components/Description.vue";
import Search from "@/components/Search.vue";

export default {
  components: {
    NewItem,
    Items,
    Description,
    Search
  },
  data() {
    return {
      description: "Select item to view the description",
      date: "",
      search: "",
      nowDate: new Date(Date.now()).toLocaleString(),
      items: [
        {
          title: "Item 1",
          description: "Description for Item 1",
          date: this.nowDate
        },
        {
          title: "Long description",
          description:
            "Description for Item 2 Description for Item 2 Description for Item 2 Description for Item 2 Description for Item 2 Description for Item 2 Description for Item 2 Description for Item 2 Description for Item 2 Description for Item 2 Description for Item 2 Description for Item 2 Description for Item 2 Description for Item 2 Description for Item 2 Description for Item 2 Description for Item 2 Description for Item 2 Description for Item 2 Description for Item 2 Description for Item 2 Description for Item 2 Description for Item 2",
          date: this.nowDate
        },
        {
          title: "Item 3",
          description: "Description for Item 3",
          date: this.nowDate
        },
        {
          title: "Item 4",
          description: "Description for Item 4",
          date: this.nowDate
        },
        {
          title: "Item 5",
          description: "Description for Item 5",
          date: this.nowDate
        }
      ]
    };
  },
  computed: {
    itemsFiltred() {
      let array = this.items,
        search = this.search;

      if (!search) return array;

      search = search.trim().toLowerCase();
      //Filter
      array = array.filter(item => {
        if (item.title.toLowerCase().indexOf(search) !== -1) {
          return item;
        }
      });
      //Error
      return array;
    }
  },
  methods: {
    addItem(item) {
      item.date = new Date(Date.now()).toLocaleString();
      this.items.unshift(item);
      const listItems = localStorage.getItem("ListItems");
      if (listItems) {
        const itemsArr = JSON.parse(listItems);
        itemsArr.unshift(item);
        localStorage.setItem("ListItems", JSON.stringify(itemsArr));
      } else {
        localStorage.setItem("ListItems", JSON.stringify([item]));
      }
    },
    selectItem(idx) {
      this.description = this.items[idx].description;
      this.date = this.items[idx].date;
    },
    removeItem(idx) {
      this.items.splice(idx, 1);
      localStorage.setItem("ListItems", JSON.stringify(this.items));
    }
  },
  created() {
    const listItems = localStorage.getItem("ListItems");
    if (!listItems) {
      localStorage.setItem("ListItems", JSON.stringify(this.items));
    } else {
      const itemsArr = JSON.parse(listItems);
      this.items = itemsArr;
    }
  }
};
</script>
