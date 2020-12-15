<!-- src/components/UserDates.vue -->
<template>
    <div id="user-form">
      <h2>Add a special occasion</h2>
      <small class="form-help">* Required field</small>
      <form>
        <label for="name">*Name of occasion</label>
        <input data-test="name" type='text' id="name" v-model="userHoliday.name" @blur="validate()" required>
        <small class="form-help">Min: 3, Max: 50</small>
        <error-field v-if="errors && 'name' in errors" :errors="errors.name"></error-field>
        
        <label for="date">*Date of occasion</label>
        <input data-test="date" type='date' id="date" v-model="userHoliday.date" required>

        <label for="type">*Type of occasion</label>
        <select data-test="type" id="type" v-model="userHoliday.type">
          <option value="Birthday" selected>Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Religious">Religious</option>
        </select>
        <button data-test="holiday-button" @click.prevent="addUserDay">Add a Day</button>
      </form>

      <transition name="fade">
            <div
                class="alert"
                v-if="showConfirmationMessage"
            >
                Your product
                <em>{{ addedName }}</em> was added!
            </div>
        </transition>
    </div>
</template>

<script>

import { axios } from '@/app.js';
import ErrorField from '@/components/ErrorField.vue';
import Validator from 'validatorjs';

export default {
    name: 'user-dates',
    components: {
      'error-field': ErrorField,
    },
    props: [''],
    data: function () {
        return {
          errors: null,
          userHoliday: {
            name: '',
            date: '',
            type: '',
            religious: false
          },
          showConfirmationMessage: false,
        };
    },
    methods: {
      addUserDay() {
        axios.post('/holidays', this.userHoliday).then((response) => {
          if (response.data.errors) {
            this.errors = response.data.errors;
          } else {
            console.log(response.data)
            this.$store.commit('addHoliday', this.userHoliday)

            this.showConfirmationMessage = true;
            this.addedName = this.userHoliday.name;

            setTimeout(
              () => (this.showConfirmationMessage = false),
              3000
            );

            this.userHoliday = {
              name: '',
              date: '',
              type: ''
            }
          }
        },
        )},

      // Additional form validation with validatorjs  
      validate() {
        let validator = new Validator(this.userHoliday, {
          name: 'required|between:3,50',
        });

        if (validator.fails()) {
          this.errors = validator.errors.all();
        } else {
          this.errors = null;
        }

        return validator.passes();
      },
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