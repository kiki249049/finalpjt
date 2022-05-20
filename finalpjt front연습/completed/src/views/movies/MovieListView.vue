<template>
  <div>
    <h1 style="color : white; text-align: center;" class="fw-bold my-3">Popular Movie</h1>
    <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 my-4">
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
      ...mapGetters(['movies'])
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

</style>