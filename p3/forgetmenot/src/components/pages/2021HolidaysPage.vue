<template>
  <div>
    <show-holidays></show-holidays>
    <div id="user-holidays">
        <h2>User Holidays</h2>
        <table>
          <tr v-for="holiday in getHolidays" :key="holiday.id">
            <td>{{ holiday.name }}</td>
            <td>{{ holiday.date }}</td>
            <button @click="removeHoliday" v-bind:key="holiday.id">Remove</button>
          </tr>
        </table>
    </div>
  </div>
</template>

<script>
import GlobalDates from '@/components/GlobalDates.vue';
import { axios } from '@/app.js';

export default{
  name: '',
  components: {
    'show-holidays': GlobalDates,
  },
  data(){
    return{
    }
  },
  methods:{
    removeHoliday(id) {
      axios.delete('/holidays/' + id);
    }
  },
  computed: {
    getHolidays() {
      return this.$store.state.holidays;
    }
  }
}
</script>

<style scoped>
</style>
