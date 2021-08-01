<template>
  <div class="media">
    <video muted loop playsinline @loadedmetadata="startDetection"></video>
    <canvas />
  </div>
</template>
<script>
import * as faceapi from "face-api.js";
export default {
  data: () => ({
    videoEl: null,
    canvasEl: null,
    timeout: 0,
  }),
  mounted() {
    this.init();
    this.startVideo();
  },
  methods: {
    async init() {
      await faceapi.nets.tinyFaceDetector.loadFromUri("/models");
      this.videoEl = document.querySelector("video");
      this.canvasEl = document.querySelector("canvas");
    },
    startVideo() {
      navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
        this.videoEl.srcObject = stream;
        this.videoEl.play();
      });
    },
    async startDetection() {
      const result = await faceapi.detectAllFaces(
        this.videoEl,
        new faceapi.TinyFaceDetectorOptions({
          minFaceSize: 20, // 0.1 ~ 0.9
          scaleFactor: 0.709, // 0.1 ~ 0.9
        })
      );
      if (result && !this.videoEl.paused) {
        const dims = faceapi.matchDimensions(this.canvasEl, this.videoEl, true);
        const resizeResults = faceapi.resizeResults(result, dims);
        faceapi.draw.drawDetections(this.canvasEl, resizeResults);
      } else {
        this.canvasEl
          .getContext("2d")
          .clearRect(0, 0, this.canvasEl.width, this.canvasEl.height);
      }
      this.timeout = setTimeout(() => this.startDetection());
    },
  },
};
</script>
<style scoped>
video {
  -webkit-transform: scaleX(-1);
  -moz-transform: scaleX(-1);
  -o-transform: scaleX(-1);
  transform: scaleX(-1);
}
.media {
  position: relative;
}
.media canvas {
  -webkit-transform: scaleX(-1);
  -moz-transform: scaleX(-1);
  -o-transform: scaleX(-1);
  transform: scaleX(-1);

  position: absolute;
  top: 0;
  left: 0;
}
</style>
