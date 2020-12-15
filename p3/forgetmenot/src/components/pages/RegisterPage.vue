<template>
  <div id="loginForm">
    <label for="name">Name: </label>
    <input type="text" id="name" name="name" v-model="data.name" required>

    <label for="email">Email: </label>
    <input type="email" id="email" name="email" v-model="data.email" required>

    <label for="password">Password: </label>
    <input type="password" id="password" name="password" v-model="data.pw" required>

    <button @click="addUser">Sign Up</button>
  </div>
</template>

<script>

import { axios } from '@/app.js';

export default{
  data(){
    return{
      data: {
        name: 'Sam Janvey',
        email: 'sjanvey@gmail.com',
        pw: '123456'
      },
      errors: null,
    }
  },
  methods:{
    addUser() {
      axios.post('/register', this.data).then((response) => {
          if (response.data.errors) {
            this.errors = response.data.errors;
          } else {
            console.log(response.data)
            this.$store.commit('addUser', this.data)
          }
        },
      )
    }
  }
}
</script>

<style scoped>
</style>
