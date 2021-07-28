<template>
  <video autoplay muted />

  <!-- <v-col cols="4">
        <transition
          enter-active-class="animated fadeInDown"
          leave-active-class="animated fadeOutDown"
        >
          <v-card v-if="show" shaped color="green">
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title class="font-weight-bold"
                  >Galih Prasetiyo, S.Kom</v-list-item-title
                >
                <v-list-item-content class="font-weight-black">
                  <h1>SIKDA</h1>
                </v-list-item-content>
                <v-list-item-subtitle class="headline font-weight-black"
                  >08.00 WIB</v-list-item-subtitle
                >
              </v-list-item-content>
              <v-list-item-avatar tile width="120" height="140">
                <img tile src="../../../public/img/foto/Galih.jpg" />
              </v-list-item-avatar>
            </v-list-item>
          </v-card>
        </transition>
      </v-col> -->
</template>

<script>
import * as faceapi from "face-api.js";
export default {
  data: () => ({
    show: false,
  }),
  mounted() {
    Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
      faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
      faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
      //   faceapi.nets.faceExpressionNet.loadFromUri("/models"),
      faceapi.nets.ssdMobilenetv1.loadFromUri("/models"),
    ]).then(this.startVideo());
  },

  methods: {
    startVideo() {
      const video = document.querySelector("video");
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices
          .getUserMedia({ audio: false, video: true })
          .then((stream) => {
            video.srcObject = stream;
            video.play();
          });

        setInterval(async () => {
          const detections = await faceapi.detectAllFaces(
            video,
            new faceapi.TinyFaceDetectorOptions()
          );
          console.log(detections);
          if (detections.length !== 0) {
            this.show = true;
          } else {
            this.show = false;
          }
        }, 500);
      }
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
