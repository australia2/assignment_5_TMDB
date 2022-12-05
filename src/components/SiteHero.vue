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
  </div>
  <div class='one'>
    <div class="textBox">
      <p class="body">Get the <strong>cheapest</strong> deals on the internet, starting at only</p>
      <h1>3.99$</h1>
      <p class="price"> per month!*</p>
      <p >*includes 3.99 movies</p>
    </div>
    <div class="movieBox">
      <img id="left"
        src="https://m.media-amazon.com/images/M/MV5BNTM4NjIxNmEtYWE5NS00NDczLTkyNWQtYThhNmQyZGQzMjM0XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg"
        alt="movie">
      <img id="right"
        src="https://m.media-amazon.com/images/M/MV5BYzZkOGUwMzMtMTgyNS00YjFlLTg5NzYtZTE3Y2E5YTA5NWIyXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg"
        alt="movie">
      <img id="rightest"
        src="https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_FMjpg_UX1000_.jpg"
        alt="movie">
    </div>
  </div>
</template>

<style scoped>
.one {
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 1%;
  height: 410px;
  display: flex;
  justify-content: center;
  justify-content: space-evenly;
}

.textBox{
  padding-top: 2rem;
  padding-bottom: 10%;
  margin-left: 90px;
  margin-right: 20px;
}
.movieBox {
  width: 45%;
}

img {
  height: 300px;
  border-radius: 8px;
  box-shadow: 5px 5px 25px black;
}

#left {
  position: absolute;
  width: 182.115;
  height: 270px;
}

#right {
  position: relative;
  top: 80px;
  left: 100px;
  z-index: 1;
  scale: 110%;
}

#rightest {
  position: relative;
  top: 10px;
  left: 40px;
  scale: 85%;
}

h1 {
  font-size: 100px;
  display: inline;
  color: rgb(1, 180, 228)
}

.price {
  display: inline;
}

.box {
  width: 100%;
  height: 500px;
  position: relative;
  border-bottom: 5px;
  border-style: solid;
  border-color: rgba(1, 180, 228, 0.5);
}

.body,
.price {
  font-size: 25px;
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
  border-bottom: 500px solid rgba(1, 19, 39, 0.95);
  border-right: 300px solid transparent;
  position: relative;
}

.p {
  padding-top: 25%;
  margin-left: 25px;
  color: white;
  font-size: 65px;
  line-height: 65px;
}

.sub {
  padding-top: 20px;
  margin-left: 25px;
  color: white;
  line-height: 30px;
  font-size: 23px;
}

@media only screen and (max-width: 1250px) {
  #rightest {
    display: none;
}
}
</style>