<template>
  <qrcode-stream id="video" @decode="onDecode" />
</template>
<script>
import { QrcodeStream } from "vue-qrcode-reader";
export default {
  components: {
    QrcodeStream,
    // QrcodeDropZone,
    // QrcodeCapture,
  },

  methods: {
    onDecode() {
      // ...
    },
  },
};
</script>
<style scoped>
#video {
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  width: 50vh;
  height: 50vh;
}
</style>