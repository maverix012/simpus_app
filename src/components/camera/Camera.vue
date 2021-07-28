<template>
  <v-main>
    <video autoplay v-show="!isPhotoTaken" />
    <canvas v-show="isPhotoTaken" />
    <v-container class="d-flex justify-center mb-6">
      <v-btn
        fab
        v-show="!isPhotoTaken"
        @click="this.takePicture"
        class="snap"
        color="blue"
        ><v-icon dark> mdi-camera </v-icon></v-btn
      >
      <v-btn
        fab
        v-show="isPhotoTaken"
        @click="this.takePicture"
        class="snap"
        color="blue"
        ><v-icon dark> mdi-close </v-icon></v-btn
      >
    </v-container>
  </v-main>
</template>
<script>
export default {
  data: () => ({
    isPhotoTaken: false,
  }),
  mounted() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      let constraint = {
        video: {
          width: {
            min: 640,
            ideal: 1280,
            max: 1920,
          },
          height: {
            min: 360,
            ideal: 720,
            max: 1080,
          },
        },
      };
      navigator.mediaDevices.getUserMedia(constraint).then((stream) => {
        const video = document.querySelector("video");
        video.srcObject = stream;
        video.play();
      });
    }
  },
  methods: {
    takePicture() {
      this.isPhotoTaken = !this.isPhotoTaken;
      let ratio = window.innerHeight < window.innerWidth ? 4 / 3 : 3 / 4;
      const picture = document.querySelector("canvas");
      picture.width = window.innerWidth < 640 ? window.innerWidth : 640;
      picture.height = window.innerHeight / ratio;
      const ctx = picture.getContext("2d");
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(
        document.querySelector("video"),
        0,
        0,
        picture.width,
        picture.height
      );
    },
  },
};
</script>
<style scoped>
video {
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}
canvas {
  /* position: absolute; */
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}
</style>
