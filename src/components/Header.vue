<script setup>
import { ref } from 'vue';
import { useRouter } from "vue-router";

const router = useRouter();

const button = () => {
    router.push("/loginPage");
}
</script>

<template>
    <div>
        <p>Movie Company Name</p>
        <button @click="button">Login</button>
    </div>
</template>

<style scoped>
div {
    background-color: white;
    border-bottom: 10px;
}

p {
    display: inline;
    font-size: 50px;
    padding-left: 10px;
}

button {
    width: 100px;
    height: 40px;
    font-size: 20px;
    border-radius: 10px;
    float: right;
    margin-top: 20px;
    background-color: rgba(137, 137, 137, 0.5);
}

button:hover{
    background-color: rgb(144, 206, 161);
    color: rgb(255, 255, 255);
    box-shadow: 1.5px 1.5px rgba(137, 137, 137, 0.5);

}
</style>
