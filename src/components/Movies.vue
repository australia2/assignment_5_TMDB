<script setup>
import { ref } from 'vue';
import axios from "axios";

const movie = ref(null);
const movieName = ref("");

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
	movieName.value = movie.value.results[0].original_title
	console.log(movieName)
}

getPopular()
</script>

<template>
	<!-- {/* <h1 v-for="oiuh">Select a movie below</h1> */} -->
	<!-- <h1 v-if="movie">q</h1> -->
	<!-- v for results (go through) -->
	<div>{{movieName}}</div>
</template>

<style scoped>

</style>