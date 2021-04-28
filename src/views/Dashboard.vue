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

      <v-toolbar-title>Dashboard</v-toolbar-title>
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
        icon: "fas fa-tachometer-alt",
        text: "Pelayanan",
        component: () => import("./subpages/Dashboard/Pelayanan"),
      },
      {
        icon: "fas fa-user",
        text: "Pegawai",
        component: () => import("./subpages/Dashboard/Pegawai"),
      },
      {
        icon: "fas fa-coins",
        text: "Keuangan",
        component: () => import("./subpages/Dashboard/Keuangan"),
      },
      {
        icon: "fas fa-pills",
        text: "Farmasi",
        component: () => import("./subpages/Dashboard/Farmasi"),
      },
      {
        icon: "fas fa-clipboard",
        text: "Program",
        component: () => import("./subpages/Dashboard/Farmasi"),
      },
    ],
  }),
};
</script>