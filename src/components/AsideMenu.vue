<template>
  <aside
      v-show="isAsideVisible"
      class="aside is-placed-left is-expanded">
    <div class="image">
      <a href="https://justboil.me">
        <img src="../assets/jblogo-icon.png">
      </a>
    </div>
    <div class="menu is-menu-main">
      <aside-menu-list
          @menu-click="menuClick"
          :menu="menu"/>
    </div>
  </aside>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'AsideMenu',
  props: {
    menu: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    ...mapState([
      'isAsideVisible'
    ])
  },
  methods: {
    menuClick (item) {
      //
    }
  }
}
</script>
