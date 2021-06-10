<template>
  <v-container>
    <v-card>
      <pegawai-table />
    </v-card>
  </v-container>
</template>
<script>
import PegawaiTable from "../../../components/table/PegawaiTable";
export default {
  components: {
    PegawaiTable,
  },
  data: () => ({}),
};
</script>