<template>
  <v-form ref="form" @submit.prevent="store()" lazy-validation>
    <v-card-text>
      <v-text-field
        v-model="input.nama"
        :rules="rules.nama"
        prepend-icon="fas fa-user"
        label="Nama"
        required
      />
      <v-select
        v-model="input.status_pegawai"
        :rules="rules.status_pegawai"
        :items="dataSelect.status_pegawai"
        prepend-icon="fas fa-id-card-alt"
        label="Status Pegawai"
        required
      />
      <v-text-field
        v-model="input.nip"
        :rules="rules.nip"
        prepend-icon="fas fa-id-card"
        label="NIP"
        required
      />
      <v-select
        v-model="input.jabpus"
        :rules="rules.jabpus"
        :items="dataSelect.jabpus"
        prepend-icon="fas fa-id-card-alt"
        label="Jabatan Puskesmas"
        required
      />
      <v-select
        v-model="input.jabfung"
        :rules="rules.jabfung"
        :items="dataSelect.jabfung"
        prepend-icon="fas fa-id-card-alt"
        label="Jabatan Fungsional"
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
        v-model="input.no_telp"
        prepend-icon="fas fa-phone-alt"
        label="Telepon"
        required
      />
      <v-text-field
        v-model="input.email"
        :rules="rules.email"
        label="E-mail"
        prepend-icon="email"
        required
      />
      <v-select
        v-model="input.status_nikah"
        prepend-icon="fas fa-user-friends"
        :items="dataSelect.status_nikah"
        label="Status Nikah"
        required
      />
      <v-select
        v-model="input.poli"
        prepend-icon="fas fa-briefcase-medical"
        :items="dataSelect.poli"
        label="Poli"
        required
      />
      <v-text-field
        v-model="input.alumni"
        prepend-icon="fas fa-university"
        label="Alumni Universitas"
        required
      />
      <v-text-field
        v-model="input.no_sip"
        prepend-icon="fas fa-id-card"
        :rules="rules.sip"
        label="No. SIP"
        required
      />
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
      nama: "",
      status_pegawai: "",
      nip: "",
      jabpus: "",
      jabfung: "",
      dob: "",
      pob: "",
      jk: "",
      gol_darah: "",
      agama: "",
      no_telp: "",
      email: "",
      status_nikah: "",
      poli: "",
      alumni: "",
      no_sip: "",
      status: "",
    },
    rules: {
      nip: [
        (v) => !!v || "NIP tidak bolah kosong",
        (v) => Number.isInteger(Number(v)) || "Harus diisi dengan angka",
      ],
      sip: [
        (v) => !!v || "No. SIP tidak boleh Kosong",
        (v) => Number.isInteger(Number(v)) || "Harus diisi dengan angka",
      ],
      nama: [
        (v) => !!v || "Nama tidak boleh kosong",
        (v) => !Number.isInteger(Number(v)) || "harus diisi dengan huruf",
      ],
      jabpus: [
        (v) => !!v || "Jabatan Puskesmas tidak boleh kosong",
        (v) => !Number.isInteger(Number(v)) || "harus diisi dengan huruf",
      ],
      jabfung: [
        (v) => !!v || "Jabatan Fungsi tidak boleh kosong",
        (v) => !Number.isInteger(Number(v)) || "harus diisi dengan huruf",
      ],
      email: [
        (v) => !!v || "E-mail tidak kosong",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
    },
    dataSelect: {
      status_pegawai: ["PNS", "Honor"],
      status_nikah: ["Single", "Menikah"],
      jenis_kelamin: ["L", "P"],
      gol_darah: ["A", "B", "AB", "O"],
      status: ["aktif", "non-aktif"],
      poli: ["-", "Umum", "Gigi", "KIA"],
      agama: [
        "Islam",
        "Kristen",
        "Protestan",
        "Hindu",
        "Budha",
        "Konghucu",
        "Kepercayaan",
      ],
      jabpus: [
        "Kepala Puskesmas",
        "Kepala Subag TU",
        "Analis Tata Usaha",
        "Pengelola Program Dan Kegiatan",
        "Pengemudi",
        "Petugas Keamanan",
        "Administarasi Umum",
        "IT",
      ],
      jabfung: [
        "-",
        "Dokter Umum",
        "Perawat Umum",
        "Dokter Gigi",
        "Perawat Gigi",
        "Bidan",
        "Analis",
        "Nutrisionis",
        "Apoteker",
        "Asisten Apoteker",
        "Sanitarian",
        "Rekam Medis",
        "Epidemologi",
        "Analis Kesehatan",
        "Penyuluh Kesehatan",
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