<script setup>
import { ref } from "vue";

const show = ref(true);
const hide = () => {
	show.value = false;
}
</script>


<template>
	<div v-if="show">
		<h1>Welcome to your account! Select a movie below to begin</h1>
		<button @click="hide">x</button>
	</div>
	<!-- 	
	<button v-else="vrai" type="button" @click="hide">x</button> -->
</template>

<style scoped>
button {
	width: 20px;
	height: 20px;
	border-radius: 10px;
	display: inline;
	background-color: none;
}

h1 {
	margin-left: 10px;
	border-radius: 5px;
	display: inline;
}

div {
	background-color: rgb(0, 43, 80);
	color: white;
	border-top: rgba(1, 180, 228, 0.5) solid 5px;
	border-bottom: rgba(1, 180, 228, 0.5) solid 5px;

}
</style>