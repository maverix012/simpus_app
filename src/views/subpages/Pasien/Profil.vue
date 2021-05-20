<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title><h3>Identitas</h3></v-card-title>
          <v-card-text>
            <p>NIK : Galih Prasetiyo</p>
            <p>Nama : Galih Prasetiyo</p>
            <p>Tempat Lahir : Galih Prasetiyo</p>
            <p>Tanggal Lahir : Galih Prasetiyo</p>
            <p>Alamat : Galih Prasetiyo</p>
            <p>Jenis Kelamin : Galih Prasetiyo</p>
            <p>Golongan Darah : Galih Prasetiyo</p>
          </v-card-text>
          <v-card-actions>
            <v-btn block rounded color="success"
              ><v-icon v-text="edit">fas fa-edit</v-icon></v-btn
            >
          </v-card-actions>
        </v-card>
        <br />
        <v-card>
          <v-card-title><h3>Pendidikan</h3></v-card-title>
          <v-card-text>
            <p>Sekolah Dasar : Galih Prasetiyo</p>
            <p>Sekolah Menengah Pertama : Galih Prasetiyo</p>
            <p>Sekolah Menengah Atas : Galih Prasetiyo</p>
            <p>Perguruan Tinggi : Galih Prasetiyo</p>
          </v-card-text>
          <v-card-actions>
            <v-btn block rounded color="success"
              ><v-icon v-text="edit">fas fa-edit</v-icon></v-btn
            >
          </v-card-actions>
        </v-card>
        <br />
        <v-card>
          <v-card-title>
            <h3>Access</h3>
          </v-card-title>
          <v-card-text>
            <p>Username : Galih Prasetiyo</p>
            <p>Email : Galih Prasetiyo</p>
          </v-card-text>
          <v-card-actions>
            <v-btn block rounded color="success"
              ><v-icon v-text="edit">fas fa-edit</v-icon></v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    cards: ["Today", "Yesterday"],
    drawer: null,
  }),
};
</script>