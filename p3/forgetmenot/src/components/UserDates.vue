<!-- src/components/UserDates.vue -->
<template>
    <div id="user-form">
      <h2>Add a special occasion</h2>
      <form>
        <label for="name">Name of occasion</label>
        <input type='text' id="name" v-model="userHoliday.name">
        
        <label for="date">Date of occasion</label>
        <input type='date' id="date" v-model="userHoliday.date">

        <label for="type">Type of occasion</label>
        <select id="type" v-model="userHoliday.type">
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Religious">Religious</option>
        </select>
        <button @click.prevent="addUserDay">Add a Day</button>
      </form>
    </div>
</template>

<script>

import { axios } from '@/app.js';


export default {
    name: 'user-dates',
    props: [''],
    data: function () {
        return {
          errors: null,
          userHoliday: {
            name: '',
            date: '',
            type: '',
            religious: false
          }
        };
    },
    methods: {
      addUserDay() {
        axios.post('/holidays', this.userHoliday).then((response) => {
          if (response.data.errors) {
          this.errors = response.data.errors;
          } else {
          this.$emit('update-holidays');
          console.log(response.data)
          }
        },
        this.$store.commit('addHoliday', this.userHoliday)
        )}
    }
};

</script>

<style>
  form > * {
    text-align: left;
    display: block;
    padding: 1rem;
  }
  form button {
    margin-top: 2rem;
  }
</style>