<template>
  <div id="account-page">
        <div v-if="user">
            <h2>Hi, {{ user.name }}!</h2>

            <div id="holidays">
                <strong>Your Holidays</strong>
                <p v-if="holidays && holidays.length == 0">
                    No holidays yet.
                </p>
                <li v-for="(holiday, key) in holidays" v-bind:key="key">
                    {{ holiday.name }} , {{ holiday.date }}
                </li>
            </div>

            <button @click="logout">Logout</button>
        </div>

        <div v-else id="loginForm">
            <h2>Login</h2>
            <small
                >(Form is prefilled for demonstration purposes; remove in final
                application)</small
            >
            <div>
                <label>Email: <input type="text" v-model="data.email" /></label>
            </div>
            <div>
                <label
                    >Password: <input type="password" v-model="data.password"
                /></label>
            </div>

            <button @click="login">Login</button>

            <ul v-if="errors">
                <li class="error" v-for="(error, index) in errors" :key="index">
                    {{ error }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

import { axios } from '@/app.js';

export default{
  data(){
    return{
            // Form is prefilled for demonstration purposes; remove in final application
            data: {
                email: 'jill@harvard.edu',
                password: 'asdfasdf',
            },
            errors: null,
            userHolidays: null,
        };
  },
  computed: {
        user() {
            return this.$store.state.user;
        },
        holidays() {
            return this.$store.state.holidays;
        },
    },
  methods: {
        login() {
            axios.post('login', this.data).then((response) => {
                if (response.data.authenticated) {
                    this.$store.commit('setUser', response.data.user);
                } else {
                    this.errors = response.data.errors;
                }
            });
        },
        logout() {
            axios.post('logout').then((response) => {
                if (response.data.success) {
                    this.$store.commit('setUser', null);
                }
            });
        },
    },
    watch: {
        user() {
            if (this.user) {
                this.holidays = [];

                axios
                    .get('holiday/query', {
                        params: { user_id: this.user.id },
                    })
                    .then((response) => {
                        this.holidays = response.data.results.map(
                            (holiday) => {
                                return this.$store.getters.getHolidayById(
                                    holiday.holiday_id
                                );
                            }
                        );
                    });
            }
        },
    }
}
</script>

<style>
 
</style>
