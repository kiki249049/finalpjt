<template>
  <form @submit.prevent="onSubmit">
    <div>
      <label for="title">제목 : </label>
      <input v-model="newReview.title" type="text" id="title" />
    </div>
    <div>
      <label for="movie_title">영화제목 : </label>
      <input v-model="newReview.movie_title" type="text" id="movie_title" />
    </div>
    <div>
      <label for="rank">평점 : </label>
      <input v-model="newReview.rank" type="text" id="rank"/>
    </div>
    <div>
      <label for="content">내용 : </label>
      <textarea v-model="newReview.content" type="text" id="content"></textarea>
    </div>
    <div>
      <button>{{ action }}</button>
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex'

  export default {
    name: 'ReviewForm',
    props: {
      review: Object,
      action: String,
    },
    data() {
      return {
        newReview: {
          title: this.review.title,
          content: this.review.content,
          movie_title : this.review.movie_title,
          rank : parseFloat(this.review.rank),
        }
      }
    },

    methods: {
      ...mapActions(['createReview', 'updateReview']),
      onSubmit() {
        if (this.action === 'create') {
          this.createReview(this.newReview)
        } else if (this.action === 'update') {
          const payload = {
            pk: this.review.pk,
            ...this.newReview,
          }
          this.updateReview(payload)
        }
      },
    },
  }
</script>

<style></style>
