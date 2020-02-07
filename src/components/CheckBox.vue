<template>
  <form action="">
    <p v-for="(item, index) in items" :key="index">
      <label><input v-model="category" :value="index" type="checkbox" />{{ item }}</label>
    </p>
  </form>
</template>

<script>
export default {
  name: 'CheckBox',
  data: function() {
    return {
      items: {
        category1: 'カテゴリ1',
        category2: 'カテゴリ2',
        category3: 'カテゴリ3',
        category4: 'カテゴリ4',
        category5: 'カテゴリ5'
      }
    };
  },
  computed: {
    category: {
      get() {
        return this.$store.state.currentCategory;
      },
      set(value) {
        this.$store.dispatch('setCurrentCategory', value);
      }
    }
  }
};
</script>
