<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const username = ref("");
const password = ref("");

const error = ref(false);
const login = () => {
  if (username.value === "tmdb" && password.value === "movies") {
    router.push("/account");
  } else {
    error.value = true;
  }
};
</script>

<template>
  <div class="surround">
    <form @submit.prevent="login()">
      <input type="text" v-model="username" placeholder="Username" class="input" />
      <input type="password" v-model="password" placeholder="Password" class="input" />
      <input type="submit" value="Login" class="submit" />
    </form>

    <div v-if="error" class="error">
      <p class="wrong">Incorrect username/password!</p>
    </div>
  </div>
</template>

<style scoped>
.surround {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  display: flex;
  margin-top: 30%;
}

form {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.submit {
  width: 100px;
  height: 40px;
  font-size: 20px;
  border-radius: 10px;
}

.submit:hover {
  background-color: rgb(144, 206, 161);
  color: rgb(255, 255, 255);
  box-shadow: 1.5px 1.5px rgba(137, 137, 137, 0.5);
}

.input {
  width: 200px;
  height: 40px;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(144, 206, 161);
  border-radius: 10px;
  font-size: 1rem;
  padding-left: 8px;
}

.wrong {
  color: brown;
}
</style>