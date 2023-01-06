<script></script>

<template>
  <div class="surround">
    <h1>Terms Of Service</h1>
    <p>lorem ujwsgpiu psgujpiawujhgsroiwa gw loraljgaerealiygiewa
      ytugerakbtuyewabtuyfwytugerakbtuyewabt
      ywuet yfr4wlti7uw ytiuywa t t7wiuteiwatuywaiabcdefgh waldo waldo</p>
    <h1>Privacy Policy</h1>
    <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nostrum dolor provident, dolorem autem ab
      fugit
      quas sed assumenda laboriosam nemo, voluptate recusandae accusamus nobis saepe beatae consequuntur modi neque.
      We reserve the right to do a lot of things
    </p>
    <h1>FAQ</h1>
    <h2>Where is the colour scheme from?</h2>
    <p class="scheme">Website colour scheme source: </p><a href="https://www.themoviedb.org/" target="_blank">TMDB</a>
    <h2>Why am I seeing a "0" for some values?</h2>

    <p> The movie may not have been released yet, or data for that specific movie may be unavailable</p>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nostrum dolor provident, dolorem autem ab
      fugit
      quas sed assumenda laboriosam nemo, voluptate recusandae accusamus nobis saepe beatae consequuntur modi neque.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nostrum dolor provident, dolorem autem ab
      fugit
      quas sed assumenda laboriosam nemo, voluptate recusandae accusamus nobis saepe beatae consequuntur modi neque.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nostrum dolor provident, dolorem autem ab
      fugit
      quas sed assumenda laboriosam nemo, voluptate recusandae accusamus nobis saepe beatae consequuntur modi neque.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nostrum dolor provident, dolorem autem ab
      fugit
      quas sed assumenda laboriosam </p>
    <p>save the whales</p>
    <p> recusandae accusamus nobis saepe beatae consequuntur modi neque.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nostrum dolor provident, dolorem autem ab
      fugit quas sed assumenda laboriosam nemo</p>
    <p>voluptate recusandae accusamus nobis saepe beatae consequuntur modi neque.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Where's Waldo? Voluptatum nostrum dolor provident,
      dolorem autem ab
      fugit
      quas sed assumenda laboriosam nemo, voluptate recusandae accusamus nobis saepe beatae consequuntur modi neque.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nostrum dolor provident, dolorem autem ab
      fugit
      quas sed assumenda laboriosam nemo, voluptate recusandae accusamus nobis saepe beatae consequuntur modi neque.
    </p>
    <h2>Why does it say "Lorem ipsum, dolor sit amet consectetur adipisicing elit" everywhere?</h2>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Where's Waldo? Voluptatum nostrum dolor provident,
      dolorem autem ab
      fugit
      quas sed assumenda laboriosam nemo, voluptate recusandae accusamus nobis saepe beatae consequuntur modi neque.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nostrum dolor provident, dolorem autem ab
      fugit
      quas sed assumenda laboriosam nemo, voluptate recusandae accusamus nobis saepe beatae consequuntur modi neque.
    </p>
    <RouterLink to="/404" custom v-slot="{ navigate }">
      <h2 @click="navigate" role="link">Where's waldo?</h2>
    </RouterLink>


  </div>
</template>

<style scoped>
h1 {
  padding: 0px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 10px;
  display: inline;
  text-decoration: underline;
}

* {
  padding: 10px
}

.surround {
  margin: 15%;
  margin-top: 20px;
  margin-bottom: 20px;

  background-color: rgba(238, 238, 238, 0.326);
}
p{
  line-height: 30px;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  align-items: center;
}

.scheme{
  display: inline;
  padding-right: 0;
  margin-right: 0;

}
a{
  padding: 0;
}
</style>
