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

      <v-toolbar-title>Master Data</v-toolbar-title>
    </v-app-bar>

    <component v-bind="menus" :is="selected"
  /></v-main>
</template>
<script>
import Tarif from "./subpages/MasterData/Tarif.vue";
export default {
  components: {
    Tarif,
  },
  data: () => ({
    drawer: null,
    selected: "Tarif",
    menus: [
      {
        icon: "fas fa-dollar-sign",
        text: "Tarif",
        component: () => import("./subpages/MasterData/Tarif.vue"),
      },
      {
        icon: "fas fa-bed",
        text: "Bangsal",
        component: () => import("./subpages/MasterData/Tarif.vue"),
      },
      {
        icon: "fas fa-briefcase-medical",
        text: "Poli",
        component: () => import("./subpages/MasterData/Tarif.vue"),
      },
    ],
  }),
};
</script>