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
            select,
            input
        }) {
            switch (select) {
                case "pasien":
                    state.pasien = JSON.parse(localStorage.getItem(input))
                    break
                case "antrian":
                    state.antrian = JSON.parse(localStorage.getItem(input))
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
        removeData(state, input) {
            state.pasien.splice(state.pasien.indexOf(input), 1)
            localStorage.setItem('pasien', JSON.stringify(state.antrian))
        }
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
    getters: {
        allPasien: state => {
            state.pasien
        },
        allAntrian: state => {
            state.antrian
        }
    }
})