<script setup>
import { ref } from 'vue'

</script>

<template>
  <div class="box">
    <div class="background">
    </div>
    <div class="polygon">
      <p class="p"><strong>You want movies, eh?</strong></p> 
      <p class="sub">Get the widest selection of movies available!</p>
    </div>
    <div class="border"></div>
  </div>
</template>

<style scoped>
.box {
  width: 100%;
  height: 500px;
  position: relative;
}

.background {
  background-image: url('https://preview.redd.it/4fxxbm4opjd31.jpg?auto=webp&s=f5b7d62076600a978d290a5e87f13140c47f5cd0');
  width: 100%;
  height: 100%;
  position: absolute;
}

.polygon {
  width: 30%;
  height: 0px;
  border-bottom: 500px solid rgba(13, 37, 63, 0.95);
  border-right: 400px solid transparent;
  position: relative;
}

/* .border{
  width: 30%;
  height: 0px;
  border-bottom: 500px solid rgba(1, 180, 228, 0.8);
  border-right: 400px solid transparent;
  position: relative;
} */

.p {
  padding-top: 20px;
  margin-left: 20px;
  color: white;
  font-size: 65px;
}

.sub{
  padding-top: 20px;
  margin-left: 20px;
  color: white;
  line-height: 30px;
}

</style>