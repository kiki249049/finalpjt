<template>
  <div class="comment-list">
    
    <comment-list-form></comment-list-form>
    <div class="comments">
      <comment-list-item 
        v-for="comment in comments" 
        :comment="comment" 
        :key="comment.pk">
      </comment-list-item>        
    </div>

  </div>
</template>

<script>
import CommentListItem from '@/components/CommentListItem.vue'
import CommentListForm from '@/components/CommentListForm.vue'
// import { mapGetters, mapActions } from 'vuex'


export default {
  name: 'CommentList',
  components: { CommentListForm, CommentListItem },
  props: { comments: Array },
}
</script>

<style scoped src="@/assets/styles/commentlist.css">
/* .comment-list {
  border: 1px solid blue;
} */
</style>