export default {
  addPet: ({ commit }, payload) => { // {commit} is from vuex, payload is an object that contains species & pet
    commit('appendPet', payload)
  }
}
