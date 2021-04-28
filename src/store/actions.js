import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:1234/api/'

// Pasien

export const indexPasien = ({
    commit
}) => {
    axios.get('pelayanan/pendaftaran/pasien').then(response => {
        commit('SET_PASIEN', response.data)
    })
}

export const storePasien = ({
    commit
}, pasien) => {
    commit('ADD_PASIEN', pasien)
    axios.post('pelayanan/pendaftaran/pasien', pasien)
}

export const updatePasien = ({
    commit
}, pasien) => {
    commit('UPDATE_PASIEN', pasien)
    axios.put(`pelayanan/pendaftaran/pasien/${pasien.id}`, pasien)
}

export const destroyPasien = ({
    commit
}, pasien) => {
    commit('REMOVE_PASIEN', pasien)
    axios.delete(`pelayanan/pendaftaran/pasien/${pasien.id}`)
}

// Antrian

// Obat

// Pegawai

