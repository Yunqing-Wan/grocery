import {delCookie, getCookie} from '../tools/cookie.js'
export default {
  name: 'home',
  data () {
    return {
      msg: '898989'
    }
  },
  mounted(){
    //如果 不存在 admin wyq 用户, 就去登录页 /login
    if(!getCookie('admin')){
      console.log('admin 不存在');
      this.$router.push('/login')
    }
    // if(!getCookie('wyq')){
    //   console.log('wyq 不存在');
    //   location.hash = '#/login'
    // }
  },
  methods:{
    // 退出操作
    signOut(){
      delCookie('admin');
      delCookie('wyq');
      location.hash = '#/login'
      // location.reload()
    }
  }
}
