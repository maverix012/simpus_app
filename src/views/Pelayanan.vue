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
              <v-btn color="teal accent-3" class="mr-4" dark>Pasien Baru</v-btn>
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
import TablePoli from "../components/table/Poli";
export default {
  components: {
    FormPendaftaran,
    TablePoli,
  },
  data: () => ({}),
};
</script>