<script setup>
import { ref } from 'vue';
import axios from "axios";
import { useRouter } from "vue-router";
import SiteModal from '../components/SiteModal.vue';

const showModal = ref(false);
const selectedId = ref(0);

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
	const time = "day"
	movie.value = (await getData(`https://api.themoviedb.org/3/trending/${media}/${time}`, {
		params: {
			api_key: "c38e6d2014c822c96f368ab7d8dd502d",
		}
	})).data;
	console.log(movie.value)
	movieName.value = movie.value.results
	console.log(movieName)
}
// const info = async () => {
// 		console.log(movie.value.results[0].original_title)
// 		}		// console.log(result.id)
// 		movie.value = (await getData(`https://api.themoviedb.org/3/movie/${data}`, {
// 			params: {
// 				api_key: "c38e6d2014c822c96f368ab7d8dd502d",
// 			}
// 		})).data;
// 		for (result in movieName) {
// 		console.log(result.poster_path)
// 	}
getPopular()

</script>

<template>
  <div>
    <button @click="openModal(5000)">Modal</button>
  </div>
  <SiteModal v-if="showModal" @toggleModal="closeModal()" :id="selectedId" />

	<!-- Add something for top movie? -->
	<div class="movie-container">
		<div v-for="result in movieName"  @click="openModal(result.id)">
			<img :src='`https://image.tmdb.org/t/p/w500${result.poster_path}`' alt="" >
			<div>{{ result.id }}</div>
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