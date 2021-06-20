<template>
  <v-form ref="form" @submit.prevent="store()" lazy-validation>
    <v-card-text>
      <v-layout class="fill-height">
        <v-flex xs6>
          <v-text-field
            v-model="input.nik"
            prepend-icon="fas fa-id-card"
            label="NIK"
            required
          />
          <v-text-field
            v-model="input.kk"
            prepend-icon="fas fa-id-card"
            label="No KK"
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
        </v-flex>
        <v-flex xs6>
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
            v-model="input.pekerjaan"
            label="Pekerjaan"
            prepend-icon="work"
            required
          />

          <v-text-field
            v-model="input.no_telp"
            label="Telepon"
            prepend-icon="fas fa-phone-alt"
            required
          />

          <v-text-field
            v-model="input.email"
            :rules="rules.email"
            label="E-mail"
            prepend-icon="email"
            required
          />
        </v-flex>
      </v-layout>
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
    dataSelect: {
      jenis_kelamin: ["L", "P"],
      gol_darah: ["A", "B", "AB", "O"],
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
    rules: {
      nama: [(v) => !!v || "Nama Tidak Boleh Kosong"],
      email: [
        (v) => !!v || "E-mail tidak boleh kosong",
        (v) => /.+@.+\..+/.test(v) || "E-mail harus benar",
      ],
    },
    input: {
      nik: null,
      kk: null,
      nama: "",
      dob: null,
      pob: "",
      gol_darah: "",
      pekerjaan: "",
      telepon: "",
      email: "",
      entryData: "",
      alamat: {
        jln: "",
        rt: null,
        rw: null,
        kel_des: "",
        kecamatan: "",
        kabupaten: "",
        provinsi: "",
      },
      pendidikan: {
        sd: "",
        smp: "",
        sma: "",
        diploma: "",
        sarjana: "",
      },
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
  methods: {
    store() {
      if (this.$refs.form.validate() == true) {
        this.$store.dispatch("store", {
          select: "pasien",
          input: { ...this.input },
        });
        this.notification.snackbar = true;
        this.notification.massage =
          "Data diri anda telah berhasil ditambahkan silahkan cek email anda";
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