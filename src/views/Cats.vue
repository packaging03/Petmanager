<template>
  <div>
  <PetTable
    species="cats"
    :pets="cats"
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
      'cats',
      'fields'
    ])
  }
}
</script>
