<script setup>
import { ref } from 'vue';
import { useRouter } from "vue-router";

const router = useRouter();

const button = () => {
    router.push("/loginPage");
}
</script>

<template>
    <h1>Movie Company Name</h1>
    <button @click="button">Login</button>
</template>

<style scoped>
h1{
    display: inline;
}
button{
    float: right;
    width: 100px;
    height: 30px;
    font-size: 20px;
}
</style>
