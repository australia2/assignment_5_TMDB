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
  // console.log(movie.value);
  // console.log(movie.value.videos.results[0].key)
};

await getMovies1();
</script>

<template>
  <Teleport to="body">
    <div class="modal-outer-container" @click.self="emits('toggleModal')">
      <div class="modal-inner-container">
        <button class="close-button" @click="emits('toggleModal')">X</button>
        <a :href="movie.homepage" class="link" target="_blank">{{ movie.original_title }}</a>
        <div class="data-container">
          <div id="media">
            <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" alt="" />
            <!-- <iframe v-if="movie.value.videos.results.length != 0" -->
            <iframe
              :src="`https://www.youtube.com/embed/${movie.videos.results.filter((video) => video.type === 'Trailer').at(0).key}`"></iframe>
          </div>
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
            <div class="genre">
              <strong>GENRES: </strong>
              <p v-for="result in movie.genres"> {{ result.name }} </p>
            </div>
            <!-- <strong>PRODUCERS:</strong> -->
            <!-- <p v-for="result in movie.production_companies">{{ result.name }}</p>
            <p class="country">
              <strong>PRODUCTION COUNTRY:</strong>
              {{ movie.production_countries[0].iso_3166_1 }}
            </p> -->
            <!-- <p class="OG">
              <strong>ORIGINAL LANGUAGE:</strong> {{ movie.original_language }}
            </p> -->
            <p>"{{ movie.tagline }}"</p>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
#media {
  display: flex;
  gap: 10px;
}

iframe {
  border-radius: 10px;
  width: 72.72%;
  aspect-ratio: 16/9;
}

img {
  border-radius: 10px;
  width: 27.27%;
  aspect-ratio: 2/3;
}

.genre {
  display: flex;
  flex-direction: row;
  background-color: rgba(100, 100, 100, 0.5);
  border-radius: 5px;
}

.genre>p{
  background-color: rgba(100, 100, 100, 0.5);
  border-radius: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 5px;
  margin-left: 10px;
}
.data-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: space-evenly;
  margin: 15px;
}

.info-container {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  align-items: center;
}

.info-container>p,
strong{
  background-color: rgba(100, 100, 100, 0.5);
  border-radius: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 5px;
}

a {
  color: white;
  padding-left: 10px;
  background-color: rgb(1, 180, 228);
  display: block;
  font-size: 2rem;
  font-weight: 700;
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
	background-color: rgba(255, 255, 255, 0.309);
}
</style>