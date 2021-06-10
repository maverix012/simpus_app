<template>
  <v-container>
    <v-row>
      <v-col v-for="data in charts" :key="data.length" cols="4">
        <v-card>
          <v-card-title primary-title> {{ data.title }} </v-card-title>
          <component
            :bind="data.component"
            :is="data.component"
            :chart-data="data.value"
          />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  // components: {
  //   LineChart,
  // },
  data: () => ({
    charts: [
      {
        title: "Test",
        value: "",
        component: () => import("../../../components/chart/LineChart"),
      },
      {
        title: "Test1",
        value: "",
        component: () => import("../../../components/chart/DoughtnutChart"),
      },
      {
        title: "Test2",
        value: "",
        component: () => import("../../../components/chart/BarChart"),
      },
      {
        title: "Test3",
        value: "",
        component: () => import("../../../components/chart/PolarChart"),
      },
    ],
  }),
  // mounted() {
  //   this.fillData();
  // },
  // methods: {
  //   fillData() {
  //     this.datacollection = {
  //       labels: [this.getRandomInt(), this.getRandomInt()],
  //       datasets: [
  //         {
  //           label: "Data One",
  //           backgroundColor: "#f87979",
  //           data: [this.getRandomInt(), this.getRandomInt()],
  //         },
  //         {
  //           label: "Data One",
  //           backgroundColor: "#f87979",
  //           data: [this.getRandomInt(), this.getRandomInt()],
  //         },
  //       ],
  //     };
  //   },
  //   getRandomInt() {
  //     return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
  //   },
  // },
};
</script>