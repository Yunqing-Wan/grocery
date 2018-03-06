// 用 export 把方法暴露出来
// set
export function setCookie(c_name, value, expire){
  window.localStorage.setItem(c_name, value);

  // var date = new Date(); //时间戳
  // date.setSeconds(date.getSeconds()+expire);
  // document.cookie = c_name + '=' + escape(value) + ';expires=' + date.toGMTString();
  // console.log(document.cookie);
}

// get
export function getCookie(c_name){
  return window.localStorage.getItem(c_name);

  // if (document.cookie.length>0){
  //   let c_start=document.cookie.indexOf(c_name + "=")
  //   if (c_start!=-1){
  //     c_start=c_start + c_name.length+1
  //     let c_end=document.cookie.indexOf(";",c_start)
  //     if (c_end==-1) c_end=document.cookie.length
  //       return unescape(document.cookie.substring(c_start,c_end))
  //     }
  //   }
  // return ""
}

//del
export function delCookie(c_name){
  window.localStorage.removeItem(c_name);

  // setCookie(c_name, "", -1)
}
