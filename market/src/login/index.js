import {setCookie, getCookie} from '../tools/cookie.js'
export default{
  name: 'login',
  data(){
    return{
      showLogin: true,
      showRegister: false,
      ShowCue: false,
      cue: '',
      login: '请登录',
      register: '请注册',
      username: '',
      pwd: '',
      newUsername: '',
      newPwd: '',
      count: 5
    }
  },
  mounted(){
    //先判断页面是否存在 cookie, 存在 直接跳转主页, 不需要登录
    if(getCookie('admin')){
      console.log('admin登录')
      location.hash = '#/'
    }
    // if(getCookie('wyq')){
    //   console.log('wyq登录')
    //   location.hash = '#/'
    // }
  },
  methods:{
    //登录按钮
    loginIn(){
      var url = 'http://localhost:8000/api/db';
      var _this = this;
      this.$http.get(url).then(
        function(res){
          // console.log(res);
          // console.log(res.body.data);
          //后台 进行验证, 返回验证码
          var loginDb = res.body.data.loginDb;
          for(var k in loginDb){
            // console.log(k, loginDb[k]);
            //如果 用户名和密码 存在在后台 就登录
            if(this.username == k && this.pwd == loginDb[k]){
              this.ShowCue = true;
              this.cue = '登录成功';
              setCookie(this.username, this.pwd)
              // console.log(location);
              setTimeout(function(){
                location.hash = '#/'
              },1000)
            }else if(this.username != k){
              console.log('用户名不存在？',k);
              this.ShowCue = true;
              this.cue = '用户名不存在';
            }else if(this.username == k && this.pwd != loginDb[k]){
              this.ShowCue = true;
              this.cue = '密码不正确';
            }
          }
        }
      )
    },
    //显示注册页面
    ToRegister(){
      this.showRegister = true;
      this.showLogin = false;
    },
    //注册按钮
    registerIn(){
      //发请求, 放到后台数据库中
      // 进行后台判断 是否存在该用户名, 存在查验密码等... 成功返回 code提示
      var formData = $('.signOn').serialize();
      // var url = '';
      // this.$http.post(url,{content:formData},{emulateJSON:true}).then(
        // function(res){
          // console.log('发送成功',res);
        // }
      // )
      //5s 倒计时
      this.ShowCue = true;
      this.cue = this.count + 's之后跳转到登录页面';
      var _this = this;
      if(this.count >= 1){
        var timer = setInterval(function(){
          _this.count = _this.count - 1;
          _this.cue = _this.count + 's之后跳转到登录页面';
        },1000)
      }
      setTimeout(function(){
        clearInterval(timer);
        location.reload();
      },5000)

    },
    //显示登录页面
    ToLogin(){
      this.showRegister = false;
      this.showLogin = true;
    }
  }
}
