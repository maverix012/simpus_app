<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12">
        <v-card>
          <v-sheet rounded="lg" min-height="50vh" class="d-flex justify-center">
            <h1>POLI ANTRIAN</h1>
          </v-sheet>
        </v-card>
      </v-col>
      <v-col cols="12" sm="3">
        <v-card>
          <v-sheet rounded="lg" min-height="30vh" class="d-flex justify-center">
            <h3>POLI UMUM</h3>
          </v-sheet>
        </v-card>
      </v-col>
      <v-col cols="12" sm="3">
        <v-card>
          <v-sheet rounded="lg" min-height="30vh" class="d-flex justify-center">
            <h3>POLI KIA</h3>
          </v-sheet>
        </v-card>
      </v-col>
      <v-col cols="12" sm="3">
        <v-card>
          <v-sheet rounded="lg" min-height="30vh" class="d-flex justify-center">
            <h3>POLI GIGI & MULUT</h3>
          </v-sheet>
        </v-card>
      </v-col>
      <v-col cols="12" sm="3">
        <v-card>
          <v-sheet rounded="lg" min-height="30vh" class="d-flex justify-center">
            <h3>POLI MTBS</h3>
          </v-sheet>
        </v-card>
      </v-col>

      <v-col>
        <v-card>
          <v-sheet min-height="5vh" class="d-flex justify-center">
            <h1>NO ANTRIAN</h1>
          </v-sheet>
          <v-sheet min-height="5vh" class="d-flex justify-center">
            <h1>5</h1>
          </v-sheet>
          <v-card-text>
            <form-antrian />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import FormAntrian from "../../../components/form/Antrian";
export default {
  components: {
    FormAntrian,
  },
};
</script>
