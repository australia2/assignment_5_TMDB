<script setup>
import { ref } from "vue";
import axios from "axios";

const getData = async (url, params) => {
  try {
    return await axios.get(url, params);
  } catch (error) {
    console.log(error);
  }
};

const props = defineProps(["id"]);
const emits = defineEmits(["toggleModal"]);

const movie = ref("");

const getMovies1 = async () => {
  movie.value = (
    await getData(`https://api.themoviedb.org/3/movie/${props.id}`, {
      params: {
        api_key: "c38e6d2014c822c96f368ab7d8dd502d",
        append_to_response: "videos",
      },
    })
  ).data;
  console.log(movie.value);
  console.log(movie.videos.results[0].key)
};

getMovies1();
</script>

<template>
  <Teleport to="body">
    <div class="modal-outer-container" @click.self="emits('toggleModal')">
      <div class="modal-inner-container">
        <button class="close-button" @click="emits('toggleModal')">X</button>
        <h1>{{ movie.original_title }}</h1>
        <div class="data-container">
          <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" alt="" />
          <div class="info-container">
            <p><strong>RELEASE DATE:</strong> {{ movie.release_date }}</p>
            <p><strong>POPULARITY:</strong> {{ movie.popularity }}</p>
            <p>
              <strong>RUNTIME:</strong> {{ (movie.runtime - (movie.runtime % 60)) / 60 }}h
              {{ movie.runtime % 60 }}min
            </p>
            <p><strong>OVERVIEW:</strong> {{ movie.overview }}</p>
            <p>
              <strong>BUDGET:</strong> {{ movie.budget }} $ | <strong>REVENUE:</strong>
              {{ movie.revenue }} $ | <strong>NET GAIN:</strong>
              {{ movie.revenue - movie.budget }} $
            </p>
            <p>"{{ movie.tagline }}"</p>

            <strong>GENRES: </strong>
            <p class="genre" v-for="result in movie.genres"> {{ result.name }} </p>
            <!-- <strong>PRODUCERS:</strong> -->
            <!-- <p v-for="result in movie.production_companies">{{ result.name }}</p>
            <p class="country">
              <strong>PRODUCTION COUNTRY:</strong>
              {{ movie.production_countries[0].iso_3166_1 }}
            </p> -->
            <!-- <p class="OG">
              <strong>ORIGINAL LANGUAGE:</strong> {{ movie.original_language }}
            </p> -->
            <a v-bind:href="movie.homepage" class="link" target="_blank">Movie homepage</a>
            <a v-bind:href="`https://www.youtube.com/watch?v=${movie.videos.results.filter((video) => video.type === 'Trailer').at(0).key
            }`" target="_blank">Movie Trailer</a>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.genre {
  display: flex;
  flex-direction: row;
}

img {
  width: 29%;
  border-radius: 10px;
}

h1 {
  padding-left: 10px;
  background-color: rgb(1, 180, 228);
  margin-bottom: 5px;
}

.data-container {
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
}

.info-container {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin: 10px;
  align-items: center;

}

.info-container>p,
strong,
a {
  background-color: rgba(100, 100, 100, 0.5);
  border-radius: 5px;
  padding: 5px;
}

a {
  color: white;
}

.modal-outer-container {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #00000099;
  z-index: 3;
}

.modal-outer-container .modal-inner-container {
  background-color: #1f2123;
  color: white;
  width: clamp(280px, 100%, 800px);
  height: 400px;
  position: relative;
}

.modal-outer-container .modal-inner-container .close-button {
  position: absolute;
  right: 0px;
  border: none;
  font-weight: bold;
  font-size: 1.25rem;
}

button {
  background-color: rgb(1, 180, 228);
  height: min-content;
  padding: 8.1px;
  padding-right: 11px;
  padding-left: 11px;
  color: white;
}

button:hover {
  color: rgb(1, 100, 228);
}
</style>