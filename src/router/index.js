import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/menu',
    component: () => import('../views/Menu.vue'),
  },
  {
    path: '/absen',
    component: () => import('../views/Absen.vue')
  },
  {
    path: '/dashboard',
    component: () => import('../views/Dashboard.vue')
  }, {
    path: '/pelayanan',
    component: () => import('../views/Pelayanan.vue')
  }, {
    path: '/farmasi',
    component: () => import('../views/Farmasi.vue')
  }, {
    path: '/keuangan',
    component: () => import('../views/Keuangan.vue')
  }, {
    path: '/program',
    component: () => import('../views/Program.vue')
  },
  {
    path: '/surat',
    component: () => import('../views/Surat.vue')
  }, {
    path: '/perpustakaan',
    component: () => import('../views/Perpustakaan.vue')
  }, {
    path: '/kepegawaian',
    component: () => import('../views/Kepegawaian.vue')
  }, {
    path: '/settings',
    component: () => import('../views/Settings.vue')
  },
  {
    path: '/antrian',
    component: () => import('../views/Antrian.vue')
  },
  {
    path: '/pasien',
    component: () => import('../views/Pasien.vue')
  },
  {
    path: '/informasi',
    component: () => import('../views/Informasi.vue')
  },
  {
    path: '/bangunan',
    component: () => import('../views/Bangunan.vue')
  },
  {
    path: '/master_data',
    component: () => import('../views/MasterData.vue')
  },

  {
    path: '/konfirmasi/:id',
    component: () => import('../views/Konfirmasi.vue')
  },
  {
    path: '/404',
    component: () => import('../views/404.vue')
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router