<template>
  <v-main v-if="login == true">
    <v-app-bar app flat>
      <v-toolbar-title>Pelayanan</v-toolbar-title>
    </v-app-bar>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-card-subtitle>
              <v-dialog v-model="dialog" persistent max-width="600px">
                <template v-slot:activator="{ on, dialog }">
                  <v-btn
                    color="teal accent-3"
                    v-bind="dialog"
                    v-on="on"
                    outlined
                    dark
                  >
                    <v-icon dark>fas fa-user-plus</v-icon>
                  </v-btn>
                </template>
                <v-card>
                  <v-toolbar color="teal accent-3">
                    <v-app-bar-nav-icon>
                      <v-btn fab small dark color="teal darken-2">
                        <v-icon @click="dialog = false">mdi-close</v-icon>
                      </v-btn>
                    </v-app-bar-nav-icon>
                    <v-toolbar-title class="headline white--text"
                      >Pasien Baru</v-toolbar-title
                    >
                  </v-toolbar>
                  <v-card-text>
                    <form-sign-up />
                  </v-card-text>
                </v-card>
              </v-dialog>
            </v-card-subtitle>
            <form-pendaftaran />
          </v-card>
        </v-col>
        <v-col>
          <table-poli />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
  <v-main v-else>
    <v-app-bar app flat>
      <v-toolbar-title>Pelayanan</v-toolbar-title>
    </v-app-bar>
    <v-container>
      <table-poli />
    </v-container>
  </v-main>
</template>
<script>
import FormPendaftaran from "../components/form/Pendaftaran";
import FormSignUp from "../components/form/SignUp";
import TablePoli from "../components/table/PoliTable";
export default {
  components: {
    FormPendaftaran,
    TablePoli,
    FormSignUp,
  },
  data: () => ({
    dialog: false,
    login: true,
  }),
};
</script>