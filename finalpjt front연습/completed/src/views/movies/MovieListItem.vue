<template>
  <div class="col d-flex justify-content-center">
    <div class="card h-100" style="width: 18rem; border-top-color: lightskyblue;">
      <img :src="imgUrl" class="card-img-top" style="width: 286px; height:400px" alt="...">
      <div class="card-body">
        <h5 class="card-title fw-bold">{{ movie.title }}</h5>
        <h5 class="card-title"><i class="fas fa-star" style="color:gold"></i>        {{ movie.vote_average }}</h5>
        <h6 class="card-title">개봉일 : {{ movie.release_date }}</h6>
        <a :href="linkUrl" class="fa btn btn-secondary" style="background: lightskyblue">영화상세정보</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name : "MovieListItem",
  props : {
    movie : {
      type : Object,
      required : true
    }
  },
  computed : {
    imgUrl(){
      return `https://image.tmdb.org/t/p/w500${this.movie.poster_path}`
    },
    linkUrl(){
      return `https://www.themoviedb.org/movie/${this.movie.id}`
    }
  }
}
</script>

<style>

</style>