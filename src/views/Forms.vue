<template>
  <section class="section">
    <title-bar>
      Forms
      <router-link
        slot="button"
        to="/"
        class="button is-primary"
      >
        Dashboard
      </router-link>
    </title-bar>

    <card-component
      title="Forms"
      icon="ballot"
    >
      <form @submit.prevent="submit">
        <b-field
          label="From"
          horizontal
        >
          <b-field>
            <b-input
              v-model="form.name"
              icon="account"
              placeholder="Name"
              name="name"
              required
            />
          </b-field>
          <b-field>
            <b-input
              v-model="form.email"
              icon="email"
              type="email"
              placeholder="E-mail"
              name="email"
              required
            />
          </b-field>
        </b-field>
        <b-field
          message="Do not enter the leading zero"
          horizontal
        >
          <b-field>
            <p class="control">
              <a class="button is-static">
                +44
              </a>
            </p>
            <b-input
              v-model="form.phone"
              type="tel"
              name="phone"
              expanded
            />
          </b-field>
        </b-field>
        <b-field
          label="Department"
          horizontal
        >
          <b-select
            v-model="form.department"
            placeholder="Select a department"
            required
          >
            <option
              v-for="(department, index) in departments"
              :key="index"
              :value="department"
            >
              {{ department }}
            </option>
          </b-select>
        </b-field>
        <hr>
        <b-field
          label="Subject"
          message="Message subject"
          horizontal
        >
          <b-input
            v-model="form.subject"
            placeholder="e.g. Partnership proposal"
            required
          />
        </b-field>
        <b-field
          label="Question"
          message="Your question. Max 255 characters"
          horizontal
        >
          <b-input
            v-model="form.question"
            type="textarea"
            placeholder="Explain how we can help you"
            maxlength="255"
            required
          />
        </b-field>
        <hr>
        <b-field horizontal>
          <b-field grouped>
            <div class="control">
              <b-button
                native-type="submit"
                type="is-primary"
              >
                Submit
              </b-button>
            </div>
            <div class="control">
              <b-button
                type="is-primary is-outlined"
                @click="reset"
              >
                Reset
              </b-button>
            </div>
          </b-field>
        </b-field>
      </form>
    </card-component>
    <card-component
      title="Custom elements"
      icon="ballot-outline"
    >
      <b-field
        label="Checkbox"
        class="has-check"
        horizontal
      >
        <checkbox-picker
          v-model="customElementsForm.checkbox"
          :options="{lorem:'Lorem', ipsum:'Ipsum', dolore:'Dolore'}"
          type="is-primary"
        />
      </b-field>
      <hr>
      <b-field
        label="Radio"
        class="has-check"
        horizontal
      >
        <radio-picker
          v-model="customElementsForm.radio"
          :options="{one:'One',two:'Two'}"
        />
      </b-field>
      <hr>
      <b-field
        label="Switch"
        horizontal
      >
        <b-switch v-model="customElementsForm.switch">
          Default
        </b-switch>
      </b-field>
      <hr>
      <b-field
        label="File"
        horizontal
      >
        <file-picker v-model="customElementsForm.file" />
      </b-field>
    </card-component>
  </section>
</template>

<script>
import mapValues from 'lodash/mapValues'
import TitleBar from '@/components/TitleBar.vue'
import CardComponent from '@/components/CardComponent.vue'
import CheckboxPicker from '@/components/CheckboxPicker.vue'
import RadioPicker from '@/components/RadioPicker.vue'
import FilePicker from '@/components/FilePicker.vue'

export default {
  name: 'Forms',
  components: { FilePicker, RadioPicker, CheckboxPicker, CardComponent, TitleBar },
  data () {
    return {
      isLoading: false,
      form: {
        name: null,
        email: null,
        phone: null,
        department: null,
        subject: null,
        question: null
      },
      customElementsForm: {
        checkbox: [],
        radio: null,
        switch: true,
        file: null
      },
      departments: [
        'Business Development',
        'Marketing',
        'Sales'
      ]
    }
  },
  methods: {
    submit () {

    },
    reset () {
      this.form = mapValues(this.form, item => {
        if (item && typeof item === 'object') {
          return []
        }
        return null
      })

      this.$buefy.snackbar.open({
        message: 'Reset successfully',
        queue: false
      })
    }
  }
}
</script>
