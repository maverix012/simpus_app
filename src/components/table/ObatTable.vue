<template>
  <v-data-table
    :headers="headers"
    :items="obat"
    sort-by="nama"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Obat</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" persistent max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
              Tambah Obat
            </v-btn>
          </template>
          <v-card>
            <v-toolbar color="teal accent-3">
              <v-app-bar-nav-icon>
                <v-btn fab small dark color="teal darken-2">
                  <v-icon @click="dialog = false">mdi-close</v-icon>
                </v-btn>
              </v-app-bar-nav-icon>
              <v-toolbar-title class="headline white--text"
                >Obat</v-toolbar-title
              >
            </v-toolbar>
            <v-card-text>
              <form-obat />
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)">
        fas fa-clipboard
      </v-icon>
      <v-icon small class="mr-2" @click="editItem(item)"> fas fa-edit </v-icon>
    </template>
  </v-data-table>
</template>
<script>
import FormObat from "../form/Obat";
import { mapGetters } from "vuex";
export default {
  components: {
    FormObat,
  },
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "Nama",
        align: "start",
        value: "nama",
        sortable: false,
      },
      { text: "Kategori", value: "kategori", sortable: false },
      { text: "Jenis", value: "jenis", sortable: false },

      { text: "Actions", value: "actions", sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {},
    defaultItem: {},
  }),

  computed: {
    ...mapGetters(["obat"]),
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
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
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
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
      this.dialogDelete = false;
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