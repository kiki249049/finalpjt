<template>
  <div class="comment">
    <div class="comment-avatar">
      <img src="http://www.ipon.co.kr/common/img/default_profile.png">
    </div>
    <div class="comment-box">
      <div v-if="!isEditing" class="comment-text">{{ payload.content }}</div>
      <div class="comment-footer">
      </div>
      <div class="comment-form">
        <div v-if="isEditing" class="form">
          <div class="comment-text form-row">
          <textarea class="input" id="comment" type="text" v-model="payload.content"></textarea>
          </div>
        </div>
      </div>
    </div>
    <!-- <span v-if="!isEditing">{{ payload.content }}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -->
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <span>생성시각 : {{ comment.created_at | moment('YYYY-MM-DD HH:mm:ss') }}</span> /
    <span>수정시각 : {{ comment.updated_at | moment('YYYY-MM-DD HH:mm:ss')}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 작성자 :
    <router-link :to="{ name: 'profile', params: { username: comment.user.username } }">
        {{ comment.user.username }}
      </router-link>
    <!-- <div v-if="isEditing">
      <div class="comment-text">
      <input type="text" v-model="payload.content">
      <button class="btn btn-warning" @click="onUpdate">Update</button> |
      <button class="btn btn-dark" @click="switchIsEditing">Cancle</button>
      </div>
    </div> -->
    <!-- <span v-if="isEditing">
      <input type="text" v-model="payload.content">
      <button class="btn btn-warning" @click="onUpdate">Update</button> |
      <button class="btn btn-dark" @click="switchIsEditing">Cancle</button>
    </span> -->

    <span v-if="currentUser.username === comment.user.username && !isEditing">
      <button class="btn btn-secondary" @click="switchIsEditing">Edit</button> |
      <button class="btn btn-danger" @click="deleteComment(payload)">Delete</button>
    </span>
    <span v-if="isEditing">
      <button class="btn btn-warning" @click="onUpdate">Update</button> |
      <button class="btn btn-dark" @click="switchIsEditing">Cancle</button>
    </span>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Vue from 'vue'
import vueMoment from 'vue-moment'
Vue.use(vueMoment)

export default {
  name: 'CommentListItem',
  props: { comment: Object },
  data() {
    return {
      isEditing: false,
      payload: {
        reviewPk: this.comment.review,
        commentPk: this.comment.pk,
        content: this.comment.content
      },
    }
  },
  computed: {
    ...mapGetters(['currentUser']),
  },
  methods: {
    ...mapActions(['updateComment', 'deleteComment']),
    switchIsEditing() {
      this.isEditing = !this.isEditing
    },
    onUpdate() {
      this.updateComment(this.payload)
      this.isEditing = false
    }
  },

}
</script>

<style scoped src="@/assets/styles/commentitem.css">
.comment-list-item {
  border: 1px solid green;

}
</style>