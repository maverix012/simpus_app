export const SET_PASIEN = (state, pasien) => {
    state.pasien = pasien
}

export const ADD_PASIEN = (state, pasien) => {
    state.pasien.push(pasien)
}

export const UPDATE_PASIEN = (state, pasien) => {
    state.pasien.forEach(x => {
        if (x.id == pasien.id) {
            x = pasien;
        }
    })
}

export const REMOVE_PASIEN = (state, pasien) => {
    state.pasien = state.pasien.filter(x => {
        return x.id != pasien.id
    })
}

