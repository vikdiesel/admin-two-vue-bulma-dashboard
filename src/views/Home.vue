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
        v-if="defaultChart.chartData"
        class="chart-area"
      >
        <line-chart
          ref="bigChart"
          style="height: 100%"
          chart-id="big-line-chart"
          :chart-data="defaultChart.chartData"
          :extra-options="defaultChart.extraOptions"
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
import { mapState } from 'vuex'
import * as chartConfig from '@/components/Charts/chart.config.js'
import CardComponent from '@/components/CardComponent.vue'
import Tiles from '@/components/Tiles.vue'
import CardWidget from '@/components/CardWidget.vue'
import LineChart from '@/components/Charts/LineChart.js'
import ClientsTableSample from '@/components/ClientsTableSample.vue'
import TitleBar from '@/components/TitleBar.vue'

export default {
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
      defaultChart: {
        chartData: null,
        extraOptions: chartConfig.chartOptionsMain
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
    randomChartData (n) {
      const data = []

      for (let i = 0; i < n; i++) {
        data.push(Math.round(Math.random() * 200))
      }

      return data
    },
    fillChartData () {
      this.defaultChart.chartData = {
        datasets: [
          {
            fill: false,
            borderColor: chartConfig.chartColors.default.primary,
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: chartConfig.chartColors.default.primary,
            pointBorderColor: 'rgba(255,255,255,0)',
            pointHoverBackgroundColor: chartConfig.chartColors.default.primary,
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: this.randomChartData(9)
          },
          {
            fill: false,
            borderColor: chartConfig.chartColors.default.info,
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: chartConfig.chartColors.default.info,
            pointBorderColor: 'rgba(255,255,255,0)',
            pointHoverBackgroundColor: chartConfig.chartColors.default.info,
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: this.randomChartData(9)
          },
          {
            fill: false,
            borderColor: chartConfig.chartColors.default.danger,
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: chartConfig.chartColors.default.danger,
            pointBorderColor: 'rgba(255,255,255,0)',
            pointHoverBackgroundColor: chartConfig.chartColors.default.danger,
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: this.randomChartData(9)
          }
        ],
        labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09']
      }
    }
  }
}
</script>
