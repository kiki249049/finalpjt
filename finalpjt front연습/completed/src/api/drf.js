const HOST = 'http://127.0.0.1:8000/api/v1/'

const ACCOUNTS = 'accounts/'
const REVIEWS = 'community/'
const COMMENTS = 'comments/'
const MOVIES = 'movies/'

export default {
  accounts: {
    login: () => HOST + ACCOUNTS + 'login/',
    logout: () => HOST + ACCOUNTS + 'logout/',
    signup: () => HOST + ACCOUNTS + 'signup/',
    // Token 으로 현재 user 판단
    currentUserInfo: () => HOST + ACCOUNTS + 'user/',
    // username으로 프로필 제공
    profile: username => HOST + ACCOUNTS + 'profile/' + username,
  },
  reviews: {
    // /articles/
    reviews: () => HOST + REVIEWS,
    createreview: (moviePk) => HOST + REVIEWS + `${moviePk}/` + 'reviews/',
    // /articles/1/
    review: reviewPk => HOST + REVIEWS + `${reviewPk}/`,
    likeReview: reviewPk => HOST + REVIEWS + `${reviewPk}/` + 'like/',
    comments: reviewPk => HOST + REVIEWS + `${reviewPk}/` + COMMENTS,
    comment: (reviewPk, commentPk) =>
      HOST + REVIEWS + `${reviewPk}/` + COMMENTS + `${commentPk}/`,
  },
  movies : {
    // movies
    movies : () => HOST + MOVIES,
    // movie
    movie : moviePk => HOST + MOVIES + `${moviePk}/`,
    // popular_movies
    popularMovies : () => HOST + MOVIES + 'popular/',
    // recommend by emotion
    emotionMovies : () => HOST + MOVIES + 'recommend/',
    // Genre Movies
    genreMovies : (genrePk) => HOST + MOVIES + `${genrePk}/`

  }
}
