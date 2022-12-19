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
await getPopular()

const day = () => {
	time.value = "day";
	getPopular()
}

const week = () => {
	time.value = "week";
	getPopular()
}

const tv = () => {
	media.value = "tv";
	getPopular()
}

const movies = () => {
	media.value = "movie";

	getPopular()
}

</script>

<template>
	<div>
		<h2>Filters</h2>
	</div>
	<div class="button-container">
		<div class="inner-container">
			<button class="media" @click=movies()>Movies</button>
			<button class="media" @click=tv()>Shows</button>
		</div>
		<div class="inner-container">
			<button class="time" @click=week()>Week</button>
			<button class="time" @click=day()>Day</button>
		</div>
	</div>
	<!-- Add something for top movie? -->
	<!-- <img :src='`https://image.tmdb.org/t/p/w500${movie.results[0].poster_path}`' alt="" > -->
	<div class="movie-container">
		<div v-for="result in movieName" @click="openModal(result.id)">
			<img :src='`https://image.tmdb.org/t/p/w500${result.poster_path}`' alt="">
			<p class="title">{{ result.original_title }}</p>
		</div>
	</div>
	<SiteModal v-if="showModal" @toggleModal="closeModal()" :id="selectedId" />
</template>

<style scoped>
h2{
	color: white;
	padding: 10px;
}
.button-container {
	display: flex;
	gap: 10px;
	padding: 10px;
}

.inner-container {
	background-color: antiquewhite;
	display: flex;
	border-radius: 10px;
	gap: 8px;
	background-color: rgb(0, 43, 80);

}

div {
	background-color: rgb(0, 0, 0);
}

.movie-container {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 5px;
	align-items: center;
	justify-content: space-evenly;
}

.title {
	font-size: 10px;
	position: relative;
	top: -150px;
	font-weight: 500;
	opacity: 0;
}

img {
	width: 200px;
	border-radius: 5px;
	animation-name: load;
	animation-duration: 2s;
}

@keyframes load {
	0% {
		opacity: 0;
	}

	50% {
		opacity: 0.5;
	}

	100% {
		opacity: 1;
	}
}

img:hover {
	opacity: 0.5;
	animation-name: movieHover;
	animation-duration: 1s;
}

@keyframes movieHover {
	0% {
		opacity: 0.5;
		transform: rotateY(0deg);
	}

	10% {
		opacity: 0.4;
		transform: rotateY(1deg);
	}

	20% {
		opacity: 0.3;
		transform: rotateY(1deg);
	}
}

button {
	width: 50px;
	border-radius: 10px;
	font-weight: 600;
	height: 25px;
	font-size: 1rem;
	background-color: rgb(0, 43, 80);
	color: white;
	margin: 3px;
}

button:hover {
	background-color: rgb(1, 180, 228, 0.9);
}

.media:focus {
	background-color: rgb(1, 180, 228);
}

.time:focus {
	background-color: rgb(139, 193, 208);
}
</style>