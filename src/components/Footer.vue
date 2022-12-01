<script setup>
import { ref } from 'vue'

</script>

<template>
  <div class='one'>
    <p>Our mission is to almost always deliver <strong>top-notch</strong> entertainment!</p>
  </div>
  <div class='two'>
    <p>Contact us at <strong>123-333-3333</strong></p>
    <div class="topleft">
      <p class="top">Made with</p>
      <img class="TMDB"
        src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
        alt="TMDB link">
    </div>

  </div>

</template>

<style scoped>
.one {
  margin-left: 10px;
  width: 100%;
  height: 350px;
}

.two {
  width: 100%;
  height: 250px;
  background-color: rgba(13, 37, 63, 0.95);
}

p {
  font-size: 1.25rem;
}

.two>p {
  color: white;
  padding: 10px;
}

.topleft{
  display: flex;
  justify-content: center;
}
.TMDB{
  max-width: 100px;
  display: inline;
  margin-left: 5px
}
</style>
