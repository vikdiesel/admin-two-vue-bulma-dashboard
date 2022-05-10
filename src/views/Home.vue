<template>
  <section class="section">
    <title-bar>
      Welcome, {{ userName }}!
      <a
        slot="button"
        href="https://admin-two.justboil.me"
        class="button is-primary"
      >
        Switch to Premium demo
      </a>
    </title-bar>
    <tiles>
      <card-widget
        class="tile is-child"
        type="is-primary"
        icon="account-multiple"
        :number="512"
        label="Clients"
      />
      <card-widget
        class="tile is-child"
        type="is-info"
        icon="cart-outline"
        :number="7770"
        prefix="$"
        label="Sales"
      />
      <card-widget
        class="tile is-child"
        type="is-success"
        icon="chart-timeline-variant"
        :number="256"
        suffix="%"
        label="Performance"
      />
    </tiles>

    <card-component
      title="Performance"
      icon="finance"
      header-icon="reload"
      @header-icon-click="fillChartData"
    >
      <div
        v-if="chartData"
        class="chart-area"
      >
        <line-chart
          :chart-data="chartData"
          :chart-options="chartOptions"
          :style="{height: '100%'}"
        />
      </div>
    </card-component>

    <card-component
      title="Clients"
      class="has-table"
    >
      <clients-table-sample
        :data-url="`data-sources/clients.json`"
      />
    </card-component>
  </section>
</template>

<script>
// @ is an alias to /src
import { defineComponent } from '@vue/composition-api'
import { mapState } from 'vuex'
import * as chartConfig from '@/components/Charts/chart.config.js'
import CardComponent from '@/components/CardComponent.vue'
import Tiles from '@/components/Tiles.vue'
import CardWidget from '@/components/CardWidget.vue'
import LineChart from '@/components/Charts/LineChart.vue'
import ClientsTableSample from '@/components/ClientsTableSample.vue'
import TitleBar from '@/components/TitleBar.vue'

export default defineComponent({
  name: 'Home',
  components: {
    TitleBar,
    ClientsTableSample,
    CardWidget,
    Tiles,
    CardComponent,
    LineChart
  },
  data () {
    return {
      chartData: null,
      chartOptions: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          y: {
            display: false
          },
          x: {
            display: true
          }
        },
        plugins: {
          legend: {
            display: false
          }
        }
      }
    }
  },
  computed: {
    ...mapState([
      'userName'
    ])
  },
  mounted () {
    this.fillChartData()

    this.$buefy.snackbar.open({
      message: 'Welcome back',
      queue: false
    })
  },
  methods: {
    fillChartData () {
      this.chartData = chartConfig.sampleChartData()
    }
  }
})
</script>
