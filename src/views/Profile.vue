<template>
  <section class="section">
    <title-bar>
      Profile
      <router-link to="/" class="button is-primary" slot="button">
        Dashboard
      </router-link>
    </title-bar>

    <tiles>
      <profile-update-form class="tile is-child"/>
      <card-component title="Profile" icon="account" class="tile is-child">
        <div class="image is-user-avatar has-max-width is-aligned-center">
          <img :src="userAvatar" :alt="userName"/>
        </div>
        <hr>
        <b-field label="Name">
          <b-input :value="userName" custom-class="is-static" readonly/>
        </b-field>
        <hr>
        <b-field label="E-mail">
          <b-input :value="userEmail" custom-class="is-static" readonly/>
        </b-field>
      </card-component>
    </tiles>

    <password-update-form/>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import CardComponent from '@/components/CardComponent'
import TitleBar from '@/components/TitleBar'
import ProfileUpdateForm from '@/components/ProfileUpdateForm'
import PasswordUpdateForm from '@/components/PasswordUpdateForm'
import Tiles from '@/components/Tiles'

export default {
  name: 'Profile',
  components: { Tiles, PasswordUpdateForm, ProfileUpdateForm, TitleBar, CardComponent },
  computed: {
    ...mapState([
      'userAvatar',
      'userName',
      'userEmail'
    ])
  }
}
</script>
