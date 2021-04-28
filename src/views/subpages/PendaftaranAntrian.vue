<template>
  <div>
    <v-container>
      <qr-scan />
    </v-container>
  </div>
</template>
<script>
import QrScan from "../../components/camera/QrScan.vue";
export default {
  components: {
    QrScan,
  },
};
</script>
