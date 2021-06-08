<template>
  <v-form ref="form" @submit.prevent="store()" lazy-validation>
    <v-card-text>
      <v-text-field
        v-model="input.kd_pegawai"
        :rules="rules.kode"
        prepend-icon="fas fa-id-card-alt"
        label="Kode"
        required
      />
      <v-text-field
        v-model="input.nama"
        :rules="rules.nama"
        prepend-icon="fas fa-user"
        label="Nama Lengkap"
        required
      />
      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="input.dob"
            label="Tanggal Lahir"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          ref="picker"
          v-model="input.dob"
          :max="new Date().toISOString().substr(0, 10)"
          min="1950-01-01"
          @change="save"
        ></v-date-picker>
      </v-menu>
      <v-text-field
        v-model="input.pob"
        prepend-icon="fas fa-map-marker-alt"
        label="Tempat Lahir"
        required
      />
      <v-select
        v-model="input.jk"
        :items="dataSelect.jenis_kelamin"
        prepend-icon="fas fa-venus-mars"
        label="Jenis Kelamin"
        required
      />
      <v-select
        v-model="input.gol_darah"
        :items="dataSelect.gol_darah"
        prepend-icon="fas fa-tint"
        label="Golongan Darah"
        required
      />
      <v-select
        v-model="input.agama"
        :items="dataSelect.agama"
        prepend-icon="fas fa-book"
        label="Agama"
        required
      />
      <v-text-field
        v-model="input.no_telp_dokter"
        prepend-icon="fas fa-phone-alt"
        label="Telepon"
        required
      />
      <v-text-field
        v-model="input.status_nikah"
        prepend-icon="fas fa-user-friends"
        label="Status Nikah"
        required
      />
      <v-text-field
        v-model="input.jabatan"
        prepend-icon="fas fa-user-friends"
        label="Jabatan"
        required
      />

      <!-- <v-select
        v-model="input.no_telp_dokter"
        prepend-icon="fas fa-briefcase-medical"
        :items="dataSelect.poli"
        label="Poli"
        required
      /> -->
      <v-select
        v-model="input.status"
        :items="dataSelect.status"
        prepend-icon="fas fa-user-slash"
        label="Status"
        required
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
    </v-card-text>
    <v-snackbar v-model="notification.snackbar" :timeout="notification.timeout">
      {{ notification.massage }}
    </v-snackbar>
  </v-form>
</template>
<script>
export default {
  data: () => ({
    valid: true,
    date: null,
    menu: false,
    input: {
      kd_pegawai: "",
      nama: "",
    },
    rules: {
      kode: [
        (v) => !!v || "Kode is required",
        (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
      ],
      nama: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
      ],
      email: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
    },
    dataSelect: {
      jenis_kelamin: ["L", "P"],
      gol_darah: ["A", "B", "AB", "O"],
      status: ["aktif", "non-aktif"],
      poli: ["Umum", "Gigi", "KIA"],
      agama: [
        "Islam",
        "Kristen",
        "Protestan",
        "Hindu",
        "Budha",
        "Konghucu",
        "Kepercayaan",
      ],
    },
    notification: {
      snackbar: false,
      timeout: 5000,
      massage: null,
    },
  }),

  watch: {
    menu(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = "YEAR"));
    },
  },

  methods: {
    store() {
      if (this.$refs.form.validate() == true) {
        this.$store.dispatch("store", {
          select: "pegawai",
          input: { ...this.input },
        });
        this.notification.snackbar = true;
        this.notification.massage = "Data diri anda telah berhasil ditambahkan";
        this.$refs.form.reset();
      } else {
        this.notification.snackbar = true;
        this.notification.massage =
          "Data harus diisi dengan benar dan data tidak boleh kosong";
      }
    },
    save(date) {
      this.$refs.menu.save(date);
    },
  },
};
</script>