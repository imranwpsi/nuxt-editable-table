import api from './api'

export const state = () => ({
  users: []
})

export const getters = {
  getUser: (state) => state.users
}
export const mutations = {
  setUser: (state, payload) => state.users = payload
}

export const actions = {
  async allUser({commit}) {
    let user  = await api('get', `user`);
    commit('setUser', user.data.data);
  }

}
