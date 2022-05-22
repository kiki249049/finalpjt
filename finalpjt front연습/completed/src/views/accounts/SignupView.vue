<template>
  <div>
    <!-- <h1>Signup</h1> -->

    <account-error-list v-if="authError"></account-error-list>

    <!-- <form @submit.prevent="signup(credentials)">
      <div>
        <label for="username">Username: </label>
        <input  v-model="credentials.username" type="text" id="username" required/>
      </div>
      <div>
        <label for="password1">Password: </label>
        <input v-model="credentials.password1" type="password" id="password1" required />
      </div>
      <div>
        <label for="password2">Password Confirmation:</label>
        <input v-model="credentials.password2" type="password" id="password2" required />
      </div>
      <div>
        <button>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Signup
          </button>
      </div>
    </form> -->

    <form @submit.prevent="signup(credentials)">
    <input id="input-1" type="text" placeholder="아이디를 입력해주세요." v-model="credentials.username" required autofocus/>
    <label for="input-1">
      <span class="label-text">Username</span>
      <span class="nav-dot"></span>
      <div class="signup-button-trigger">Sign Up</div>
    </label>
    <!-- <input id="input-2" type="email" placeholder="email@address.com"  />
    <label for="input-2">
      <span class="label-text">Email</span>
      <span class="nav-dot"></span>
    </label> -->
    <input id="input-2" type="password" placeholder="비밀번호를 입력해주세요" v-model="credentials.password1" required />
    <label for="input-2">
      <span class="label-text">Password</span>
      <span class="nav-dot"></span>
    </label>
    <input id="input-3" type="password" placeholder="비밀번호를 확인해주세요" v-model="credentials.password2" required />
    <label for="input-3">
      <span class="label-text">Confirm Password</span>
      <span class="nav-dot"></span>
    </label>
    <button type="submit">이제 영화보러 갈까요?</button>
    <p class="tip">Press Tab</p>
    <div class="signup-button">MOODIE X와 함께 하시겠어요?</div>
  </form>
    
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import AccountErrorList from '@/components/AccountErrorList.vue'

  export default {
    name: 'SignupView',
    components: {
      AccountErrorList,
    },
    data() {
      return {
        credentials: {
          username: '',
          password1: '',
          password2: '',
        }
      }
    },
    computed: {
      ...mapGetters(['authError'])
    },
    methods: {
      ...mapActions(['signup'])
    },
  }
</script>

<style scoped src="@/assets/styles/signup.css">
</style>
