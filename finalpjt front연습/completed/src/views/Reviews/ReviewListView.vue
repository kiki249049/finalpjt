<template>
  <div>
    <div>
      <section>
        <h1>Community</h1>
        <h3>회원님들끼리 서로 소통할 수 있는 공간이에요</h3>
      </section>
    <br>
    <br>
    </div>
    <!-- 위 -->

    <div>
    <!-- 메인 컨테이너 -->
      <div class="comments-container">
        
        <ul id="comments-list" class="comments-list">
          <li v-for="review in reviews" :key="review.pk">
            <div class="comment-main-level">
              <!-- 아바타 -->
              <div class="comment-avatar"><img src="http://www.ipon.co.kr/common/img/default_profile.png" alt=""></div>
              <!-- 주석 컨테이너 -->
              <div class="comment-box">
                <div class="comment-head">
                  <h6 class="comment-name by-author">{{ review.user.username }}</h6>
                  <span><i class="fa fa-clock" style="color:#999; font-size: 12px;"> {{review.updated_at  | moment('YYYY-MM-DD / HH시 mm분')}}</i> </span>
                  <router-link :to="{ name: 'review', params: {reviewPk: review.pk} }"><i class="fa fa-search-plus" style="color:black"></i>
                  </router-link>
                  <br>
              <!-- 영화포스터 사진 -->
              <div class="column">
                <div class="container">
                  <main class="page-content d-flex justify-content-center row">
                    <div class="card1" :style="{ backgroundImage: 'url(' + `https://image.tmdb.org/t/p/w500${review.movie.poster_path}` + ')' } " >
                      <div class="content">
                        <h2 class="title">{{ review.movie.title }}</h2>
                        <!-- <button class="btn">View Trips</button> -->
                      </div>
                    </div>
                  </main>
                </div>

              </div>
                  <!-- <i class="fa fa-clock" style="color:black"></i> -->
                </div>
                <div class="comment-content">
                  Title : 
                  <router-link :to="{ name: 'review', params: {reviewPk: review.pk} }"> {{ review.title }}
                  </router-link>
                  <br>
                  <p style="color:black">평점 : <i class="fa fa-star my-1" aria-hidden="true" style="color:orange;"></i>{{ review.rank }}</p>
                  <i class="fa fa-heart" style="color:black"></i> like: {{ review.like_count }}
                  <br>
                  <i class="fa fa-comment" style="color:black"></i> comment: {{ review.comment_count }}
                  <br>
                </div>
              </div>
            </div>
            
          </li>


        </ul>
      </div>

    </div>
    
    



    
  </div>

</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  

  export default {
    name: 'ReviewList',
    computed: {
      ...mapGetters(['reviews'])
    },
    methods: {
      ...mapActions(['fetchReviews'])
    },
    created() {
      this.fetchReviews()
    },
  }
</script>

<style scoped src="@/assets/styles/reviewlistview.css">
</style>