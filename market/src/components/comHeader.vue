<template>
  <div class="header">
    <h1>{{ msg }}</h1>
    <div class="signOut" @click="signOut">sign out</div>
  </div>
</template>

<script>
  import {delCookie, getCookie} from '../tools/cookie.js'
  export default {
    data () {
      return {
      }
    },
    methods:{
    }
  }
</script>

<style scoped>

</style>
