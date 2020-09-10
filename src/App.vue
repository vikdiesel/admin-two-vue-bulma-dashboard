<template>
  <div id="app">
    <nav-bar/>
    <aside-menu :menu="menu" />
    <router-view/>
    <footer-bar/>
  </div>
</template>

<style lang="scss">

</style>
<script>
import NavBar from '@/components/NavBar'
import AsideMenu from '@/components/AsideMenu'
import FooterBar from '@/components/FooterBar'

export default {
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
          icon: 'credit-card'
        },
        {
          href: 'https://justboil.me/bulma-admin-template/two',
          label: 'About',
          icon: 'help-circle'
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
}
</script>
