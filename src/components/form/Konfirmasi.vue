<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-card-text>
      <v-text-field
        v-model="password"
        :rules="passwordRules"
        label="Create Password"
        :append-icon="value ? 'visibility' : 'visibility_off'"
        @click:append="() => (value = !value)"
        :type="value ? 'password' : 'text'"
        required
      />

      <v-text-field
        v-model="password"
        :rules="passwordRules"
        label="Confirm Password"
        :append-icon="value ? 'visibility' : 'visibility_off'"
        @click:append="() => (value = !value)"
        :type="value ? 'password' : 'text'"
        required
      />

      <v-btn
        block
        rounded
        :disabled="!valid"
        color="teal accent-3"
        @click="validate"
        dark
        type="submit"
      >
        Confirm
      </v-btn>
    </v-card-text>
  </v-form>
</template>
<script>
export default {
  data: () => ({
    valid: true,
    value: String,
    password: "",
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) =>
        (v && v.length <= 10) || "Password must be more than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
  }),

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
  },
};
</script>