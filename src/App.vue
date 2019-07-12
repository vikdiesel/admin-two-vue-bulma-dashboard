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
    },
    menuBottom () {
      return [
        [
          {
            label: 'Log out',
            icon: 'logout',
            state: 'info',
            href: 'https://admin-one.justboil.me/'
          }
        ]
      ]
    }
  }
}
</script>
