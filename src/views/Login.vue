<template>
  <v-main>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="8">
          <v-card class="elevation-12 mx-auto">
            <v-window v-model="step">
              <v-window-item :value="1">
                <v-row class="fill-height">
                  <v-col cols="12" md="8">
                    <form-sign-in />
                  </v-col>
                  <v-col cols="12" md="4" class="teal accent-3">
                    <div class="white--text mt-12">
                      <h1 class="text-center display-1">Salam Sehat</h1>
                      <h5 class="text-center">
                        Untuk menggunakan aplikasi puskesmas silahkan daftarkan
                        diri anda
                      </h5>
                    </div>
                    <div class="text-center">
                      <v-btn rounded outlined dark @click="step++">
                        Daftar
                      </v-btn>
                    </div>
                  </v-col>
                </v-row>
              </v-window-item>
              <v-window-item :value="2">
                <v-row class="fill-height">
                  <v-col cols="12" md="4" class="teal accent-3 align-center">
                    <div class="white--text mt-12">
                      <h1 class="text-center display-1">Welcome</h1>
                      <h5 class="text-center">
                        Untuk dapat terhubung dengan aplikasi puskesmas silahkan
                        masuk dengan akun anda
                      </h5>
                    </div>
                    <div class="text-center">
                      <v-btn rounded outlined dark @click="step--">Masuk</v-btn>
                    </div>
                  </v-col>
                  <v-col cols="12" md="8">
                    <form-sign-up />
                  </v-col>
                </v-row>
              </v-window-item>
            </v-window>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
<script>
import FormSignIn from "../components/form/SignIn";
import FormSignUp from "../components/form/SignUp";
export default {
  components: {
    FormSignIn,
    FormSignUp,
  },
  data: () => ({
    step: 1,
  }),
  props: {
    source: String,
  },
};
</script>