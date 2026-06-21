export const state = () => ({
  message: 'App Default Text',
  sliders: [],
})

export const mutations = {
  setMessage(state, payload) {
    state.message = payload
  },
  setSlider(state, payload) {
    state.sliders = payload
  }
}

export const actions = {
  setMessage({commit}, payload) {
    commit('setMessage', payload)
  },
  storeSlider({commit}, payload) {
    commit('setSlider', payload)
  },
}

export const getters = {
  loadMessage(state) {
    return state.message
  },
  getSlider(state) {
    return state.sliders;
  },
}
