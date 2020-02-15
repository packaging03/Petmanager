<template>
  <div>
  <PetTable
    species="dogs"
    :pets="dogs"
    :fields="fields"
  />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PetTable from '@/components/PetTable.vue'

export default {
  components: {
    PetTable
  },
  data () {
    return {}
  },
  computed: {
    ...mapState([
      'dogs',
      'fields'
    ])
  }
}
</script>
