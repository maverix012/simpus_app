<template>
  <v-main>
    <v-system-bar app> </v-system-bar>
    <v-navigation-drawer v-model="drawer" app>
      <v-sheet color="grey lighten-4" class="pa-4">
        <v-avatar class="mb-4" color="grey darken-1" size="64"></v-avatar>

        <div>john@vuetifyjs.com</div>
      </v-sheet>

      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="data in menus"
          :key="data.id"
          @click="selected = data.component"
        >
          <v-list-item-icon>
            <v-icon>{{ data.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ data.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <main>
      <component v-bind="menus" :is="selected" />
    </main>
  </v-main>
</template>

<script>
import Pelayanan from "./subpages/Dashboard/Pelayanan";

export default {
  components: {
    Pelayanan,
  },
  data: () => ({
    cards: ["Today", "Yesterday"],
    drawer: null,
    selected: "Pelayanan",
    menus: [
      {
        icon: "fas fa-ticket-alt",
        text: "Antrian",
        component: () => import("./subpages/Dashboard/Pelayanan"),
      },
      {
        icon: "fas fa-file-medical",
        text: "Rekam Medis",
        component: () => import("./subpages/RekamMedis"),
      },
      {
        icon: "fas fa-id-card",
        text: "Profil",
        component: () => import("./subpages/Dashboard/Pelayanan"),
      },
    ],
  }),
};
</script>