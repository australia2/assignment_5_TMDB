<script setup>
import { ref } from 'vue';
import axios from "axios";
import { useRouter } from "vue-router";
import SiteModal from '../components/SiteModal.vue';

const showModal = ref(false);
const selectedId = ref(0);
const time = ref("week")
const media = ref("movie")

const openModal = (id) => {
	showModal.value = true;
	selectedId.value = id;
};

const closeModal = () => {
	showModal.value = false;
};

const router = useRouter();
const movie = ref(null);
const movieName = ref("");

const getData = async (url, params) => {
	try {
		return await axios.get(url, params);
	} catch (error) {
		console.log(error);
	}
};

// const day = () => {
// 	time.value = "day";
// 	console.log(time.value)
// 	getPopular = async () => {
// 	movie.value = (await getData(`https://api.themoviedb.org/3/trending/movie/day`, {
// 		params: {
// 			api_key: "c38e6d2014c822c96f368ab7d8dd502d",
// 		}
// 	})).data;
// }
// }

// const week = () => {
// 	time.value = "week";
// 	console.log(time.value);
// 	getPopular = async () => {
// 	movie.value = (await getData(`https://api.themoviedb.org/3/trending/${media.value}/${time.value}`, {
// 		params: {
// 			api_key: "c38e6d2014c822c96f368ab7d8dd502d",
// 		}
// 	})).data;
// }
// }

const getPopular = async () => {
	movie.value = (await getData(`https://api.themoviedb.org/3/trending/${media.value}/${time.value}`, {
		params: {
			api_key: "c38e6d2014c822c96f368ab7d8dd502d",
		}
	})).data;
	console.log(movie.value)
	movieName.value = movie.value.results
	console.log(movieName)
}
getPopular()
</script>

<template>
	<SiteModal v-if="showModal" @toggleModal="closeModal()" :id="selectedId" />
	<button @click=day()>Top movies today</button>
	<button @click=week()>Top movies week</button>
	<!-- <button @click=tv()>Top shows this week</button>
	<button @click=movie()>Top shows today</button> -->

	<!-- Add something for top movie? -->
	<!-- <img :src='`https://image.tmdb.org/t/p/w500${movie.results[0].poster_path}`' alt="" > -->
	<div class="movie-container">
		<div v-for="result in movieName" @click="openModal(result.id)">
			<img :src='`https://image.tmdb.org/t/p/w500${result.poster_path}`' alt="">
			<p class="title">{{ result.original_title }}</p>
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

button {
	width: 150px;
	margin-top: 10px;
	margin-left: 10px;
	border-radius: 5px;
	font-weight: 600;
	height: 25px;
	font-size: 1rem;
}

button:hover {
	background-color: rgb(1, 180, 228, 0.5);
}

.title {
	font-size: 10px;
}
</style>