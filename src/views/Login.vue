<template>
  <v-main>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="8">
          <v-card class="elevation-12 mx-auto">
            <v-window v-model="step">
              <v-window-item :value="1">
                <v-layout class="fill-height">
                  <v-flex xs7>
                    <form-sign-in />
                  </v-flex>
                  <v-flex class="teal accent-3" d-flex xs5>
                    <v-container>
                      <div class="white--text mt-12">
                        <h1 class="text-center display-1">Salam Sehat</h1>
                        <h4 class="text-center">
                          Untuk menggunakan aplikasi puskesmas silahkan
                          daftarkan diri anda
                        </h4>
                      </div>
                      <br />
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="step++">
                          Daftar
                        </v-btn>
                      </div>
                    </v-container>
                  </v-flex>
                </v-layout>
              </v-window-item>
              <v-window-item :value="2">
                <v-layout class="fill-height">
                  <v-flex class="teal accent-3 align-center" d-flex xs6>
                    <v-layout
                      align-center
                      justify-center
                      class="white--text mt-12"
                    >
                      <v-container>
                        <h1 class="text-center display-1">Welcome</h1>
                        <h4 class="text-center">
                          Untuk dapat terhubung dengan aplikasi puskesmas
                          silahkan masuk dengan akun anda
                        </h4>
                        <br />
                        <div class="text-center">
                          <v-btn rounded outlined dark @click="step--"
                            >Masuk</v-btn
                          >
                        </div>
                      </v-container>
                    </v-layout>
                  </v-flex>

                  <v-flex xs6>
                    <form-sign-up />
                  </v-flex>
                </v-layout>
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