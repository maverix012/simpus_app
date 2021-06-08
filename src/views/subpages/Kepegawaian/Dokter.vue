<template>
  <v-container>
    <v-card>
      <dokter-table />
    </v-card>
  </v-container>
</template>
<script>
import DokterTable from "../../../components/table/DokterTable";
export default {
  components: {
    DokterTable,
  },
  data: () => ({}),
};
</script>