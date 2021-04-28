<template>
  <v-main>
    <v-app-bar app flat>
      <img src="../assets/PKM.png" width="55" height="60" />
      <v-toolbar-title>Puskesmas</v-toolbar-title>
      <v-spacer></v-spacer>
      <span>{{ time }}<br />{{ date }}</span>
    </v-app-bar>
    <main>
      <v-container>
        <v-row>
          <v-col cols="12" sm="4">
            <v-card>
              <v-sheet
                rounded="lg"
                min-height="50vh"
                class="d-flex justify-center"
              >
                <h1>POLI ANTRIAN</h1>
              </v-sheet>
            </v-card>
          </v-col>
          <!-- <v-col cols="12" sm="2"> </v-col> -->
          <v-col cols="12" sm="8">
            <v-card>
              <v-sheet min-height="50vh" rounded="lg">
                <video
                  ref="videoRef"
                  src=""
                  id="video-container"
                  width="100%"
                  height="100%"
                  controls
                />
              </v-sheet>
            </v-card>
          </v-col>
          <v-col cols="12" sm="3">
            <v-card>
              <v-sheet
                rounded="lg"
                min-height="30vh"
                class="d-flex justify-center"
              >
                <h3>POLI UMUM</h3>
              </v-sheet>
            </v-card>
          </v-col>
          <v-col cols="12" sm="3">
            <v-card>
              <v-sheet
                rounded="lg"
                min-height="30vh"
                class="d-flex justify-center"
              >
                <h3>POLI KIA</h3>
              </v-sheet>
            </v-card>
          </v-col>
          <v-col cols="12" sm="3">
            <v-card>
              <v-sheet
                rounded="lg"
                min-height="30vh"
                class="d-flex justify-center"
              >
                <h3>POLI GIGI & MULUT</h3>
              </v-sheet>
            </v-card>
          </v-col>
          <v-col cols="12" sm="3">
            <v-card>
              <v-sheet
                rounded="lg"
                min-height="30vh"
                class="d-flex justify-center"
              >
                <h3>POLI MTBS</h3>
              </v-sheet>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </main>
  </v-main>
</template>

<script>
export default {
  data: () => ({
    time: "",
    date: "",
    antrian_poli_umum: "",
    antrian_poli_kia: "",
    antrian_poli_gm: "",
    antrian_poli_mtbs: "",
  }),
  mounted() {
    this.$refs.videoRef.src =
      "http://iandevlin.github.io/mdn/video-player/video/tears-of-steel-battle-clip-medium.mp4";
    this.$refs.videoRef.play();
  },
  created() {
    setInterval(this.getNow, 1000);
  },
  methods: {
    getNow() {
      var options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      const today = new Date();
      this.date = today.toLocaleDateString(["ban", "id"], options);
      this.time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    },
  },
};
</script>