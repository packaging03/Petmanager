<template>
    <div>
        <h2>{{ $route.params.species }} 🐾 Profile</h2>
        <h1>Full Name: {{ animal.name.first }} {{ animal.name.last }}</h1>
        <h3>Age: {{ animal.age }} years old</h3>
        <p>Sex: {{ animal.sex }}</p>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      animal: {}
    }
  },
  computed: {
    ...mapState([
      'cats',
      'dogs',
      'fields'
    ])
  },
  mounted () {
    const animal = this[this.$route.params.species][this.$route.params.id]
    this.animal = animal
  }
}
</script>
