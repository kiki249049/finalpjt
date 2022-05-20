<template>
  <div>
    <section>
      <h1>Community</h1>
      <h3>회원님들끼리 서로 소통할 수 있는 공간이에요</h3>
    </section>
    <br>
    <br>
    <br>
    <br>

    <div class="listcard">
      <ul class="mylist">
        <li v-for="review in reviews" :key="review.pk">
          <!-- 작성자 -->
          {{ review.user.username }} : 

          <!-- 글 이동 링크 (제목) -->
          <router-link 
            :to="{ name: 'review', params: {reviewPk: review.pk} }">
            {{ review.title }}
          </router-link>
          <br>
          <br>

          <!-- 댓글 개수/좋아요 개수 -->
          <i class="fa fa-comment" style="color:black"></i>: {{ review.comment_count }}  |  <i class="fa fa-heart" style="color:black"></i> : {{ review.like_count }}

        </li>
      </ul>
    </div>  
    <br>
    <br>
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