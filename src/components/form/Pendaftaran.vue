<template>
  <v-form ref="form" @submit.prevent="store" lazy-validation>
    <v-card-text>
      <v-autocomplete
        v-model="input.pasien"
        prepend-icon="fas fa-id-card"
        label="Pasien"
        required
        return-object
        :items="pasien"
        item-text="nik"
        item-value="nik"
      />
      <v-select
        v-model="input.poli"
        prepend-icon="fas fa-briefcase-medical"
        :rules="rules.poli"
        label="Poliklinik"
        required
        :items="dataSelect.Poli"
      />
      <v-select
        v-model="input.dokter"
        prepend-icon="fas fa-user-md"
        label="Dokter"
        required
        :items="dokter"
        item-text="nama"
        item-value="nama"
      />
      <v-select
        v-model="input.layanan"
        prepend-icon="fas fa-credit-card"
        :rules="rules.layanan"
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
import { mapGetters } from "vuex";
export default {
  data: () => ({
    input: {
      pasien: "",
      poli: "",
      dokter: "",
      layanan: "",
    },
    dataSelect: {
      Poli: [{ text: "Umum" }, { text: "Gigi" }, { text: "KIA" }],
      Dokter: [{}],
      Layanan: [{ text: "Umum" }, { text: "BPJS" }],
    },
    rules: {
      no_rm: [(v) => !!v || "No RM Tidak Boleh Kosong"],
      poli: [(v) => !!v || "Poli Tidak Boleh Kosong"],
      dokter: [(v) => !!v || "Dokter Tidak Boleh Kosong"],
      layanan: [(v) => !!v || "Layanan Tidak Boleh Kosong"],
    },
    notification: {
      snackbar: false,
      timeout: 5000,
      massage: null,
    },
    valid: true,
    date: null,
    menu: false,
  }),

  watch: {
    menu(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = "YEAR"));
    },
  },

  computed: {
    ...mapGetters(["pasien", "dokter"]),
  },

  methods: {
    async store() {
      if (this.$refs.form.validate() == true) {
        this.$store.dispatch("store", {
          select: "antrian",
          input: { ...this.input },
        });
        this.notification.snackbar = true;
        this.notification.massage =
          "Anda telah berhasil mendaftar ke Poli" +
          " " +
          this.input.poli +
          " " +
          "dengan layanan" +
          " " +
          this.input.layanan;
        this.$refs.form.reset();
      } else {
        this.notification.snackbar = true;
        this.notification.massage =
          "Data harus diisi dengan benar / data tidak boleh kosong";
      }
    },
    save(date) {
      this.$refs.menu.save(date);
    },
  },
};
</script>