<template>
  <div class="home">
  <h1> 👨‍👦‍👦 Adopt a New Best Friend</h1>
    <h2>Total Number of Animals: {{ TotalAnimalsCount }}</h2>
    <h2>Total Number of Dogs: {{ DogsCount }}</h2>
    <h2>Total Number of Cats: {{ CatsCount }}</h2>
    <h2>Total Male Cats: {{ getMaleCats.length }}</h2>

    <button class="btn btn-primary" @click="togglePetForm"> Add New Pet </button>
      <b-form @submit.prevent="handleSubmit" v-if="showPetForm">
        <b-form-group id="input-group-2" label="Pet's Name:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="formData.name"
            required
            placeholder="Enter pet's name"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Species:" label-for="input-3">
          <b-form-select
            id="input-3"
            v-model="formData.species"
            :options="['cats', 'dogs']"
            required
          ></b-form-select>
        </b-form-group>

        <b-form-group id="input-group-4" label="Gender:" label-for="input-4">
          <b-form-select
            id="input-4"
            v-model="formData.sex"
            :options="['Male', 'Female']"
            required
          ></b-form-select>
        </b-form-group>

        <b-form-group id="input-group-5" label="Pet's Age:" label-for="input-5">
          <b-form-input
            id="input-5"
            type="number"
            v-model="formData.age"
            required
            placeholder="Enter pet's age"
          ></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'home',
  data () {
    return {
      showPetForm: false,
      formData: {
        name: '',
        sex: '',
        age: 0,
        species: null
      }
    }
  },
  computed: {
    ...mapGetters([
      'TotalAnimalsCount',
      'DogsCount',
      'CatsCount',
      'getMaleCats'
    ])
  },
  methods: {
    ...mapActions([
      'addPet'
    ]),
    togglePetForm () {
      this.showPetForm = !this.showPetForm
    },
    handleSubmit () {
      const name = {
        first: this.formData.name,
        last: this.formData.name
      }
      const { species, age, sex } = this.formData
      const payload = {
        species,
        pet: {
          name,
          sex,
          age
        }
      }
      this.addPet(payload)
      // reset form after submit
      this.formData = {
        name: '',
        sex: '',
        age: 0,
        species: null
      }
    }
  }
}
</script>
