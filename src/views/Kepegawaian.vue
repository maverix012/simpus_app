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

      <v-toolbar-title>Kepegawaian</v-toolbar-title>
    </v-app-bar>

    <component v-bind="menus" :is="selected" />
  </v-main>
</template>
<script>
import Pegawai from "./subpages/Kepegawaian/Pegawai";
export default {
  components: {
    Pegawai,
  },
  data: () => ({
    drawer: null,
    selected: "Pegawai",
    menus: [
      {
        icon: "fas fa-user-alt",
        text: "Pegawai",
        component: () => import("./subpages/Kepegawaian/Pegawai"),
      },
      {
        icon: "fas fa-clock",
        text: "Presensi",
        component: () => import("./subpages/Kepegawaian/Presensi"),
      },
      {
        icon: "fas fa-calendar-alt",
        text: "Cuti",
        component: () => import("./subpages/Kepegawaian/Cuti"),
      },
    ],
  }),
};
</script>s