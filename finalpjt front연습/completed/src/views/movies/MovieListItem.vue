<template>
  <div class="col d-flex justify-content-center my-3">
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
        <h3 class="title">{{ movie.title }}<br><i class="fa fa-star" aria-hidden="true" style="color:orange;"></i>{{ movie.vote_average }}</h3>
        <div class="release_date"></div>
        <div class="content">
          <p>영화 개봉일 : {{ movie.release_date }}<br>{{ movie.overview }}<br><i class="fa fa-thumbs-o-up" aria-hidden="true"></i>{{ likeUsers }} </p>
          <button class="fw-bold">Read more</button>
        </div>
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
  data(){
    return {
      imgURL : `https://image.tmdb.org/t/p/w500${this.movie.poster_path}`
    }
  },
  computed : {
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
      return this.movie.like_users.length
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
      }
  },
//   mounted(){
//     let card = document.querySelector("#card");
//   card.onclick = () => {
//   card.classList.add("cardTransform");
//   let closed = document.querySelector("#closed");
//   closed.classList.add("closeding");
//   closed.onclick = () => {
//     const card = document.querySelector("#card");
//     closed.classList.remove("closeding");
//     card.classList.remove("cardTransform");
//   };
// };
//   }
}
</script>

<style scoped src='@/assets/styles/movielistitem.css'>
  .absolute {
    position: absolute;
    left : 200px;
    top : 600px;
  }
</style>