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
        <a href="#" class="fw-bold navbar-brand" @click="fetchMovies()"><router-link class="text-white text-decoration-none" :to="{ name : 'movies' }" >MODIE X</router-link></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent"></div>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <a href="" class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <router-link class="text-white text-decoration-none" :to="{ name : 'movies' }" href="#!">Movie</router-link>
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
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
            </ul>
          </li>
          <li class="nav-item" v-if="!isLoggedIn">
            <a class="nav-link" href="#!"><router-link class="text-white text-decoration-none" :to="{ name: 'login' }">Login</router-link></a>
          </li>
          <li class="nav-item" v-if="!isLoggedIn">
            <a class="nav-link" href="#!"><router-link class="text-white text-decoration-none" :to="{ name: 'signup' }">Signup</router-link></a>
          </li>
          <li class="nav-item" v-if="isLoggedIn">
            <a href="" class="nav-link">
              <router-link class="text-white text-decoration-none" :to="{ name: 'reviews' }">Community</router-link>
            </a>
          </li>
          <li class="nav-item" v-if="isLoggedIn">
            <a class="nav-link" href="#!"><router-link  class="text-white text-decoration-none" :to="{ name: 'profile', params: { username } }">
            {{ currentUser.username }}'s page
          </router-link></a>
          </li>
          <li class="nav-item" v-if="isLoggedIn">
            <a class="nav-link text-white text-decoration-none" href="#!" @click="logout()">Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  <!-- </div>
</section> -->
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'NavBar',
    computed: {
      ...mapGetters(['isLoggedIn', 'currentUser']),
      username() {
        return this.currentUser.username ? this.currentUser.username : 'guest'
      },
    },
    methods : {
      ...mapActions(['logout','fetchMovies','fetchGenreMovies'])
    }
  }
  
  
</script>

<style scoped>
</style>
