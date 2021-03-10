import NewChild from './../components/NewChild.vue'

export default {
  name: 'app-new-parent',
  components: {
    NewChild
  },
  data() {
    return {
      Parent: 'parent check text'
    }
  }
}
