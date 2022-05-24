<template>
  <div>
    <h1>영화 제목 : {{ review.movie.title }}</h1>
    <h1>제목 : {{ review.title }}</h1>
    <p>생성시각 : {{ review.created_at | moment('YYYY-MM-DD HH:mm:ss') }}</p>
    <p>수정시각 : {{ review.updated_at | moment('YYYY-MM-DD HH:mm:ss')}}</p>

    <p>
      {{ review.content }}
    </p>
    <!-- Review Edit/Delete UI -->
    <div v-if="isAuthor">
      <router-link :to="{ name: 'reviewEdit', params: { reviewPk } }">
        <button>Edit</button>
      </router-link>
      |
      <button @click="deleteReview(reviewPk)">Delete</button>
    </div>

    <!-- Article Like UI -->
    <div>
      Likeit:
      <button
        @click="likeReview(reviewPk)"
      >{{ likeCount }}</button>
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
      ...mapGetters(['isAuthor', 'review']),
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

<style></style>
