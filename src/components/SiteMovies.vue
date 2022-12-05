<script setup>
import { ref } from 'vue';
import axios from "axios";

const movie = ref(null);
const movieName = ref("");
const imageSrc = ref("");

const getData = async (url, params) => {
	try {
		return await axios.get(url, params);
	} catch (error) {
		console.log(error);
	}
};

const getPopular = async () => {
	const media = "movie"
	const time = "week"
	movie.value = (await getData(`https://api.themoviedb.org/3/trending/${media}/${time}`, {
		params: {
			api_key: "c38e6d2014c822c96f368ab7d8dd502d",
		}
	})).data;
	console.log(movie.value)
	movieName.value = movie.value.results
	console.log(movieName)
	// for (let result in movieName) {
	// 	imageSrc.value = "https://image.tmdb.org/t/p/w500" + result.poster_path
	// }
}
getPopular()
</script>

<template>
	<div v-for="result in movieName">
		<img :src='`https://image.tmdb.org/t/p/w500${result.poster_path}`' alt="">
	</div>
</template>

<style scoped>
div {
	color: black;
}
</style>