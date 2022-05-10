<template>
  <ul :class="{'menu-list':!isSubmenuList}">
    <aside-menu-item
      v-for="(item,index) in menu"
      :key="index"
      :item="item"
      @menu-click="menuClick"
    />
  </ul>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import AsideMenuItem from '@/components/AsideMenuItem.vue'

export default defineComponent({
  name: 'AsideMenuList',
  components: {
    AsideMenuItem
  },
  props: {
    isSubmenuList: {
      type: Boolean,
      default: false
    },
    menu: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    menuClick (item) {
      this.$emit('menu-click', item)
    }
  }
})
</script>
