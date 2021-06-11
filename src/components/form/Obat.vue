<template>
  <v-form ref="form" @submit.prevent="store()" lazy-validation>
    <v-card-text>
      <v-text-field
        v-model="input.nama"
        label="Nama Obat"
        required
        :rules="rules.nama"
      />
      <v-select
        v-model="input.jenis"
        label="Jenis"
        required
        :items="dataSelect.jenis"
        :rules="rules.jenis"
      />
      <v-select
        v-model="input.kategori"
        label="Kategori"
        required
        :items="dataSelect.kategori"
        :rules="rules.kategori"
      />

      <v-textarea v-model="input.kegunaan" label="Kegunaan" required />

      <v-btn
        block
        rounded
        color="teal accent-3"
        class="mr-4"
        dark
        type="submit"
      >
        Simpan
      </v-btn>
    </v-card-text>
    <v-snackbar v-model="notification.snackbar" :timeout="notification.timeout">
      {{ notification.massage }}
    </v-snackbar>
  </v-form>
</template>
<script>
export default {
  data: () => ({
    input: {
      nama: "",
      jenis: "",
      kategori: "",
      satuan: "",
      kegunaan: "",
    },
    rules: {
      nama: [
        (v) => !!v || "Nama tidak boleh kosong",
        (v) => !Number.isInteger(Number(v)) || "harus diisi dengan huruf",
      ],
      jenis: [
        (v) => !!v || "Jenis tidak boleh kosong",
        (v) => !Number.isInteger(Number(v)) || "harus diisi dengan huruf",
      ],
      kategori: [
        (v) => !!v || "Kategori tidak boleh kosong",
        (v) => !Number.isInteger(Number(v)) || "harus diisi dengan huruf",
      ],
      satuan: [
        (v) => !!v || "Satuan tidak boleh kosong",
        (v) => !Number.isInteger(Number(v)) || "harus diisi dengan huruf",
      ],
    },
    dataSelect: {
      jenis: [
        "Analgesik",
        "Antasida",
        "Anticemas",
        "Antiaritmia",
        "Antibiotik",
        "Antikoagulan",
        "Antikonvulsan",
        "Antidepresan",
        "Antidiare",
        "Antiemetik",
        "Antijamur",
        "Antihistamin",
        "Antihipertensi",
        "Anti-inflamasi",
        "Antineoplastik",
        "Antipsikotik",
        "Antipiretik",
        "Antivirus",
        "Beta-blocker",
        "Bronkodilator",
        "Kortikosteroid",
        "Sitotoksik",
        "Dekongestan",
        "Ekspektoran",
        "Obat tidur",
      ],
      kategori: [
        "Obat Bebas Terbatas",
        "Obat Bebas",
        "Obat Keras",
        "Obat Wajib Apotek (OWA)",
        "Obat Golongan Narkotika",
        "Obat Psikotropika",
        "Obat Herbal",
      ],
    },
    notification: {
      snackbar: false,
      timeout: 5000,
      massage: null,
    },
  }),

  methods: {
    store() {
      if (this.$refs.form.validate() == true) {
        this.$store.dispatch("store", {
          select: "obat",
          input: { ...this.input },
        });
        this.notification.snackbar = true;
        this.notification.massage = "Obat telah berhasil ditambahkan";
        this.$refs.form.reset();
      } else {
        this.notification.snackbar = true;
        this.notification.massage =
          "Data harus diisi dengan benar dan data tidak boleh kosong";
      }
    },
  },
};
</script>