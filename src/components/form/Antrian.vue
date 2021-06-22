<template>
  <v-form ref="form" @submit.prevent="store()" lazy-validation>
    <v-select
      :items="Poli"
      :rules="rules.poli"
      label="PILIH POLI"
      outlined
      v-model="input.poli"
    ></v-select>
    <v-select
      :items="dokter"
      :rules="rules.dokter"
      label="PILIH DOKTER"
      item-text="nama"
      item-value="nama"
      outlined
      v-model="input.dokter"
    ></v-select>
    <v-select
      :items="Layanan"
      :rules="rules.layanan"
      label="PILIH LAYANAN"
      outlined
      v-model="input.layanan"
    ></v-select>
    <v-btn block rounded color="teal accent-3" class="mr-4" dark type="submit">
      Ambil Antrian
    </v-btn>
    <br />
    <v-btn
      block
      rounded
      outlined
      color="teal accent-3"
      class="mr-4"
      dark
      type="submit"
    >
      cetak
    </v-btn>
    <v-snackbar v-model="notification.snackbar" :timeout="notification.timeout">
      {{ notification.massage }}
    </v-snackbar>
  </v-form>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    Poli: [{ text: "Umum" }, { text: "Gigi" }, { text: "Kia" }],
    Layanan: [{ text: "BPJS" }, { text: "UMUM" }],
    rules: {
      dokter: [(v) => !!v || "Dokter Tidak Boleh Kosong"],
      poli: [(v) => !!v || "Poli Tidak Boleh Kosong"],
      layanan: [(v) => !!v || "Layanan Tidak Boleh Kosong"],
    },
    notification: {
      snackbar: false,
      timeout: 5000,
      massage: null,
    },
    input: {
      pasien: "",
      dokter: "",
      poli: "",
      layanan: "",
    },
  }),

  computed: {
    ...mapGetters(["dokter", "poli"]),
  },

  methods: {
    store() {
      if (this.$refs.form.validate() == true) {
        this.$store.dispatch("store", {
          select: "antrian",
          input: { ...this.input },
        });
        this.notification.snackbar = true;
        this.notification.massage = "No antrian anda telah ditambahkan";
        this.$refs.form.reset();
      } else {
        this.notification.snackbar = true;
        this.notification.massage = "Maaf data tidak boleh kosong";
      }
    },
  },
};
</script>