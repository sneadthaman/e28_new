<template>
  <div>
    <show-holidays></show-holidays>
    <div id="user-holidays" v-if="user">
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
      // Found solution at https://stackoverflow.com/questions/51069552/axios-delete-request-with-body-and-headers
      axios.delete('/holidays/' + id, { data: id }).then(
        this.$store.commit.removeHoliday(id)
      )
    }
  },
  computed: {
    getHolidays() {
      return this.$store.state.holidays;
    },
    user() {
      return this.$store.state.user;
    },
  }
}
</script>

<style scoped>
</style>
