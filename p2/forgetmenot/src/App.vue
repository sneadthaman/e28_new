<template>
  <div id="app">
    <nav>
      <ul>
        <li>
            <router-link
                v-for="link in links"
                v-bind:key="link"
                v-bind:to="paths[link]"
                exact
                >{{ link }}</router-link
            >
        </li>
      </ul>
    </nav>
    <img alt="ForgetMeNot Logo" src="@/assets/images/forgetmenot-logo.png" id="logo">
    <p>Never shop for gift cards at the last minute ever again!</p>
<router-view
  v-bind:holidays = "holidays"
  v-on:update-holidays = "updateHolidays()">
</router-view>
  </div>
  
</template>

<script>
import { axios } from "@/app.js";

export default {
  name: 'App',
  data() {
    return {
      holidays: [],
      /* Store links in an array to maintain order */
      links: ['home', 'holidays', 'add holiday'],

      /* Map links to the appropriate component */
      paths: {
        home: '/',
        holidays: '/2021holidays',
        'add holiday': '/add-holiday',
      }
    };
  },
  methods: {
    updateHolidays() {
      axios.get("/holidays").then((response) => {
        this.holidays = response.data.holidays;
      });
    }
  },
  mounted() {
    this.updateHolidays();
  }

}
</script>

<style lang='scss'>
@import '@/assets/scss/zipfoods.scss';
</style>
