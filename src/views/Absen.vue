<template>
  <v-main v-if="absenBool == true">
    <v-app-bar app flat
      ><img src="../assets/PKM.png" width="55" height="60" />
      <v-toolbar-title>Puskesmas</v-toolbar-title>
    </v-app-bar>
    <v-container>
      <v-row>
        <v-col>
          <v-card elevation="3">
            <v-app-bar
              ><v-toolbar-title>Scan Wajah Anda</v-toolbar-title></v-app-bar
            >
            <face-detect />
          </v-card>
        </v-col>
        <v-col>
          <v-card elevation="3">
            <v-app-bar
              ><v-toolbar-title
                >Daftar Hadir Pegawai</v-toolbar-title
              ></v-app-bar
            >
            <absen-table />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
  <v-main v-else>
    <h1>Nunggu Apa</h1>
  </v-main>
</template>
<script>
import FaceDetect from "../components/camera/FaceDetect.vue";
import AbsenTable from "../components/table/AbsenTable.vue";
export default {
  components: {
    FaceDetect,
    AbsenTable,
  },
  data: () => ({
    absenBool: true,
  }),
};
</script>