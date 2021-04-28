<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-card-text>
      <v-text-field
        v-model="name"
        prepend-icon="fas fa-id-card"
        label="NIK"
        required
      />
      <v-text-field
        v-model="name"
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
        @click="validate"
      >
        Daftar
      </v-btn>
      <br />
      <v-btn block rounded color="withe" class="mr-4" @click="reset"
        ><v-icon>fas fa-sync</v-icon>
      </v-btn>
    </v-card-text>
  </v-form>
</template>
<script>
export default {
  data: () => ({
    name: "",
    valid: true,
    date: null,
    menu: false,
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
  }),

  watch: {
    menu(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = "YEAR"));
    },
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    save(date) {
      this.$refs.menu.save(date);
    },
  },
};
</script>