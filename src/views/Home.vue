<template>
  <section class="section">
    <title-bar>
      Welcome, {{ userName }}!
      <a href="https://admin-two.justboil.me" class="button is-primary" slot="button">
        Switch to Premium demo
      </a>
    </title-bar>
    <tiles>
      <card-widget class="tile is-child" type="is-primary" icon="account-multiple" :number="512" label="Clients"/>
      <card-widget class="tile is-child" type="is-info" icon="cart-outline" :number="7770" prefix="$" label="Sales"/>
      <card-widget class="tile is-child" type="is-success" icon="chart-timeline-variant" :number="256" suffix="%" label="Performance"/>
    </tiles>

    <card-component title="Performance" @header-icon-click="fillChartData" icon="finance" header-icon="reload">
      <div v-if="defaultChart.chartData" class="chart-area">
        <line-chart style="height: 100%"
                    ref="bigChart"
                    chart-id="big-line-chart"
                    :chart-data="defaultChart.chartData"
                    :extra-options="defaultChart.extraOptions">
        </line-chart>
      </div>
    </card-component>

    <card-component title="Clients" class="has-table">
      <clients-table-sample :data-url="`${$router.options.base}data-sources/clients.json`" :checkable="true"/>
    </card-component>

  </section>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex'
import * as chartConfig from '@/components/Charts/chart.config'
import CardComponent from '@/components/CardComponent'
import Tiles from '@/components/Tiles'
import CardWidget from '@/components/CardWidget'
import LineChart from '@/components/Charts/LineChart'
import ClientsTableSample from '@/components/ClientsTableSample'
import TitleBar from '@/components/TitleBar'

export default {
  name: 'home',
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
