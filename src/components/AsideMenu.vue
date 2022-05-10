<template>
  <aside
    v-show="isAsideVisible"
    class="aside is-placed-left is-expanded"
  >
    <div class="image">
      <router-link to="/">
        <img src="../assets/jblogo-icon.png">
      </router-link>
    </div>
    <div class="menu is-menu-main">
      <aside-menu-list
        :menu="menu"
        @menu-click="menuClick"
      />
    </div>
  </aside>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { mapState } from 'vuex'
import AsideMenuList from '@/components/AsideMenuList.vue'

export default defineComponent({
  name: 'AsideMenu',
  components: { AsideMenuList },
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
})
</script>
