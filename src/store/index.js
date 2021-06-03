import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        pasien: [],
        antrian: [],
        pegawai: [],
        dokter: [],
        perawat: []
    },
    mutations: {
        getData(state, {
            input,
            select
        }) {
            switch (select) {
                case "pasien":
                    state.pasien = input
                    break
                case "antrian":
                    state.antrian = input
                    break
            }
        },
        addData(state, {
            input,
            select
        }) {
            switch (select) {
                case "pasien":
                    state.pasien.push(input)
                    localStorage.setItem('pasien', JSON.stringify(state.pasien))
                    break
                case "antrian":
                    state.antrian.push(input)
                    localStorage.setItem('antrian', JSON.stringify(state.antrian))
                    break
            }
        },
    },
    actions: {
        index({
            commit
        }, {
            select,
            input
        }) {
            commit('getData', {
                select: select,
                input: input
            })
        },
        store({
            commit
        }, {
            select,
            input
        }) {
            commit('addData', {
                select: select,
                input: input
            })
        }
    },
    getters: {}
})