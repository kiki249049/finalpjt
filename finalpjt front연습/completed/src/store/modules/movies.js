import axios from 'axios'
import drf from '@/api/drf'
import router from '@/router'

import _ from 'lodash'

export default ({
  state: {
    movies : [],
    movie : {},
  },
  getters: {
    movies : state => state.movies,
    movie : state => state.movie,
    isMovie : state => !_.isEmpty(state.movie),
  },
  mutations: {
    SET_MOVIES : (state, movies) => state.movies = movies,
    SET_MOVIE : (state, movie) => state.movie = movie,
    
  },
  actions: {
    fetchMovies({commit, getters}){
      // 영화 목록 받아오기
      // 성공하면 state.movies에 저장
      axios({
        url : drf.movies.movies(),
        mehtod : 'get',
        headers : getters.authHeader
      })
        .then(res => {
          commit('SET_MOVIES', res.data),
          console.log(res)
        })
        .catch(err => {
          console.error(err.response)
          if (err.response.status === 404) {
            router.push({ name: 'NotFound404' })
          }
        })
    },

    fetchMovie({commit, getters}, moviePk){
      axios({
        url : drf.movies.movie(moviePk),
        method : 'get',
        headers : getters.authHeader,
      })
        .then(res => {
          commit('SET_MOVIE', res.data)
          console.log(res.data)
        })
        .catch(err => {
          console.error(err.response)
          if(err.response.status == 404){
            router.push({ name : 'NotFound404' })
          }
        })
    },
    fetchGenreMovies({commit, getters},genrePk ){
      // 영화 목록 받아오기
      // 성공하면 state.movies에 저장
      axios({
        url : drf.movies.genreMovies(genrePk),
        mehtod : 'get',
        headers : getters.authHeader
      })
        .then(res => {
          commit('SET_MOVIES', res.data),
          console.log(res)
        })
        .catch(err => {
          console.error(err.response)
          if (err.response.status === 404) {
            router.push({ name: 'NotFound404' })
          }
        })
    },

    fetchPopularMovies({commit, getters}){
      axios({
        url : drf.movies.popularMovies(),
        method : 'get',
        headers : getters.authHeader
      })
        .then(res => commit('SET_MOVIES', res.data))
        .catch(err =>{
          console.error(err.response)
          if (err.response.status === 404) {
            router.push({ name: 'NotFound404' })
          }         
        })
    },

    fetchEmotionMovies({commit, getters}){
      axios({
        url : drf.movies.emotionMovies(),
        method : 'get',
        headers : getters.authHeader
      })
        .then(res => commit('SET_MOVIES', res.data))
        .catch(err => {
          console.error(err.response)
          if (err.response.status === 404) {
            router.push({ name: 'NotFound404' })
          }
        })
    },

  },
})
