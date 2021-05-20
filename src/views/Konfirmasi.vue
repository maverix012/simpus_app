<template>
  <v-main>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="8">
          <v-card class="elevation-12 mx-auto">
            <v-card-text> <form-konfirmasi /> </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
<script>
import FormKonfirmasi from "../components/form/Konfirmasi";
export default {
  components: {
    FormKonfirmasi,
  },
};
</script>