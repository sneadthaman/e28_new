<template>
  <div>
    <user-dates></user-dates>
  </div>
</template>

<script>
import UserDates from '@/components/UserDates.vue';
import { axios } from '@/app.js';

export default{
  components: {
    'user-dates': UserDates
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
