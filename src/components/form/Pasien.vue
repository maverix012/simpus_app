<template>
  <v-form ref="form" @submit.prevent="store" lazy-validation>
    <v-card-text>
      <v-text-field
        v-model="data.nik"
        prepend-icon="fas fa-id-card"
        label="NIK"
        required
      />
      <v-text-field
        v-model="data.name"
        prepend-icon="fas fa-user"
        label="Nama"
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
            v-model="date"
            label="Tanggal Lahir"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          ref="picker"
          v-model="date"
          :max="new Date().toISOString().substr(0, 10)"
          min="1950-01-01"
          @change="save"
        ></v-date-picker>
      </v-menu>
      <v-text-field
        v-model="name"
        prepend-icon="fas fa-map-marker-alt"
        label="Tempat Lahir"
        required
      />
      <v-text-field
        v-model="name"
        prepend-icon="fas fa-venus-mars"
        label="Jenis Kelamin"
        required
      />
      <v-text-field
        v-model="name"
        prepend-icon="fas fa-tint"
        label="Golongan Darah"
        required
      />

      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        prepend-icon="email"
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
      name: "",
      email: "",
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