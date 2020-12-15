<template>
  <div>
    <ul>
        <li v-for="(error, index) in errors" :key="index" class="form-feedback-error">{{ error }}</li>
    </ul>
  </div>
</template>

<script>
export default{
  props: ['errors']
}
</script>

<style scoped>
</style>
