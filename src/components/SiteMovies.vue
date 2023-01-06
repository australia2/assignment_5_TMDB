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
	<div class="filter">
		<p>Filters:</p>
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
	</div>
	<!-- Add something for top movie? -->
	<!-- <img :src='`https://image.tmdb.org/t/p/w500${movie.results[0].poster_path}`' alt="" > -->
	<div class="movie-outer-container">
		<div class="movie-container">
			<div v-for="result in movieName" @click="openModal(result.id)" class="movie">
				<img :src='`https://image.tmdb.org/t/p/w500${result.poster_path}`' alt="">
				<div class="title">
					<p> {{ result.original_title }}</p>
				</div>
			</div>
		</div>
	</div>
	<SiteModal v-if="showModal" @toggleModal="closeModal()" :id="selectedId" />
</template>

<style scoped>
.movie-outer-container {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px;
}
.movie {
	height: 300px;
}

.filter {
	display: flex;
	flex-direction: row;
}

.filter>p {
	color: white;
	padding: 10px;
	display: inline;
	font-size: 20px;
	font-weight: 700;
}

.button-container {
	display: flex;
	gap: 6px;
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
	flex-flow: row wrap;
	gap: 7.5px;
	width: 95%;
}

.title {
	font-size: 11.5px;
	position: relative;
	top: -305px;
	font-weight: 500;
	opacity: 0;
	color: white;
	height: 300px;
	background-color: rgba(99, 99, 99, 0.8);
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 5px;
}

.title:hover {
	animation-name: display;
	animation-duration: 0.7s;
	opacity: 100;
}

@keyframes display {
	from {
		opacity: 0;
	}

	to {
		opacity: 100;
	}
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
	opacity: 0.5;
}

.media,
.time {
	width: 50px;
	border-radius: 10px;
	font-weight: 600;
	height: 25px;
	font-size: 1rem;
	background-color: rgb(0, 43, 80);
	color: white;
	margin: 3px;
}

.media:hover {
	background-color: rgba(1, 179, 228, 0.7);
}

.media {
	display: none;

}

.time:hover {
	background-color: rgba(1, 179, 228, 0.7);
}

.media:focus {
	background-color: rgb(1, 180, 228);
}

.time:focus {
	background-color: rgb(1, 180, 228);
}
</style>