import axios from 'axios'

export const state = () => ({
  description: '',
  version: '',
  docs: []
})

export const mutations = {
  setModule(state, data) {
    Object.assign(state, data)
  }
}

export const actions = {
  fetchModule({ commit }, name) {
    return axios
      .get(`https://cdn.jsdelivr.net/npm/${name}/info.json`)
  }
}
