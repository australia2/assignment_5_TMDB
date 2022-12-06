<script setup>
import { ref } from "vue";

const vrai = ref(null);
const hide = () => {
	vrai.value = "true";

}
</script>


<template>
	<h1 v-if="vrai"></h1>
	<h1 v-else="vrai">Welcome to your account! Select a movie below to begin</h1>
	<button v-if="vrai" type="button" @click="hide"></button>
	<button v-else="vrai" type="button" @click="hide">x</button>	
</template>

<style scoped>
button{
	display: inline;
	width: 10px;
	border-radius: 5px
}

h1 {
	display: inline;
	margin-left: 10px;
	background-color: rgb(165, 165, 165);
}
</style>