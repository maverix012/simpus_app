<template>
  <v-data-table
    :headers="headers"
    :items="antrian"
    sort-by="no_rm"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>{{ formTitle }}</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          fullscreen
          hide-overlay
          transition="dialog-bottom-transition"
          persistent
          max-width="500px"
        >
          <v-card>
            <v-toolbar color="teal accent-3">
              <v-app-bar-nav-icon>
                <v-btn fab small dark color="teal darken-2">
                  <v-icon @click="dialog = false">mdi-close</v-icon>
                </v-btn>
              </v-app-bar-nav-icon>
            </v-toolbar>
            <v-card-text>
              <component v-bind="menus" :is="selected" />
            </v-card-text>
          </v-card>
        </v-dialog>
        <!-- <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="headline"
              >Are you sure you want to delete this item?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete"
                >Cancel</v-btn
              >
              <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                >OK</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog> -->
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-menu top offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-icon small class="mr-2" v-bind="attrs" v-on="on" color="blue">
            fas fa-notes-medical
          </v-icon>
        </template>

        <v-list>
          <v-list-item
            v-for="(item, index) in menus"
            :key="index"
            @click="editItem(item)"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-icon small class="mr-2" @click="call(item)" color="red">
        fas fa-volume-up
      </v-icon>
    </template>
    <v-snackbar v-model="notification.snackbar" :timeout="notification.timeout">
      {{ notification.massage }}
    </v-snackbar>
  </v-data-table>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    selected: "",
    dialog: false,
    dialogDelete: false,
    notification: {
      snackbar: false,
      timeout: 5000,
      massage: null,
    },
    menus: [
      {
        title: "Data Rekam Medis",
        component: () => import("../../views/subpages/Pasien/RekamMedis.vue"),
      },
      {
        title: "Permintaan",
        component: () => import("../../views/subpages/Pasien/Permintaan.vue"),
      },
      {
        title: "Pemeriksaan",
        component: () => import("../../views/subpages/Pasien/Pemeriksaan.vue"),
      },
      {
        title: "Rujukan",
        component: () => import("../../views/subpages/Pasien/Rujukan.vue"),
      },
      {
        title: "Cetak Kartu",
        // component: () => import(""),
      },
      {
        title: "Surat",
        // component: () => import(""),
      },
    ],
    headers: [
      { text: "Tindakan", value: "actions", sortable: false },
      {
        text: "No. RM",
        align: "start",
        sortable: false,
        value: "pasien.no_rm",
      },
      { text: "Poli", align: "start", value: "poli" },
      { text: "NIK", align: "start", value: "pasien.nik" },
      { text: "Nama", value: "pasien.nama" },
      { text: "JK", value: "pasien.jk" },
      { text: "Gol Darah", value: "pasien.gol_darah" },
      { text: "Layanan", value: "layanan" },
      { text: "Status", value: "protein" },
    ],
    editedIndex: -1,
    editedItem: {
      // name: "",
      // calories: 0,
      // fat: 0,
      // carbs: 0,
      // protein: 0,
    },
    defaultItem: {
      // name: "",
      // calories: 0,
      // fat: 0,
      // carbs: 0,
      // protein: 0,
    },
  }),

  computed: {
    ...mapGetters(["antrian"]),
    formTitle() {
      return this.editedIndex === -1 ? "Kunjungan" : "Pemeriksaan";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  methods: {
    editItem(item) {
      this.dialog = true;
      this.selected = item.component;
    },
    // deleteItem(item) {
    //   this.editedIndex = this.antrian.indexOf(item);
    //   this.editedItem = Object.assign({}, item);
    //   this.dialogDelete = true;
    // },
    // close() {
    //   this.dialog = false;
    //   this.$nextTick(() => {
    //     this.editedItem = Object.assign({}, this.defaultItem);
    //     this.editedIndex = -1;
    //   });
    // },
    // closeDelete() {
    //   this.dialogDelete = false;
    //   this.$nextTick(() => {
    //     this.editedItem = Object.assign({}, this.defaultItem);
    //     this.editedIndex = -1;
    //   });
    // },
    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.antrian[this.editedIndex], this.editedItem);
      } else {
        this.antrian.push(this.editedItem);
      }
      this.close();
    },
    call(item) {
      this.notification.snackbar = true;
      this.notification.massage = "Panggilan Ke-" + item.lenght;
    },
  },
};
</script>