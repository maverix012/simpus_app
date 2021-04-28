<template>
  <v-main>
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item
          v-for="(item, i) in menus"
          :key="i"
          @click="selected = item.component"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Pelayanan</v-toolbar-title>
    </v-app-bar>

    <component v-bind="menus" :is="selected" />
  </v-main>
</template>
<script>
import Pelayanan from "./subpages/Dashboard/Pelayanan";
export default {
  components: {
    Pelayanan,
  },
  data: () => ({
    drawer: null,
    selected: "Pelayanan",
    menus: [
      {
        icon: "fas fa-bed",
        text: "Rawat Inap",
        component: () => import("./subpages/Dashboard/Pelayanan"),
      },
      {
        icon: "fas fa-stethoscope",
        text: "Poli Umum",
        component: () => import("./subpages/Dashboard/Pelayanan"),
      },
      {
        icon: "fas fa-tooth",
        text: "Poli Gigi",
        component: () => import("./subpages/Dashboard/Pelayanan"),
      },
      {
        icon: "pregnant_woman",
        text: "Poli KIA",
        component: () => import("./subpages/Dashboard/Pelayanan"),
      },
      {
        icon: "fas fa-baby",
        text: "Poli MTBS",
        component: () => import("./subpages/Dashboard/Pelayanan"),
      },
      {
        icon: "wc",
        text: "Poli Konsultasi",
        component: () => import("./subpages/Dashboard/Pelayanan"),
      },
      {
        icon: "biotech",
        text: "Laboratorium",
        component: () => import("./subpages/Dashboard/Pelayanan"),
      },
      {
        icon: "fas fa-pills",
        text: "Obat",
        component: () => import("./subpages/Dashboard/Pelayanan"),
      },
    ],
  }),
};
</script>s