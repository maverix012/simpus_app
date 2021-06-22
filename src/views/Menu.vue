<template>
  <v-main>
    <v-app-bar app flat>
      <img src="../assets/PKM.png" width="55" height="60" />
      <v-toolbar-title>Puskesmas</v-toolbar-title>
    </v-app-bar>

    <v-container>
      <v-row>
        <v-col v-for="data in menu" :key="data.length" cols="4">
          <v-hover v-slot="{ hover }">
            <v-card
              class="mx-auto"
              max-width="344"
              outlined
              :elevation="hover ? 12 : 2"
              @click="route(data.link)"
            >
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
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
<script>
export default {
  data: () => ({
    menu: [
      {
        nama: "Dashboard",
        link: "dashboard",
        icon: "",
      },
      {
        nama: "Informasi",
        link: "informasi",
        icon: "",
      },
      {
        nama: "Keuangan",
        link: "keuangan",
        icon: "",
      },
      {
        nama: "Pelayanan",
        link: "pelayanan",
        icon: "",
      },
      {
        nama: "Farmasi",
        link: "farmasi",
        icon: "",
      },
      {
        nama: "Kepegawaian",
        link: "kepegawaian",
        icon: "",
      },
      {
        nama: "Program",
        link: "program",
        icon: "",
      },
      {
        nama: "Surat",
        link: "surat",
        icon: "",
      },
      {
        nama: "Perpustakaan",
        link: "perpustakaan",
        icon: "",
      },
      {
        nama: "Bangunan",
        link: "bangunan",
        icon: "",
      },
      {
        nama: "Master Data",
        link: "master_data",
        icon: "",
      },
      {
        nama: "Settings",
        link: "settings",
        icon: "",
      },
    ],
  }),
  methods: {
    route(link) {
      this.$router.push(link);
    },
  },
};
</script>