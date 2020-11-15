<!-- src/components/UserDates.vue -->
<template>
    <div id="user-form">
      <h2>Add a special occasion</h2>
      <form>
        <label for="name">Name of occasion</label>
        <input type='text' id="name">
        
        <label for="date">Date of occasion</label>
        <input type='date' id="date">

        <label for="type">Type of occasion</label>
        <select id="type">
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Religious</option>
        </select>
        <button>Add a Day</button>
      </form>
    </div>
</template>

<script>

export default {
    name: 'user-dates',
    props: [''],
    data: function () {
        return {
        };
    },
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