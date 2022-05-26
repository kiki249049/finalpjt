<template>
  <!-- <form @submit.prevent="onSubmit">
    <div>
      <label for="title">제목 : </label>
      <input v-model="newReview.title" type="text" id="title" />
    </div>
    <div>
      <label>영화제목 : {{ movie.title }}</label>
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
   -->
   <div class="container" style="color : white;">
    <p style="font-size:1.5rem; text-align : center" class="mb-0 mt-3" >
      영화 재밌게 즐기셨나요?? 재밌게 즐기셨다면 리뷰를 남겨주세요!
    </p>
    <h2 class="my-2" style="text-align : center">
      영화제목 : {{ movie.title }}
    </h2>
    <!-- <div class="column">
      <div class="container">
        <main class="page-content d-flex justify-content-center row">
          <div class="card1" :style="{ backgroundImage: 'url(' + `https://image.tmdb.org/t/p/w500${movie.poster_path}` + ')' } " >
            <div class="content">
              <h2 class="title">{{ movie.title }}</h2>
            </div>
          </div>
        </main>
      </div>
    </div> -->
    <form @submit.prevent="onSubmit" id="review-form" action="index.html" method="post">
      <h2 class="my-2">영화의 리뷰를 남겨보세요!</h2>
      <div class="form-group">
        <label for="name" style="font-size:1.2rem" class="my-1">제목</label>
        <input v-model="newReview.title" class="form-control" type="text" placeholder="제목을 기입해주세요" name="name" id="name" value="">
      </div>
      <div id="rating" class="mt-2">
        <svg class="star" id="1" viewBox="0 12.705 512 486.59" x="0px" y="0px" xml:space="preserve" style="fill: #f39c12;">
          <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566"></polygon>
        </svg>
        <svg class="star" id="2" viewBox="0 12.705 512 486.59" x="0px" y="0px" xml:space="preserve" style="fill: #f39c12;">
          <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566"></polygon>
        </svg>
        <svg class="star" id="3" viewBox="0 12.705 512 486.59" x="0px" y="0px" xml:space="preserve" style="fill: #f39c12;">
          <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566"></polygon>
        </svg>
        <svg class="star" id="4" viewBox="0 12.705 512 486.59" x="0px" y="0px" xml:space="preserve" style="fill: #f39c12;">
          <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566"></polygon>
        </svg>
        <svg class="star" id="5" viewBox="0 12.705 512 486.59" x="0px" y="0px" xml:space="preserve" style="fill: #808080;">
          <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566"></polygon>
        </svg>
      </div>
      <span id="starsInfo" class="help-block" style="font-size:1.5rem">
        {{ currentUser.username }}님이 생각하는 영화의 평점을 알려주세요
      </span>
      <div class="form-group">
        <label class="control-label my-1" for="review" style="font-size:1.2rem">내용</label>
        <textarea v-model="newReview.content" class="form-control" rows="10" placeholder="내용을 기입해주세요" name="review" id="review"></textarea>
        <span id="reviewInfo" class="help-block pull-right">
          <span id="remaining">999</span> Characters remaining
        </span>
      </div>
      <!-- <h2>Your Info:</h2>
      <div class="form-group">
        <label for="name">Name:</label>
        <input class="form-control" type="text" placeholder="Name" name="name" id="name" value="">
      </div>
      <div class="form-group">
        <label for="city">City:</label>
        <input class="form-control" type="text" placeholder="City" name="city" id="city" value="">
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input class="form-control" type="text" placeholder="Email" name="email" id="email" value="">
      </div> -->
      <a href="#" id="submit" class="btn btn-primary" style="font-size:1rem">Submit</a>
      <input id="submitForm" type="submit" style="display:none;">
      <span id="submitInfo" class="help-block" style="font-size:1.5rem">
        이제 사람들과 영화에 대해 소통해볼까요?
      </span>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

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
          rank : parseFloat(this.review.rank),
          // movie : this.$route.params.moviePk
        }
      }
    },
    computed : {
      ...mapGetters(['movie','currentUser'])
      
    },
    methods: {
      ...mapActions(['createReview', 'updateReview']),
      onSubmit() {
        if (this.action === 'create') {
          console.log(this.newReview.rank)
          this.createReview({ moviePk: this.movie.id, review: this.newReview})
        } else if (this.action === 'update') {
          const payload = {
            pk: this.review.pk,
            ...this.newReview,
          }
          this.updateReview(payload)
        }
      },
    },
    mounted(){
      function starsReducer(state, action) {
    switch (action.type) {
      case 'HOVER_STAR': {
        return {
          starsHover: action.value,
          starsSet: state.starsSet
        }
      }
      case 'CLICK_STAR': {
        return {
          starsHover: state.starsHover,
          starsSet: action.value
        }
      }
        // break;
      default:
        return state
    }
  }

  var StarContainer = document.getElementById('rating');
  var StarComponents = StarContainer.children;

  var state = {
    starsHover: 0,
    starsSet: 4
  }

  function render(value) {
    for(var i = 0; i < StarComponents.length; i++) {
      StarComponents[i].style.fill = i < value ? '#f39c12' : '#808080'
    }
  }

  for (var i=0; i < StarComponents.length; i++) {
    StarComponents[i].addEventListener('mouseenter', function() {
      state = starsReducer(state, {
        type: 'HOVER_STAR',
        value: this.id
      })
      render(state.starsHover);
    })

    StarComponents[i].addEventListener('click', function() {
      state = starsReducer(state, {
        type: 'CLICK_STAR',
        value: this.id
      })
      render(state.starsHover);
    })
  }

  StarContainer.addEventListener('mouseleave', function() {
    render(state.starsSet);
  })

  var review = document.getElementById('review');
  var remaining = document.getElementById('remaining');
  review.addEventListener('input', function(e) {
    review.value = (e.target.value.slice(0,999));
    remaining.innerHTML = (999-e.target.value.length);
  })

  var button = document.getElementById("submit")
  var temp = 0
  button.addEventListener('click', (e) => {
    e.preventDefault();
    var post = {
      stars: state.starsSet,
    }
    // this.newReview.rank = (post.stars)*2
    console.log(post)
    temp = post.stars * 2
    console.log(temp)
    // console.log(this.newReview.title)
    // console.log(this.newReview.rank)
    this.newReview.rank = temp
    console.log(this.newReview.rank)
  })
  document.getElementById('submit').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('submitForm').click();
  })


    }
  }
</script>

<style scoped src="@/assets/styles/reviewform.css">
</style>
