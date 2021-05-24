<template>
  <v-main>
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
                  <!-- <v-tooltip v-on="on" bottom>
                    <template v-slot:activator="{ on, tooltip }"> -->

                  <v-icon
                    color="teal accent-3"
                    v-bind="{ dialog }"
                    v-on="on"
                    class="mr-2"
                    >fas fa-user-plus</v-icon
                  >

                  <!-- </template>
                    <span>Pasien Baru</span>
                  </v-tooltip> -->
                </template>
                <v-card>
                  <v-toolbar color="teal accent-3">
                    <v-icon dark @click="dialog = false">mdi-close</v-icon>
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
</template>
<script>
import FormPendaftaran from "../components/form/Pendaftaran";
import FormSignUp from "../components/form/SignUp";
import TablePoli from "../components/table/Poli";
export default {
  components: {
    FormPendaftaran,
    TablePoli,
    FormSignUp,
  },
  data: () => ({
    dialog: false,
  }),
};
</script>