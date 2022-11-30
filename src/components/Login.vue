<script setup>

</script>

<template>
    <form @submit.prevent="login()">
      <input type="text" v-model="username" placeholder="Username" />
      <input type="password" v-model="password" placeholder="Password" />
      <input type="submit" value="Login" />
    </form>
</template>

<style scoped>
form{
  display: flex;   
  flex-direction: column;
}
</style>
