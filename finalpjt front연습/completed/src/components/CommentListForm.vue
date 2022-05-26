<template>
  <div class="comment-form">
     <div class="comment-avatar">
        <img src="http://www.ipon.co.kr/common/img/default_profile.png">
      </div>
    <form @submit.prevent="onSubmit" class="comment-list-form form">
      <div class="form-row mb-0">
        <textarea placeholder="Add comment..." class="input" type="text" id="comment" v-model="content" required></textarea>
      </div>
      <div class="form-row">
        <button class="btn btn-secondary mb-2">Comment</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'CommentListForm',
  data() {
    return {
      content: ''
    }
  },
  computed: {
    ...mapGetters(['review']),
  },
  methods: {
    ...mapActions(['createComment']),
    onSubmit() {
      this.createComment({ reviewPk: this.review.pk, content: this.content, })
      this.content = ''
    }
  }
}
</script>

<style scoped src="@/assets/styles/commentform.css">
.comment-list-form {
  border: 1px solid black;
  margin: 1rem;
  padding: 1rem;
}
</style>