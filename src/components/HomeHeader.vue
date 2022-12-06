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
	border-bottom: 5px;
	border-style: solid;
	border-color: rgba(1, 180, 228, 0.5);
	z-index: 1;
}

p {
	display: inline;
	font-size: 50px;
	padding-left: 10px;
	font-weight: 500;
}

button {
	width: 100px;
	height: 40px;
	font-size: 20px;
	border-radius: 10px;
	float: right;
	margin-top: 20px;
	background-color: rgba(137, 137, 137, 0.5);
	margin-right: 10px;
}

button:hover {
	background-color: rgba(1, 180, 228, 0.5);
	color: rgb(255, 255, 255);
	box-shadow: 1.5px 1.5px rgba(137, 137, 137, 0.8);
}
</style>
