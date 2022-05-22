<template>
  <div>
    <h1>New Review</h1>
    <review-form :review="review" action="create"></review-form>
    
  </div>
</template>

<script>
  import ReviewForm from '@/components/ReviewForm.vue'
  import {mapActions } from 'vuex'
  export default {
    name: 'ReviewNewView',
    components: { ReviewForm },
    data() {
      return {
        review: {
          pk: null,
          title: '',
          content: '',
          rank : 0,
        }
      }
    },
    methods : {
      ...mapActions(['fetchMovie'])
    },
    created(){
      this.fetchMovie(this.$route.params.moviePk)
    }
  }
</script>

<style></style>
