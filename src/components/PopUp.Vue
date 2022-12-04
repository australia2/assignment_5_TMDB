<script setup>
import { ref } from "vue";

const vrai = ref(null);
const hide = () => {
	vrai.value = "bob";
	console.log(vrai.value)
}
</script>


<template>
	<!-- <h1 v-if="true" class="made">Select another movie</h1>
	<h1 v-else="true" class="made">Select a movie below</h1> -->
	<h1 v-if="vrai">Welcome to your account!</h1>
	<h1 v-else="vrai">Welcome to your account!</h1>
	<button type="button" @click="hide">x</button>
</template>

<style scoped>
button{
	display: inline;
	width: 100px
}

h1 {
	display: inline;
}
</style>