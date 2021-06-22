<template>
  <v-container>
    <v-card>
      <presensi-table />
    </v-card>
  </v-container>
</template>
<script>
import PresensiTable from "../../../components/table/PresensiTable";
export default {
  components: {
    PresensiTable,
  },
  data: () => ({}),
};
</script>