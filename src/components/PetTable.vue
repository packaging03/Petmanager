<template>
    <div>
        <h1>🐈 {{ species }} for Adoption</h1>
        <b-table striped hover :fields="fields" :items="pets">
            <template v-slot:cell(name)="data">
            <router-link :to="`/pets/${species}/${data.index}`">
              {{ data.value }}
            </router-link>
            </template>
        </b-table>
    </div>
</template>

<script>
export default {
  props: {
    species: String,
    pets: Array,
    fields: Array
  }
}
</script>
