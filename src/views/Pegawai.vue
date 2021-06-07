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
import Staff from "./subpages/Pegawai/Staff";
export default {
  components: {
    Staff,
  },
  data: () => ({
    drawer: null,
    selected: "Staff",
    menus: [
      {
        icon: "fas fa-user-alt",
        text: "Staff",
        component: () => import("./subpages/Pegawai/Staff"),
      },
      {
        icon: "fas fa-user-nurse",
        text: "Perawat",
        component: () => import("./subpages/Pegawai/Perawat"),
      },
      {
        icon: "fas fa-user-md",
        text: "Dokter",
        component: () => import("./subpages/Pegawai/Dokter"),
      },
    ],
  }),
};
</script>s