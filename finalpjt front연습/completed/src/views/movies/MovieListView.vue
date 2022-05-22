<template>
  <div>
    <section>
      <h1 style="color: white">Movie</h1>
      <h3 style="color: white">영화를 추천해드려요</h3>
    </section>
    <br>
    <br>
    <br>
    <br>
    <p style="color : white; text-align: center; font-size : 3rem;" class="fw-bold">Recommend For You!</p>
    <!-- <h1 style="color : white; text-align: center;" class="fw-bold my-3">Popular Movie</h1> -->
    <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 my-5">
      <movie-list-item v-for="movie in movies" :key="movie.id" :movie="movie"></movie-list-item>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import MovieListItem from '@/views/movies/MovieListItem.vue'

  export default {
    name : 'MovieList',
    components : {MovieListItem},
    computed : {
      ...mapGetters(['movies', 'currentUser']),
      username() {
        return this.currentUser.username ? this.currentUser.username : 'guest'
      },
    },
    methods : {
      ...mapActions(['fetchMovies'])
    },
    created(){
      this.fetchMovies()
    },
  }
  
</script>

<style scoped>


  section{
  height: 60vh;
  background: url(https://res.cloudinary.com/dv3qcy9ay/image/upload/f_auto/general/venues/ZoomBackgrounds/Zoom18);
}
h1{
  font-size: 4em;
  position: absolute;
  top: 250px;
  left: 250px;
  font-family: sans-serif;
  
}
section:before{
  content:'';
  background: linear-gradient(to top,black,transparent);
  position: absolute;
  left: 0;
  height: 70%;
  width: 100%;
}

h3{
  position: absolute;
  top: 350px;
  left: 250px;
  font-family: sans-serif;
  animation: slide 2s ease-out;
}

@keyframes slide {
  from{
    left: -100px;
    opacity: 0;
  }
  to{
    left: 250px;
    opacity: 1;
  }
}

</style>