<template>
  <div>
    <show-holidays></show-holidays>
  </div>
</template>

<script>
import GlobalDates from '@/components/GlobalDates.vue';

export default{
  name: '',
  components: {
    'show-holidays': GlobalDates
  },
  data(){
    return{
    }
  },
  methods:{
  }
}
</script>

<style scoped>
</style>
