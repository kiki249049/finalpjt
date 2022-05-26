import axios from 'axios'
import drf from '@/api/drf'
import router from '@/router'

import _ from 'lodash'

export default ({
  state: {
    movies : [],
    movie : {},
    genreId : 0,
    movieKey : "https://www.youtube.com/embed/Q7eWNIJGuoc?autoplay=1&playlist=Q7eWNIJGuoc&loop=1&mute=1"
  },
  getters: {
    movies : state => state.movies,
    movie : state => state.movie,
    isMovie : state => !_.isEmpty(state.movie),
    genreId : state => state.genreId,
    movieKey : state => state.movieKey
  },
  mutations: {
    SET_MOVIES : (state, movies) => state.movies = movies,
    SET_MOVIE : (state, movie) => state.movie = movie,
    SET_GENREID : (state, genreId) => {
      state.genreId = genreId
      console.log(state.genreId)
    },
    SET_MOVIEKEY : (state, movieKey) => {
      state.movieKey = movieKey
      console.log(state.movieKey)
    }
  },
  actions: {
    fetchMovies({commit, getters}){
      commit('SET_MOVIEKEY', "https://www.youtube.com/embed/Q7eWNIJGuoc?autoplay=1&playlist=Q7eWNIJGuoc&loop=1&mute=1")
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
      var movieKey = ""
      commit('SET_GENREID', genrePk)
      if(genrePk === 28){
        movieKey = "https://www.youtube.com/embed/vG7-hKnYcxQ?autoplay=1&playlist=vG7-hKnYcxQ&loop=1&mute=1" 
      }else if(genrePk === 14){
        movieKey = "https://www.youtube.com/embed/bjMFebB2Coo?autoplay=1&playlist=bjMFebB2Coo&loop=1&mute=1"
      }else if(genrePk === 27){
        movieKey = "https://www.youtube.com/embed/zcI6SFiK_yk?autoplay=1&playlist=zcI6SFiK_yk&loop=1&mute=1"
      }else if(genrePk === 10749){
        movieKey = "https://www.youtube.com/embed/A1PTIxYrTVw?autoplay=1&playlist=A1PTIxYrTVw&loop=1&mute=1"
      }else if(genrePk === 35){
        movieKey = "https://www.youtube.com/embed/iReeddMo_ao?autoplay=1&playlist=iReeddMo_ao&loop=1&mute=1"
      }else if(genrePk === 10751){
        movieKey = "https://www.youtube.com/embed/wo2myV-7la4?autoplay=1&playlist=wo2myV-7la4&loop=1&mute=1"
      }else if(genrePk === 16){
        movieKey = "https://www.youtube.com/embed/4A0muKc83Nc?autoplay=1&playlist=4A0muKc83Nc&loop=1&mute=1"
      }else if(genrePk === 878){
        movieKey = "https://www.youtube.com/embed/1Z3MXc8KloU?autoplay=1&playlist=1Z3MXc8KloU&loop=1&mute=1"
      }else if(genrePk === 18){
        movieKey = "https://www.youtube.com/embed/XpRmKWeLpjc?autoplay=1&playlist=XpRmKWeLpjc&loop=1&mute=1"
      }else if(genrePk === 10402){
        movieKey = "https://www.youtube.com/embed/TzAAtZx6xzk?autoplay=1&playlist=TzAAtZx6xzk&loop=1&mute=1"
      }
      commit("SET_MOVIEKEY", movieKey)
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
