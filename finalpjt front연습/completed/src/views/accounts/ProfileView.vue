<template>
  <div>


    <!-- 배경 -->
    <section>
      <h1>{{ profile.username }}'s page</h1>
      <h4>{{ profile.username }}님이 작성한 리뷰과 좋아요 한 리뷰를 확인해보세요</h4>

    </section>

    <!-- <h5 style="color:black">작성한 글</h5>
    <ul>
      <li v-for="review in profile.reviews" :key="review.pk">
        <router-link :to="{ name: 'review', params: { reviewPk: review.pk } }">
          {{ review.title }}
        </router-link>
      </li>
    </ul>

    <h5 style="color:black">좋아요 한 글</h5>
    <ul>
      <li v-for="review in profile.like_reviews" :key="review.pk">
        <router-link :to="{ name: 'review', params: { reviewPk: review.pk } }">
          {{ review.title }}
        </router-link>
      </li>
    </ul> -->
    <br>
    <br>
    <br>
    <br>
    <!-- 카드 -->
    <div class="profilecards">
      <div class="card">
        <div class="icon"><i class="material-icons md-36" @click="firstmodal = true">face</i></div>
        <p class="title">작성한 글</p>
        <p class="text">누르면 내가 작성한 글이 확인 가능</p>

      </div>

      <div class="card">
        <div class="icon"><i class="material-icons md-36" @click="secondmodal = true">favorite_border</i></div>
        <p class="title">좋아요 한 글</p>
        <p class="text">누르면 내가 좋아요 한 글 확인 가능</p>
      </div>

      <div class="card">
        <div class="icon"><i class="material-icons md-36" @click="thirdmodal = true">movie_filter</i></div>
        <p class="title">찜한 영화</p>
        <p class="text">누르면 내가 찜한 영화 확인 가능</p>
      </div>


    </div>
    <br>

    <br>
    <br>

        <!-- 작성한 글 모달창 -->
    <!-- <div class="black-bg" v-if="firstmodal == true">
      <div class="red-bg">
        <div class="modaltext">
          작성한 게시글 목록들
          <div>
            <ul>
              <li v-for="review in profile.reviews" :key="review.pk">
                <router-link :to="{ name: 'review', params: { reviewPk: review.pk } }">
                  {{ review.title }}
                </router-link>
              </li>
            </ul>
            <ul>
              <li v-for="review in reviews" :key="review.pk"> -->
                <!-- 작성자 -->
                <!-- {{ review.user.username }} :  -->

                <!-- 글 이동 링크 (제목) -->
                <!-- <router-link 
                  :to="{ name: 'review', params: {reviewPk: review.pk} }">
                  {{ review.title }}
                </router-link> -->

                <!-- 댓글 개수/좋아요 개수 -->
                
                <!-- 댓글 갯수 : {{ review.comment_count }} | 좋아요 갯수 : {{ review.like_count }} -->

              <!-- </li>
            </ul>
          </div>
          <br>
          <br>
          <br>
          <button class="closebutton" @click="firstmodal = false">close</button>
        </div>
        <br>
        
      </div>
    </div> -->

    <!-- 좋아요 한 글 모달창 -->
    <!-- <div class="black-bg" v-if="secondmodal == true">
      <div class="red-bg">
        <div class="modaltext">
          좋아요 한 게시글 목록
          <div>
            <ul>
              <li v-for="review in profile.like_reviews" :key="review.pk">
                <router-link :to="{ name: 'review', params: { reviewPk: review.pk } }">
                  {{ review.title }}
                </router-link>                
              </li>
            </ul>
            
          </div>
          
          <br>
          <br>
          <br>
          <button class="closebutton" @click="secondmodal = false">close</button>
        </div>

        <br>
        
      </div>
    </div> -->
    <!-- 원래 만든거 끝 -->



    <!-- 작성한 영화 보여주는 모달창입니다 -->
    <div class="black-bg" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" v-if="firstmodal == true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <div class="column" id="main">
              <h2 style="color:black"><i class="material-icons md-36" style="color:gold">face</i></h2>
              <h3 style="color:black">회원님이 작성한 리뷰를 보여드립니다.</h3>
              
              <ul>
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
                  <i class="fa fa-comment" style="color:white"></i>: {{ review.comment_count }}  |  <i class="fa fa-heart" style="color:white"></i> : {{ review.like_count }}

                </li>
              </ul>
                         
              
              <br>
              <br>
              <button class="btn btn-primary" @click="firstmodal = false">닫기</button>
            </div>

            <!-- 구분선 -->
            <div>
              <svg width="67px" height="578px" viewBox="0 0 67 578" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <!-- Generator: Sketch 53.2 (72643) - https://sketchapp.com -->
                <title>Path</title>
                <desc>Created with Sketch.</desc>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <path d="M11.3847656,-5.68434189e-14 C-7.44726562,36.7213542 5.14322917,126.757812 49.15625,270.109375 C70.9827986,341.199016 54.8877465,443.829224 0.87109375,578 L67,578 L67,-5.68434189e-14 L11.3847656,-5.68434189e-14 Z" id="Path" fill="#F9BC35"></path>
                </g>
              </svg>
            </div>

            <!-- 오른쪽 예매창 내용 -->
            <div class="column" id="secondary">
              <div class="sec-content">
                <h2>Welcome Back~</h2>
                <h3>영화 예매 사이트로 이동합니다.</h3>
                <button type="button" class="btn btn-primary" style="color:white; margin-bottom: 0px; border-radius:8px;" onclick="window.open('https://www.cgv.co.kr/')">CGV</button>
                <button type="button" class="btn btn-primary" style="color:white; margin-bottom: 0px; border-radius:8px;" onclick="window.open('https://www.megabox.co.kr/')">MEGABOX</button>
                <button type="button" class="btn btn-primary" style="color:white; margin-bottom: 0px; border-radius:8px;" onclick="window.open('https://www.lottecinema.co.kr/NLCHS')">Lotte Cinema</button>
              </div>
            </div>
         
          </div>
        </div>
      
      </div>
    </div>
    <!-- 끝 -->








    <!-- 좋아요 한 영화 보여주는 모달창입니다 -->
    <div class="black-bg" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" v-if="secondmodal == true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <div class="column" id="main">
              <h2 style="color:black"><i class="material-icons md-36" style="color:gold">favorite_border</i></h2>
              <h3 style="color:black">회원님이 좋아요 한 리뷰를 보여드립니다.</h3>
              
              <ul>
                <li v-for="review in profile.like_reviews" :key="review.pk">
                  <router-link :to="{ name: 'review', params: { reviewPk: review.pk } }" style="color:black">
                    {{ review.title }}
                  </router-link>                
                </li>
              </ul>              
              
              <br>
              <br>
              <button class="btn btn-primary" @click="secondmodal = false">닫기</button>
            </div>

            <!-- 구분선 -->
            <div>
              <svg width="67px" height="578px" viewBox="0 0 67 578" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <!-- Generator: Sketch 53.2 (72643) - https://sketchapp.com -->
                <title>Path</title>
                <desc>Created with Sketch.</desc>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <path d="M11.3847656,-5.68434189e-14 C-7.44726562,36.7213542 5.14322917,126.757812 49.15625,270.109375 C70.9827986,341.199016 54.8877465,443.829224 0.87109375,578 L67,578 L67,-5.68434189e-14 L11.3847656,-5.68434189e-14 Z" id="Path" fill="#F9BC35"></path>
                </g>
              </svg>
            </div>

            <!-- 오른쪽 예매창 내용 -->
            <div class="column" id="secondary">
              <div class="sec-content">
                <h2>Welcome Back~</h2>
                <h3>영화 예매 사이트로 이동합니다.</h3>
                <button type="button" class="btn btn-primary" style="color:white; margin-bottom: 0px; border-radius:8px;" onclick="window.open('https://www.cgv.co.kr/')">CGV</button>
                <button type="button" class="btn btn-primary" style="color:white; margin-bottom: 0px; border-radius:8px;" onclick="window.open('https://www.megabox.co.kr/')">MEGABOX</button>
                <button type="button" class="btn btn-primary" style="color:white; margin-bottom: 0px; border-radius:8px;" onclick="window.open('https://www.lottecinema.co.kr/NLCHS')">Lotte Cinema</button>
              </div>
            </div>
         
          </div>
        </div>
      
      </div>
    </div>
    <!-- 끝 -->







    <!-- 찜한 영화 보여주는 모달창입니다 -->
    <div class="black-bg" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" v-if="thirdmodal == true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <div class="column" id="main">
              <h2 style="color:black"><i class="material-icons md-36" style="color:gold">movie_filter</i></h2>
              <h3 style="color:black">회원님이 찜한 영화를 보여드립니다.</h3>
              
              <ul>
                <li v-for="review in profile.like_reviews" :key="review.pk">
                  <router-link :to="{ name: 'review', params: { reviewPk: review.pk } }" style="color:black">
                    {{ review.title }}
                  </router-link>                
                </li>
              </ul>              
              
              <br>
              <br>
              <button class="btn btn-primary" @click="thirdmodal = false">닫기</button>
            </div>

            <!-- 구분선 -->
            <div>
              <svg width="67px" height="578px" viewBox="0 0 67 578" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <!-- Generator: Sketch 53.2 (72643) - https://sketchapp.com -->
                <title>Path</title>
                <desc>Created with Sketch.</desc>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <path d="M11.3847656,-5.68434189e-14 C-7.44726562,36.7213542 5.14322917,126.757812 49.15625,270.109375 C70.9827986,341.199016 54.8877465,443.829224 0.87109375,578 L67,578 L67,-5.68434189e-14 L11.3847656,-5.68434189e-14 Z" id="Path" fill="#F9BC35"></path>
                </g>
              </svg>
            </div>

            <!-- 오른쪽 예매창 내용 -->
            <div class="column" id="secondary">
              <div class="sec-content">
                <h2>Welcome Back~</h2>
                <h3>영화 예매 사이트로 이동합니다.</h3>
                <button type="button" class="btn btn-primary" style="color:white; margin-bottom: 0px; border-radius:8px;" onclick="window.open('https://www.cgv.co.kr/ticket')"><img src="@/assets/cgvlogo.png" alt="CGV로고" style="height:30px"></button>
                <button type="button" class="btn btn-primary" style="color:white; margin-bottom: 0px; border-radius:8px;" onclick="window.open('https://www.megabox.co.kr/booking')"><img src="@/assets/megaboxlogo.png" alt="MEGABOX로고" style="height:30px"></button>
                <button type="button" class="btn btn-primary" style="color:white; margin-bottom: 0px; border-radius:8px;" onclick="window.open('https://www.lottecinema.co.kr/NLCHS/Ticketing')"><img src="@/assets/lottecinemalogo.png" alt="lottecinema로고" style="height:30px"></button>
              </div>
            </div>
         
          </div>
        </div>
      
      </div>
    </div>
    <!-- 끝 -->





  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'


export default {
  name: 'ProfileView',
  data(){
    return{
      firstmodal : false,
      secondmodal : false,
      thirdmodal : false,
    }
  },
  computed: {
    ...mapGetters(['profile'])
  },
  methods: {
    ...mapActions(['fetchProfile'])
  },
  created() {
    const payload = { username: this.$route.params.username }
    this.fetchProfile(payload)
  },
}
</script>

<style scoped src="@/assets/styles/profile.css">
</style>
