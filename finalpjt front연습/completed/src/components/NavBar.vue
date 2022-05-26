<template>
  <!-- <nav>
    <ul>
      <li>
        <router-link :to="{ name: 'reviews' }">Home</router-link>
      </li>

      <li v-if="!isLoggedIn">
        <router-link :to="{ name: 'login' }">Login</router-link>
      </li>
      <li v-if="!isLoggedIn">
        <router-link :to="{ name: 'signup' }">Signup</router-link>
      </li>

      <li v-if="isLoggedIn">
        <router-link :to="{ name: 'reviewNew' }">New</router-link>
      </li>
      <li v-if="isLoggedIn">
        <router-link :to="{ name: 'profile', params: { username } }">
          {{ currentUser.username }}'s page
        </router-link>
      </li>
      <li v-if="isLoggedIn">
        <router-link :to="{ name: 'logout' }">Logout</router-link>
      </li>
    </ul>
  </nav> -->

  
  <!-- <section class="navigation">
  <div class="nav-container"> -->
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <div class="container-fluid">
       <a href="#" class="fw-bold navbar-brand mx-4" style="padding-top:1px; padding-bottom: 2px;" @click="fetchMovies()"><router-link class="text-white text-decoration-none" :to="{ name : 'movies' }" ><img src="../assets/logo4.png" style="width:100px;" alt="logo4">  </router-link></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent"></div>
        <ul class="navbar-nav mx-4 mb-2 mb-lg-0" style="font-size : 1.2rem">
          <li class="nav-item dropdown mx-2">
            <a href="" class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="material-icons md-36 mx-2" style="color:white; font-size:1.6rem">movie</i>
              <router-link class="text-white text-decoration-none" :to="{ name : 'movies' }" href="#!">Movie</router-link>
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a href="" @click="fetchMovies()" class="dropdown-item">
                  <router-link class="text-dark text-decoration-none" :to="{ name : 'movies' }" href="#!">Popular</router-link>
                </a>
              </li>
              <li><hr class="dropdown-divider"></li>
              <li>
                <a href="" @click="fetchGenreMovies(28)" class="dropdown-item">
                  <router-link class="text-dark text-decoration-none" :to="{ name : 'movies' }" href="#!">Action</router-link>
                </a>
              </li>
              <li>
                <a href="" @click="fetchGenreMovies(14)" class="dropdown-item">
                  <router-link  class="text-dark text-decoration-none" :to="{ name : 'movies' }" href="#!">Fantasy</router-link>
                </a>
              </li>
              <li>
                <a href="" @click="fetchGenreMovies(27)" class="dropdown-item">
                  <router-link class="text-dark text-decoration-none" :to="{ name : 'movies' }" href="#!">Horror</router-link>
                </a>
              </li>
              <li>
                <a href="" @click="fetchGenreMovies(10749)" class="dropdown-item">
                  <router-link class="text-dark text-decoration-none" :to="{ name : 'movies' }" href="#!">Romance</router-link>
                </a>
              </li>
              <li><hr class="dropdown-divider"></li>
              <li>
                <a href="#!" class="dropdown-item">
                  <button class="text-dark fw-bold text-decoration-none" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" style="width: 80px; padding: 0%; border: 0ch;"><img src="../assets/moodie.png" style="width:90px" alt=""></button>
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item mx-2" v-if="!isLoggedIn">
            <a class="nav-link" href="#!">
              <i class="material-icons md-36 mx-2" style="color:white; font-size:1.6rem">login</i>
              <router-link class="text-white text-decoration-none" :to="{ name: 'login' }">Login</router-link></a>
          </li>
          <li class="nav-item mx-2" v-if="!isLoggedIn">
            <a class="nav-link" href="#!">
              <i class="material-icons md-36 mx-2" style="color:white; font-size:1.6rem">person_add_alt</i>
              <router-link class="text-white text-decoration-none" :to="{ name: 'signup' }">Signup</router-link></a>
          </li>
          <li class="nav-item mx-2" v-if="isLoggedIn">
            <a href="" class="nav-link">
              <i class="material-icons md-36 mx-2" style="color:white; font-size: 1.6rem">groups</i>
              <router-link class="text-white text-decoration-none" :to="{ name: 'reviews' }">Community</router-link>
            </a>
          </li>
          <li class="nav-item mx-2" v-if="isLoggedIn">
            <a class="nav-link" href="#!">
              <i class="material-icons md-36" style="color:white; font-size: 1.6rem">account_circle</i>
              <router-link  class="text-white text-decoration-none" :to="{ name: 'profile', params: { username } }">
            {{ currentUser.username }}'s page
          </router-link></a>
          </li>
          <li class="nav-item mx-2" v-if="isLoggedIn">
            <a class="nav-link text-white text-decoration-none" href="#!" @click="logout()">
              <i class="material-icons md-36 mx-2" style="color:white; font-size:1.6rem">logout</i>
              Logout</a>
          </li>
        </ul>
      </div>
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" style="top : 20%">
    <div class="modal-content bg-dark text-white">
      <div>
        <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbpPPYs%2FbtrDbu3h2Ug%2FBwTPrBdFuOv9l662MLPgL0%2Fimg.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
              <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbwcEHh%2FbtrC9Nbc1WX%2FHR8LlAPUUdjEq0Ik1inlqK%2Fimg.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
              <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FCbUCd%2FbtrC74SyFtD%2FCa1yzgKTuk6dfMekKdP1y0%2Fimg.png" class="d-block w-100" alt="...">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        
      </div>

      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel" style="font-family: 'Noto Serif KR', serif; font-style: italic;">"당신의 하루를 들려주세요."</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <!-- <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Title:</label>
            <input v-model="title" type="text" class="form-control" id="recipient-name">
          </div> -->
          <div class="mb-3">
            <label for="message-text" class="col-form-label" style="font-family: 'Noto Serif KR', serif; font-style: italic;">Content :</label>
            <textarea class="form-control" id="message-text" v-model="query"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" style="font-family: 'Noto Serif KR', serif; font-style: italic;">Close</button>
        <button @click='fetchEmotionMovies(query); queryReset()' type="button" class="btn btn-primary" data-bs-dismiss="modal" style="font-family: 'Noto Serif KR', serif; font-style: italic;">MOODIE GO</button>
      </div>
    </div>
  </div>
</div>
    </nav>
    <!-- 모달창 -->
    
  <!-- </div>
</section> -->
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'NavBar',
    data(){
      return {
        title : '',
        query : ''
      }
    },
    computed: {
      ...mapGetters(['isLoggedIn', 'currentUser']),
      username() {
        return this.currentUser.username ? this.currentUser.username : 'guest'
      },
    },
    methods : {
      ...mapActions(['logout','fetchMovies','fetchGenreMovies','fetchEmotionMovies']),
      queryReset(){
        this.query = ''
        this.title = ''
      }
    }
  }
  
  
</script>

<style scoped>
</style>