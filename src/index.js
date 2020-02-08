import Vue from 'vue';
import { mapState } from 'vuex';
import store from './store';
import parseLocationHash from './utils/parseLocationHash';
import CheckBox from './components/CheckBox.vue';

new Vue({
  el: '#app',
  store,
  components: {
    CheckBox
  },
  computed: {
    ...mapState(['currentCategory'])
  },
  created() {
    /**
     * hashの変更でstateを変更
     */
    window.addEventListener('hashchange', () => {
      const { category } = parseLocationHash();

      if (category) {
        const currentCategory = category.split(',').filter(value => value !== '');
        if (currentCategory.length > 0) {
          this.$store.dispatch('setCurrentCategory', currentCategory);
        }
      } else if (category === '' || category === void 0) {
        this.$store.dispatch('setCurrentCategory', []);
      }
    });

    /**
     * stateの変更でhashを変更
     */
    this.$store.subscribe(({ type }) => {
      if (type === 'setCurrentCategory') {
        const { category } = parseLocationHash();

        // stateに変更がなければ無視
        if (category === String(this.currentCategory)) return;

        if (category) {
          window.location.hash = window.location.hash.replace(`category=${category}`, `category=${String(this.currentCategory)}`);
        } else {
          window.location.hash = `category=${String(this.currentCategory)}`;
        }
      }
    });
  },
  template: `
    <div>
      <check-box></check-box>
    </div>
  `
});
