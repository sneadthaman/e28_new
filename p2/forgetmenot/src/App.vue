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
<router-view></router-view>
  </div>
  
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      /* Store links in an array to maintain order */
      links: ['home', 'holidays', 'addholiday'],

      /* Map links to the appropriate component */
      paths: {
        home: '/',
        holidays: '/2021holidays',
        addholiday: '/add-holiday',
      },
    }
  }
}
</script>

<style lang='scss'>
@import '@/assets/scss/zipfoods.scss';
</style>
