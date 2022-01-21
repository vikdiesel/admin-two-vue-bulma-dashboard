<template>
  <section class="section">
    <title-bar>
      Profile
      <router-link
        slot="button"
        to="/"
        class="button is-primary"
      >
        Dashboard
      </router-link>
    </title-bar>

    <tiles>
      <profile-update-form class="tile is-child" />
      <card-component
        title="Profile"
        icon="account"
        class="tile is-child"
      >
        <div class="image is-user-avatar has-max-width is-aligned-center">
          <img
            :src="userAvatar"
            :alt="userName"
          >
        </div>
        <hr>
        <b-field label="Name">
          <b-input
            :value="userName"
            custom-class="is-static"
            readonly
          />
        </b-field>
        <hr>
        <b-field label="E-mail">
          <b-input
            :value="userEmail"
            custom-class="is-static"
            readonly
          />
        </b-field>
      </card-component>
    </tiles>

    <password-update-form />
  </section>
</template>

<script>
import { mapState } from 'vuex'
import CardComponent from '@/components/CardComponent.vue'
import TitleBar from '@/components/TitleBar.vue'
import ProfileUpdateForm from '@/components/ProfileUpdateForm.vue'
import PasswordUpdateForm from '@/components/PasswordUpdateForm.vue'
import Tiles from '@/components/Tiles.vue'

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
