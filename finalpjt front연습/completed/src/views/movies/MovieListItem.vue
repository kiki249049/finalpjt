<template>
  <div class="col d-flex justify-content-center my-3">
    <!-- <iframe :src="movieKey" frameborder="0"></iframe> -->
    <!-- <div class="card h-100" style="width: 18rem; border-top-color: lightskyblue;">
      <img :src="imgUrl" class="card-img-top" style="width: 286px; height:400px" alt="...">
      <div class="card-body text-center">
        <h4 class="card-title fw-bold ">{{ movie.title }}</h4>
        <h5 class="card-title "><i class="fas fa-star" style="color:gold"></i>        {{ movie.vote_average }}</h5>
        <br>
        <h6 class="card-title">개봉일 : {{ movie.release_date }}</h6>
        <h6 class="card-title" v-if="movie.genre_ids[0]">장르 : {{ movie.genre_ids[0].name }}</h6>
        <div>
          <a :href="linkUrl" class="fa btn btn-secondary" style="background: lightskyblue">영화상세정보</a>
        </div>
        <h5 class="absolute my-2" style="font-size :20px;">Likes  <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>  124</h5>
      </div>
    </div> -->
    <!-- <div class="card" id="card2" :style="imgUrl"></div> -->
    <div @click="Cardopen" class="card" :id="cardId" :style="{ backgroundImage : 'url('+imgURL+')'}">
      <button @click="CardClose" class="closed" :id="closedId" style="width:50px; right : 0"><i class="fa fa-times" aria-hidden="true"></i></button>
      <div class="box">
        <h3 class="title">{{ movie.title }}<br><i class="fa fa-star my-1" aria-hidden="true" style="color:orange;"></i>{{ movie.vote_average }}</h3>
        <div class="release_date"></div>
        <div class="content">
          <p>영화 개봉일 : {{ movie.release_date }}<br>{{ movie.overview }}<br>
          <i v-if="movie.like_users.includes(currentUser.pk)" @click="likeMovie(movie.id); resetMovies()" class="fa fa-heart" style="color : red; cursor: pointer" aria-hidden="true"></i>
          <i v-else @click="likeMovie(movie.id); resetMovies()" class="fa fa-heart-o" style="cursor : pointer" aria-hidden="true"></i>
          {{ likeUsers }} </p>
          <button class="fw-bold mb-1">Read more</button>
          <router-link class="text-decoration-none btn btn-dark mx-1 rounded-pill" style="font-family: arial" :to="{ name : 'reviewNew' , params : { moviePk : movie.id } }">리뷰쓰기</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name : "MovieListItem",
  props : {
    movie : {
      type : Object,
      required : true
    }
  },
  data(){
    return {
      imgURL : `https://image.tmdb.org/t/p/w500${this.movie.poster_path}`
    }
  },
  computed : {
    ...mapGetters(['currentUser','genreId','movieKey']),
    imgUrl(){
      return `https://image.tmdb.org/t/p/w500${this.movie.poster_path}`
    },
    linkUrl(){
      return `https://www.themoviedb.org/movie/${this.movie.id}`
    },
    cardId(){
      return `card${this.movie.id}`
    },
    closedId(){
      return `closed${this.movie.id}`
    },
    likeUsers(){
      return this.movie.like_users?.length
    }
  },
  filter : {
    getGenre(movie){
      if(movie && movie.genre_ids){
        return movie.genre_ids[0].name
      }
      return 'unknown'
    }
  },
  methods : {
    ...mapActions(['likeMovie']),
    Cardopen(e){
      e.stopPropagation()
      let card = document.querySelector(`#card${this.movie.id}`);
      card.classList.add("cardTransform");
      let closed = document.querySelector(`#closed${this.movie.id}`);
      closed.classList.add("closeding");
    },
    CardClose(e){
      e.stopPropagation()
      const card = document.querySelector(`#card${this.movie.id}`);
      let closed = document.querySelector(`#closed${this.movie.id}`)
      closed.classList.remove("closeding");
      card.classList.remove("cardTransform");
      },
    resetMovies(){
      this.$emit('movie-reset',)
    }
  },
  mounted(){
      var vid = document.getElementById("bgvid");
var pauseButton = document.querySelector("#polina button");

if (window.matchMedia('(prefers-reduced-motion)').matches) {
    vid.removeAttribute("autoplay");
    vid.pause();
    pauseButton.innerHTML = "Paused";
}

function vidFade() {
  vid.classList.add("stopfade");
}

vid.addEventListener('ended', function()
{
// only functional if "loop" is removed 
vid.pause();
// to capture IE10
vidFade();
}); 


pauseButton.addEventListener("click", function() {
  vid.classList.toggle("stopfade");
  if (vid.paused) {
    vid.play();
    pauseButton.innerHTML = "Pause";
  } else {
    vid.pause();
    pauseButton.innerHTML = "Paused";
  }
})

  }
}
</script>

<style scoped src='@/assets/styles/movielistitem.css'>
  .absolute {
    position: absolute;
    left : 200px;
    top : 600px;
  }
</style>