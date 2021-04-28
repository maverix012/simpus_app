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
  }, {
    path: '/pegawai',
    component: () => import('../views/Pegawai.vue')
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


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router