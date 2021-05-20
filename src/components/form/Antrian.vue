<template>
  <form>
    <v-select :items="Poli" label="PILIH POLI" outlined></v-select>
    <v-select :items="Poli" label="PILIH DOKTER" outlined></v-select>
    <v-select :items="Layanan" label="PILIH LAYANAN" outlined></v-select>
    <v-btn block rounded color="teal accent-3" class="mr-4" dark type="submit">
      Ambil Antrian
    </v-btn>
    <br />
    <v-btn
      block
      rounded
      outlined
      color="teal accent-3"
      class="mr-4"
      dark
      type="submit"
    >
      cetak
    </v-btn>
  </form>
</template>
<script>
export default {
  data: () => ({
    Poli: [
      { text: "Poli Umum" },
      { text: "Poli Gigi" },
      { text: "Poli Kia" },
      //   { text: "Poli " },
      //   { text: "Poli" },
    ],
    Layanan: [{ text: "BPJS" }, { text: "UMUM" }],
  }),
};
</script>