import axios from 'axios'
import drf from '@/api/drf'
import router from '@/router'

import _ from 'lodash'

export default ({
  state: {
    movies : [],
    movie : {},
    genreId : 0,
  },
  getters: {
    movies : state => state.movies,
    movie : state => state.movie,
    isMovie : state => !_.isEmpty(state.movie),
    genreId : state => state.genreId
  },
  mutations: {
    SET_MOVIES : (state, movies) => state.movies = movies,
    SET_MOVIE : (state, movie) => state.movie = movie,
    SET_GENREID : (state, genreId) => {
      state.genreId = genreId
      console.log(state.genreId)
    },
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
          commit('SET_GENREID', 0)
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
      commit('SET_GENREID', genrePk)
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

    fetchEmotionMovies({dispatch ,getters}, content){
      axios({
        url : drf.movies.emotionMovies(content),
        method : 'post',
        headers : getters.authHeader
      })
        .then(res => {
          // commit('SET_MOVIES', res.data)
          res.data = JSON.parse(res.data)
          console.log(res)
          axios({
            url : 'https://twinword-emotion-analysis-v1.p.rapidapi.com/analyze/',
            method : 'get',
            params : {
              text : res.data.message.result.translatedText,
            },
            headers: {
              'X-RapidAPI-Host': 'twinword-emotion-analysis-v1.p.rapidapi.com',
              'X-RapidAPI-Key': 'deff775af3msha5b0f659f684f98p159503jsn9e7701c32e27'
            }
          })
            .then(res => {
              console.log(res.data.emotion_scores)
              var maxKey = _.maxBy(_.keys(res.data.emotion_scores), o=>res.data.emotion_scores[o])
              console.log(maxKey)
              var genrePk = 0
              if(maxKey === "anger"){
                genrePk = 35
              }else if(maxKey === "disgust"){
                genrePk = 10751
              }else if(maxKey === "fear"){
                genrePk = 16
              }else if(maxKey === "joy"){
                genrePk = 878
              }else if(maxKey === "sadness"){
                genrePk = 18
              }else if(maxKey === "surprise"){
                genrePk = 10402
              }
              dispatch('fetchGenreMovies', genrePk)
            })
            .catch(err => console.error(err))
        })
        .catch(err => {
          console.error(err)
          if (err.response.status === 404) {
            router.push({ name: 'NotFound404' })
          }
        })
    },
    likeMovie({commit, getters}, moviePk){
      axios({
        url : drf.movies.likeMovie(moviePk),
        method : 'post',
        headers : getters.authHeader,
      })
        .then(res => {
          commit('SET_MOVIE', res.data)
          console.log(res.data) 
        })
        .catch(err => console.error(err.response))
    }

  },
})
