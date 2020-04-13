<template>
  <section class="section">
    <title-bar>
      Tables
      <router-link to="/" class="button is-primary" slot="button">
        Dashboard
      </router-link>
    </title-bar>
    <notification class="is-primary">
      <div>
        <b-icon icon="buffer" custom-size="default"/>
        <b>Sorted and paginated table.</b>&nbsp;Based on Buefy's table.
      </div>
    </notification>

    <card-component class="has-table" title="Clients" icon="account-multiple">
      <clients-table-sample :data-url="`${$router.options.base}data-sources/clients.json`" :checkable="true"/>
    </card-component>

    <hr>

    <notification class="is-primary">
      <div>
        <b-icon icon="buffer" custom-size="default"/>
        <b>Tightly wrapped</b> &mdash; table header becomes a card header
      </div>
    </notification>

    <card-component class="has-table has-mobile-sort-spaced">
      <clients-table-sample :data-url="`${$router.options.base}data-sources/clients.json`" :checkable="true"/>
    </card-component>

    <hr>

    <notification class="is-primary">
      <div>
        <b-icon icon="buffer" custom-size="default"/>
        <b>Empty table.</b> When there's nothing to show
      </div>
    </notification>

    <card-component class="has-table">
      <clients-table-sample/>
    </card-component>
  </section>
</template>

<script>
import Notification from '@/components/Notification'
import ClientsTableSample from '@/components/ClientsTableSample'
import CardComponent from '@/components/CardComponent'
import TitleBar from '@/components/TitleBar'
export default {
  name: 'Tables',
  components: { TitleBar, CardComponent, ClientsTableSample, Notification }
}
</script>
