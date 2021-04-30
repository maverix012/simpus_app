<template>
  <div>
    <v-container>
      <v-row>
        <v-col v-for="data in 4" :key="data.length" cols="3">
          <v-card class="mx-auto" max-width="344" outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title class="headline mb-1">
                  {{ data.nama }}
                </v-list-item-title>
              </v-list-item-content>

              <v-list-item-avatar
                tile
                size="80"
                color="grey"
              ></v-list-item-avatar>
            </v-list-item>
          </v-card>
        </v-col>
        <v-col v-for="data in charts" :key="data.length" cols="3">
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
  </div>
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