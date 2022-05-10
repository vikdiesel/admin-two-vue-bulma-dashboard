<template>
  <div id="app">
    <nav-bar />
    <aside-menu :menu="menu" />
    <router-view />
    <footer-bar />
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import NavBar from '@/components/NavBar.vue'
import AsideMenu from '@/components/AsideMenu.vue'
import FooterBar from '@/components/FooterBar.vue'

export default defineComponent({
  components: { FooterBar, AsideMenu, NavBar },
  computed: {
    menu () {
      return [
        {
          to: '/',
          icon: 'desktop-mac',
          label: 'Dashboard'
        },
        {
          to: '/tables',
          label: 'Tables',
          icon: 'table',
          updateMark: true
        },
        {
          to: '/forms',
          label: 'Forms',
          icon: 'square-edit-outline'
        },
        {
          to: '/profile',
          label: 'Profile',
          icon: 'account-circle'
        },
        {
          href: 'https://admin-two.justboil.me',
          label: 'Premium version',
          icon: 'credit-card',
          target: '_blank'
        },
        {
          href: 'https://github.com/vikdiesel/admin-two-vue-bulma-dashboard',
          label: 'GitHub',
          icon: 'github-circle',
          target: '_blank'
        },
        {
          label: 'Submenus',
          subLabel: 'Submenus Example',
          icon: 'view-list',
          menu: [
            {
              href: '#void',
              label: 'Sub-item One'
            },
            {
              href: '#void',
              label: 'Sub-item Two'
            }
          ]
        }
      ]
    }
  },
  created () {
    this.$store.commit('user', {
      name: 'John Doe',
      email: 'john@example.com',
      avatar: 'https://avatars.dicebear.com/v2/gridy/John-Doe.svg'
    })
  },
  mounted () {
    // mounted body
  }
})
</script>
