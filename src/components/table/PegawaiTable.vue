<template>
  <v-data-table
    :headers="headers"
    :items="pegawai"
    sort-by="nama"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Pegawai</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="popUp.addPegawai" persistent max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
              Tambah Pegawai
            </v-btn>
          </template>
          <v-card>
            <v-toolbar color="teal accent-3">
              <v-app-bar-nav-icon>
                <v-btn fab small dark color="teal darken-2">
                  <v-icon @click="popUp.addPegawai = false">mdi-close</v-icon>
                </v-btn>
              </v-app-bar-nav-icon>
              <v-toolbar-title class="headline white--text"
                >Pegawai</v-toolbar-title
              >
            </v-toolbar>

            <v-card-text>
              <form-pegawai />
            </v-card-text>
          </v-card>
        </v-dialog>
        <v-dialog v-model="popUp.detailPegawai" max-width="500px">
          <v-card>
            <v-card-title class="headline"></v-card-title>

            <v-card-text> </v-card-text>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon small class="mr-2" @click="detailItem(item)">
        fas fa-user
      </v-icon>
      <v-icon small class="mr-2" @click="editItem(item)"> fas fa-edit </v-icon>
    </template>
  </v-data-table>
</template>
<script>
import FormPegawai from "../form/Pegawai";
import { mapGetters } from "vuex";
export default {
  components: {
    FormPegawai,
  },
  data: () => ({
    popUp: {
      addPegawai: false,
      detailPegawai: false,
    },
    headers: [
      {
        text: "Nama",
        align: "start",
        sortable: false,
        value: "nama",
      },
      { text: "Status Pegawai", value: "status_pegawai", sortable: true },
      { text: "Jabatan Puskesmas", value: "jabpus", sortable: true },
      { text: "Poli", value: "poli", sortable: true },
      { text: "Jabatan Fungsi", value: "jabfung", sortable: true },
      { text: "Agama", value: "agama", sortable: false },
      { text: "Telepon", value: "no_telp", sortable: false },
      { text: "Status", value: "status", sortable: false },
      { text: "Actions", value: "actions", sortable: false },
    ],
    editedIndex: -1,
    editedItem: {},
    defaultItem: {},
  }),

  computed: {
    ...mapGetters(["pegawai"]),
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
      this.editedIndex = this.pegawai.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.popUp.addPegawai = true;
    },

    detailItem(item) {
      this.editedIndex = this.pegawai.indexOf(item);
      this.popUp.detailPegawai = true;
    },

    deleteItem(item) {
      this.editedIndex = this.pegawai.indexOf(item);
      this.editedItem = Object.assign({}, item);
    },

    deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      // this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>