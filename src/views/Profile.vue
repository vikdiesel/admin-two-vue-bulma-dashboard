<template>
  <section class="section">
    <title-bar>
      Profile
      <router-link to="/" class="button is-primary" slot="button">
        Dashboard
      </router-link>
    </title-bar>
    <card-component title="Profile" icon="account">
      @todo
      Page is coming soon...
    </card-component>
  </section>
</template>

<script>
import CardComponent from '@/components/CardComponent'
import TitleBar from '@/components/TitleBar'
export default {
  name: 'Profile',
  components: { TitleBar, CardComponent }
}
</script>

<style scoped>

</style>
