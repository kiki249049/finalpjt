import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

import ReviewListView from '@/views/Reviews/ReviewListView.vue'
import ReviewDetailView from '@/views/Reviews/ReviewDetailView.vue'
import ReviewNewView from '@/views/Reviews/ReviewNewView'
import ReviewEditView from '@/views/Reviews/ReviewEditView'

import LoginView from '@/views/accounts/LoginView.vue'
import LogoutView from '@/views/accounts/LogoutView.vue'
import SignupView from '@/views/accounts/SignupView.vue'
import ProfileView from '@/views/accounts/ProfileView.vue'
import NotFound404 from '../views/NotFound404.vue'

import MovieListView from '@/views/movies/MovieListView.vue'
import MovieListItem from '@/views/movies/MovieListItem.vue'
// import MovieDetailView from '@/views/movies/MovieDetailView.vue'

Vue.use(VueRouter)

const routes = [
  /*
  accounts
    /login => LoginView
    /logout => LogoutView
    /signup => SignupView
    /profile/:username => ProfileView
  
  articles
    / => ArticleListView
    /articles/new => ArticleNewView
    /articles/:articlePk => ArticleDetailView
    /articles/:articlePk/edit => ArticleEditView
    /404 => NotFound404
    * => /404
  */
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/logout',
    name: 'logout',
    component: LogoutView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView
  },
  {
    path: '/profile/:username',  // /profile/neo
    name: 'profile',
    component: ProfileView,
  },
  {
    path: '/reviews',  // Home
    name: 'reviews',
    component: ReviewListView
  },
  {
    path: '/reviews/new',
    name: 'reviewNew',
    component: ReviewNewView
  },
  {
    path: '/reviews/:reviewPk',
    name: 'review',
    component: ReviewDetailView
  },
  {
    path: '/reviews/:reviewPk/edit',
    name: 'reviewEdit',
    component: ReviewEditView
  },
  // movies
  {
    path: '/movies',
    name: 'movies',
    component: MovieListView
  },
  {
    path: '/movies/:moviePk',
    name: 'MovieListItem',
    component: MovieListItem
  },
  //
  {
    path: '/404',
    name: 'NotFound404',
    component: NotFound404
  },
  {
    path: '*',
    redirect: '/404'
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  // 이전 페이지에서 발생한 에러메시지 삭제
  store.commit('SET_AUTH_ERROR', null)

  const { isLoggedIn } = store.getters

  const noAuthPages = ['login', 'signup']

  const isAuthRequired = !noAuthPages.includes(to.name)

  if (isAuthRequired && !isLoggedIn) {
    alert('서비스를 이용하시려면 로그인 해주세요.')
    next({ name: 'login' })
  } else {
    next()
  }

  if (!isAuthRequired && isLoggedIn) {
    next({ name: 'reviews' })
  }
})

/*
Navigation Guard 설정
  (이전 페이지에서 있던 에러 메시지 삭제)

  로그인(Authentication)이 필요 없는 route 이름들 저장(/login, /signup)

  0. router 에서 이동 감지

  1. 현재 이동하고자 하는 페이지가 로그인이 필요한지 확인
  
  2. 로그인이 필요한 페이지인데 로그인이 되어있지 않다면
    로그인 페이지(/login)로 이동

  3. 로그인이 되어 있다면
    원래 이동할 곳으로 이동
  
  4. 로그인이 되어있는데 /login, /signup 페이지로 이동한다면
    메인 페이지(/)로 이동
    

*/

export default router
