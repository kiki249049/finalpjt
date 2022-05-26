<template>
  <div id="reviewDetail" style="color:white; background-image: url(https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb5QBKm%2FbtrC74ycIZ2%2Fg6tTjufeqnMVTIa4YJ9jgk%2Fimg.jpg); background-size: cover; background-position: center;  width: 50vw; margin-left: 500px;">
    <!-- <h1>영화 제목 : {{ review.movie.title }}</h1>
    <h1>제목 : {{ review.title }}</h1>
    <p>생성시각 : {{ review.created_at | moment('YYYY-MM-DD / HH시 mm분') }}</p>
    <p>수정시각 : {{ review.updated_at | moment('YYYY-MM-DD / HH시 mm분')}}</p>
    <p style="font-size : 1.5rem">{{ review.user.username }}님이 준 영화평점 : <i class="fa fa-star my-1" aria-hidden="true" style="color:orange;"></i>{{ review.rank }}</p>

    <p>
      {{ review.content }}
    </p> -->
    <article class="post">
    <header class="post-header">
      <div class="content post-header-inner">
        <h1 style = "color:white;">{{ review.title }}</h1>
  
        <time class="post-date">생성시각 : {{ review.created_at | moment('YYYY-MM-DD / HH시 mm분') }}</time>
        <time class="post-date">수정시각 : {{ review.updated_at | moment('YYYY-MM-DD / HH시 mm분')}}</time>
        <div class="post-meta">
          <div class="column">
                <div class="container">
                  <main class="page-content row">
                    <div class="card1" :style="{ backgroundImage: 'url(' + `https://image.tmdb.org/t/p/w500${review.movie.poster_path}` + ')' } " >
                      <div class="content">
                        <h2 class="title" style="font-size:1.5rem">{{ review.movie.title }}</h2>
                        <!-- <button class="btn">View Trips</button> -->
                      </div>
                    </div>
                  </main>
                </div>
          </div>
          <span class="author">작성자 : <span class="author-name">{{ review.user.username }}</span></span>
  
        </div>
      </div>
    </header>
    
    <div class="post-content">
      <div class="content">
        
       <!-- <h2>{{ review.title }}</h2> -->
      <p class="note"><span>평점 : </span><i class="fa fa-star my-1" aria-hidden="true" style="color:orange;"></i>{{ review.rank }}</p>
        
      <p>{{ review.content }}</p>
      </div>
    </div>
  </article>
    <!-- Review Edit/Delete UI -->
    <div v-if="isAuthor" class="my-2 d-flex justify-content-center">
      <router-link :to="{ name: 'reviewEdit', params: { reviewPk } }">
        <button class="btn btn-secondary">Edit</button>
      </router-link>
      |
      <button class="btn btn-danger" @click="deleteReview(reviewPk)">Delete</button>
    </div>

    <!-- Article Like UI -->
    <div class="my-2 d-flex justify-content-center">
      <button
        @click="likeReview(reviewPk)" class="btn btn-primary mx-2"
      ><i class="material-icons md-36">thumb_up</i> {{ likeCount }}</button>
    </div>

    <hr />
    <!-- Comment UI -->
    <comment-list :comments="review.comments"></comment-list>

  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import CommentList from '@/components/CommentList.vue'
  import Vue from 'vue'
  import vueMoment from 'vue-moment'
  Vue.use(vueMoment)


  export default {
    name: 'ReviewDetail',
    components: { CommentList },
    data() {
      return {
        reviewPk: this.$route.params.reviewPk,
      }
    },
    computed: {
      ...mapGetters(['isAuthor', 'review','currentUser']),
      likeCount() {
        return this.review.like_users?.length
      }
    },
    methods: {
      ...mapActions([
        'fetchReview',
        'likeReview',
        'deleteReview',
      ])
    },
    created() {
      this.fetchReview(this.reviewPk)
    },
  }
</script>

<style scoped src="@/assets/styles/reviewdetail.css">
</style>
