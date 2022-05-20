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

  
  <section class="navigation">
  <div class="nav-container">
    <div class="brand">
      <a href="" class="fw-bold"><router-link :to="{ name : 'reviews' }" href="#!">MODIE X</router-link></a>
    </div>
    <nav>
      <div class="nav-mobile"><a id="nav-toggle" href="#!"><span></span></a></div>
      <ul class="nav-list">
        <li>
          <a href=""><router-link :to="{ name : 'movies' }" href="#!">Home</router-link></a>
        </li>
        <li v-if="!isLoggedIn">
          <a href="#!"><router-link :to="{ name: 'login' }">Login</router-link></a>
        </li>
        <li v-if="!isLoggedIn">
          <a href="#!"><router-link :to="{ name: 'signup' }">Signup</router-link></a>
        </li>
        <li v-if="isLoggedIn">
          <router-link :to="{ name: 'reviews' }">community</router-link>
        </li>
        <li v-if="isLoggedIn">
          <a href="#!"><router-link :to="{ name: 'profile', params: { username } }">
          {{ currentUser.username }}'s page
        </router-link></a>
        </li>
        <li v-if="isLoggedIn">
          <router-link :to="{ name: 'logout' }">Logout</router-link>
        </li>
      </ul>
    </nav>
  </div>
</section>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'NavBar',
    computed: {
      ...mapGetters(['isLoggedIn', 'currentUser']),
      username() {
        return this.currentUser.username ? this.currentUser.username : 'guest'
      },
    },
  }
  
  
</script>

<style scoped src="@/assets/styles/navbar.css">
</style>
