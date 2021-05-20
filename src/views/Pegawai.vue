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

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <component v-bind="menus" :is="selected" />
  </v-main>
</template>
<script>
import Staf from "./subpages/Pegawai/Staf";
export default {
  components: {
    Staf,
  },
  data: () => ({
    drawer: null,
    selected: "Staf",
    menus: [
      {
        icon: "fas fa-user-alt",
        text: "Staf",
        component: () => import("./subpages/Pegawai/Staf"),
      },
      {
        icon: "fas fa-user-nurse",
        text: "Perawat",
        component: () => import("./subpages/Pegawai/Staf"),
      },
      {
        icon: "fas fa-user-md",
        text: "Dokter",
        component: () => import("./subpages/Pegawai/Staf"),
      },
    ],
  }),
};
</script>s