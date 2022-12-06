<script setup>
import { ref } from 'vue';
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();
const movie = ref(null);
const movieName = ref("");
const input = ref("");

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
}
getPopular()

const info = async () => {
	const data = input.value;
	movie.value = (await getData(`https://api.themoviedb.org/3/movie/${data}`, {
		params: {
			api_key: "c38e6d2014c822c96f368ab7d8dd502d",
			append_to_response: "videos",
		}
	})).data;
	// for (result in movieName) {
	// 	console.log(result.poster_path)
	// }
}
</script>

<template>
	<!-- Add something for top movie? -->
	<div class="movie-container">
		<div v-for="result in movieName">
			<img :src='`https://image.tmdb.org/t/p/w500${result.poster_path}`' alt="" @click="info">
		</div>
	</div>
</template>

<style scoped>
.movie-container {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 11px;
	align-items: center;
	justify-content: space-evenly;
	margin-top: 10px;
}

img {
	width: 200px;
	border-radius: 5px;
}

img:hover {
	box-shadow: 0 0 8px 2px rgb(1, 180, 228);

}
</style>