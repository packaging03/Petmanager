export default {
  TotalAnimalsCount: (state) => {
    return state.cats.length + state.dogs.length
  },
  DogsCount: (state) => {
    return state.dogs.length
  },
  CatsCount: (state) => {
    return state.cats.length
  },
  getMaleCats: (state) => {
    // this will return cat object
    return state.cats.filter((cat) => {
      return cat.sex === 'Male'
    })
  }
}
