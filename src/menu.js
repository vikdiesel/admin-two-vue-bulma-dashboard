export default [
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
