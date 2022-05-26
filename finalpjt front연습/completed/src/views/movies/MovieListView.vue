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
    <p v-if="genreId==35" style="color : white; text-align: center; font-size : 3rem; font-family: 'Noto Serif KR', serif; font-style: italic;" class="fw-bold">"오늘 {{ currentUser.username }}님에게 어울리는 영화는..." <br> 오늘 안좋은일이 있으셨군요... Comedy영화보면서 마음을 달래보는건 어떠세요?</p>
    <p v-else-if="genreId==10751" style="color : white; text-align: center; font-size : 3rem; font-family: 'Noto Serif KR', serif; font-style: italic;" class="fw-bold">"오늘 {{ currentUser.username }}님에게 어울리는 영화는..." <br>요즘 많이 힘드시죠..? 지치고 힘든 순간 Family영화보면서 힐링어떠세요?</p>
    <p v-else-if="genreId==16" style="color : white; text-align: center; font-size : 3rem; font-family: 'Noto Serif KR', serif; font-style: italic;" class="fw-bold">"오늘 {{ currentUser.username }}님에게 어울리는 영화는..."<br>무서워 잠 못드는 밤 Animation영화 보면서 마음을 달래볼까요? </p>
    <p v-else-if="genreId==878" style="color : white; text-align: center; font-size : 3rem; font-family: 'Noto Serif KR', serif; font-style: italic;" class="fw-bold">"오늘 {{ currentUser.username }}님에게 어울리는 영화는..." <br>기쁜 오늘, SF영화와 함께 우주로 떠나볼까요?</p>
    <p v-else-if="genreId==18" style="color : white; text-align: center; font-size : 3rem; font-family: 'Noto Serif KR', serif; font-style: italic;" class="fw-bold">"오늘 {{ currentUser.username }}님에게 어울리는 영화는..." <br>슬퍼하지마세요... 이 순간이 {{ currentUser.username }}님의 Drama영화같은 순간이 될거에요.</p>
    <p v-else-if="genreId==10402" style="color : white; text-align: center; font-size : 3rem; font-family: 'Noto Serif KR', serif; font-style: italic;" class="fw-bold">"오늘 {{ currentUser.username }}님에게 어울리는 영화는..." <br>놀란 마음 오늘 Music영화보면서 가라앉혀 볼까요?</p>
    <p v-else style="color : white; text-align: center; font-size : 3rem; font-family: 'Noto Serif KR', serif; font-style: italic;" class="fw-bold">Recommend For You!</p>
    <!-- <h1 style="color : white; text-align: center;" class="fw-bold my-3">Popular Movie</h1> -->
    <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 my-5">
      <movie-list-item v-for="movie in movies" :key="movie.id" :movie="movie" @movie-reset="fetchMovies"></movie-list-item>
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
      ...mapGetters(['movies', 'currentUser','genreId']),
      username() {
        return this.currentUser.username ? this.currentUser.username : 'guest'
      },
    },
    methods : {
      ...mapActions(['fetchMovies']),
    },
    created(){
      this.fetchMovies()
    },
  }
  
</script>

<style scoped >


  section{
  height: 60vh;
  background: url(https://res.cloudinary.com/dv3qcy9ay/image/upload/f_auto/general/venues/ZoomBackgrounds/Zoom18);
}
/* h1{
  font-size: 4em;
  position: absolute;
  top: 250px;
  left: 250px;
  font-family: sans-serif;
  
} */
section:before{
  content:'';
  background: linear-gradient(to top,black,transparent);
  position: absolute;
  left: 0;
  height: 70%;
  width: 100%;
}

/* h3{
  position: absolute;
  top: 350px;
  left: 250px;
  font-family: sans-serif;
  animation: slide 2s ease-out;
} */
h1{
  font-size: 4em;
  position: absolute;
  top: 250px;
  left: 250px;
  font-family: sans-serif;
  animation: slide 2s ease-out;
}

h3{
  position: absolute;
  top: 350px;
  left: 250px;
  font-family: sans-serif;
  font-style: italic;
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