<template>
  <transition appear appear-active-class="animated bounceIn">
    <v-content v-if="users">
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="teal accent-4" dark flat>
                <v-toolbar-title>Register</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form @submit.prevent="register">
                  <v-text-field
                    label="Username"
                    prepend-icon="person"
                    type="text"
                    v-model="registerData.Username"
                  />
                  <v-text-field
                    label="Email"
                    prepend-icon="email"
                    type="text"
                    v-model="registerData.Email"
                  />
                  <v-text-field
                    id="password"
                    label="Password"
                    prepend-icon="lock"
                    type="password"
                    v-model="registerData.Password"
                  />
                  <v-btn
                    block
                    large
                    rounded
                    color="teal accent-4"
                    class="white--text"
                    type="submit"
                  >Register</v-btn>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <v-content v-else>
      <v-layout fill-height>
        <v-flex d-flex xs6>
          <v-layout align-center justify-center class="bgLogo">
            <img src="../../public/LogoKobar.png" width="250" height="310" alt="logo_kobar" />
          </v-layout>
        </v-flex>
        <v-flex d-flex xs6>
          <v-layout align-center justify-center>
            <v-form @submit.prevent="Login">
              <h1 class="text-center teal--text text--accent-4">
                DINAS KESEHATAN
                <br />KOTAWARINGIN BARAT
              </h1>
              <br />
              <v-text-field
                outlined
                rounded
                label="User"
                name="login"
                prepend-inner-icon="person"
                type="text"
                color="lime darken-2"
                v-model="login.Email"
              />
              <v-text-field
                outlined
                rounded
                id="password"
                label="Password"
                name="password"
                prepend-inner-icon="lock"
                type="password"
                color="lime darken-2"
                v-model="login.Password"
              />
              <v-layout align-center justify-center>
                <v-btn
                  type="submit"
                  block
                  large
                  rounded
                  color="teal accent-4"
                  class="white--text"
                >Login</v-btn>
              </v-layout>
            </v-form>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-content>
  </transition>
</template>
<script>
export default {
  data: () => ({
    users: true,
    registerData: {
      Username: "",
      Email: "",
      Password: ""
    },
    login: {
      Email: "",
      Password: ""
    }
  }),

  created() {
    this.getUser();
  },

  methods: {
    Login() {
      window.axios
        .post("auth/Login", this.login)
        .then(res => {
          let accessToken = res.data.Token;
          if (accessToken) {
            localStorage.setItem("token", accessToken);
            this.$router.replace("/admin");
            // setTimeout(()=>{
            // },5000)
            // this.$router.go(1);
          }
        })
        .catch(error => {
          this.alert = true;
          this.massage = error;
        });
    },

    register() {
      window.axios.post("sign/first", this.registerData).then(res => {
        let accessToken = res.data.token;
        localStorage.setItem("token", accessToken);
        this.$router.replace("/admin");
      });
    },

    getUser() {
      window.axios
        .get("auth/countUser")
        .then(res => {
          if (res.data == 0) {
            this.users = true;
          } else {
            this.users = false;
          }
        })
        .then(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style scoped>
.bgLogo {
  background-color: #00bfa5;
  background-attachment: fixed;
  background-size: cover;
}
</style>