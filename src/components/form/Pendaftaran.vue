<template>
  <v-form ref="form" @submit.prevent="store" lazy-validation>
    <v-card-text>
      <v-autocomplete
        v-model="data.no_rm"
        prepend-icon="fas fa-id-card"
        label="Pasien"
        required
      />
      <v-select
        v-model="data.poli"
        prepend-icon="fas fa-briefcase-medical"
        label="Poliklinik"
        required
        :items="dataSelect.Poli"
      />
      <v-select
        v-model="data.dokter"
        prepend-icon="fas fa-user-md"
        label="Dokter"
        required
        :items="dataSelect.Dokter"
      />
      <v-select
        v-model="data.layanan"
        prepend-icon="fas fa-credit-card"
        label="Layanan"
        required
        :items="dataSelect.Layanan"
      />

      <v-btn
        block
        rounded
        :disabled="!valid"
        color="teal accent-3"
        class="mr-4"
        dark
        type="submit"
      >
        Daftar
      </v-btn>
      <br />
      <!-- <v-btn block rounded color="withe" class="mr-4" @click="reset"
        ><v-icon>fas fa-sync</v-icon>
      </v-btn> -->
    </v-card-text>
    <v-snackbar v-model="notification.snackbar" :timeout="notification.timeout">
      {{ notification.massage }}
    </v-snackbar>
  </v-form>
</template>
<script>
export default {
  data: () => ({
    data: {
      no_rm: "",
      poli: "",
      dokter: "",
      layanan: "",
    },
    dataSelect: {
      Poli: [
        { text: "Poli Umum" },
        { text: "Poli Gigi" },
        { text: "Poli Kia" },
      ],
      Dokter: [{}],
      Layanan: [{ text: "UMUM" }, { text: "BPJS" }],
    },
    notification: {
      snackbar: false,
      timeout: 5000,
      massage: null,
    },
    valid: true,
    date: null,
    menu: false,

    rules: {
      email: [
        (v) => !!v || "E-mail tidak boleh kosong",
        (v) => /.+@.+\..+/.test(v) || "E-mail harus benar",
      ],
    },
    emailRules: [
      (v) => !!v || "E-mail tidak boleh kosong",
      (v) => /.+@.+\..+/.test(v) || "E-mail harus benar",
    ],
  }),

  watch: {
    menu(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = "YEAR"));
    },
  },
  methods: {
    store() {
      this.$refs.form.validate();
      this.notification.snackbar = true;
      this.notification.massage =
        "Data diri anda telah berhasil ditambahkan silahkan cek email anda";
    },
    save(date) {
      this.$refs.menu.save(date);
    },
  },
};
</script>