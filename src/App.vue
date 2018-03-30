<template>
  <div>
      <div class="top_nav">
        <div id="logo" class="cl">
          <img src="https://o4j806krb.qnssl.com/public/images/cnodejs_light.svg" alt="" class="fl logo">
          <input type="text" class="search_input fl" :class="{'input_focus': hover}" @mouseover="hover=true"  @mouseout="(focus==true)?hover=true:hover=false"   @focus="focus=true"   @blur="searchBlur">
          <ul class="nav_router fr ">
            <li class="fl">
              <router-link :to="{name:'Index'}" >首页</router-link>
            </li>
            <li class="fl">
              <router-link :to="{name:'Tiro'}" >新手入门</router-link>
            </li>
            <li class="fl">
              <router-link :to="{name:'Api'}" >API</router-link>
            </li>
      <!--      <li class="fl">
              <router-link :to="{name:'about'}">关于</router-link>
            </li>
            <li class="fl">
              <router-link :to="{name:'tiro'}">注册</router-link>
            </li>
            <li class="fl">
              <router-link :to="{name:'login'}">登陆</router-link>
            </li> -->
          </ul>
        </div>
      </div>
      <div class="main" >
          <div class="routerView">
              <router-view></router-view>
          </div>
          <div class="main_right">
            
          </div>
      </div>
      <div id="footer">

      </div>

  </div>
</template>

<script>
export default {
  name: 'App',
  data:function () {
    return {
            indexList:[],//首页数据
            topics:{
              page:1, //当前页数
              tab:'all', //主题分类
              limit:40,  //每一页的主题数量
              mdrender:true
            },
            hover:false,
            focus:false,
    }
  },
  methods:{
    searchBlur:function(){
      this.hover = false;
      this.focus = false;
    }
  }
}
</script>

<style lang="scss" scoped>
.top_nav{
  background-color:#444;
  padding:0.1rem;
  padding-bottom:8px;
  #logo{

  min-width: 980px;
  max-width:1400px;
  margin:0 auto;
  padding:0.1rem;
    .logo{
      width:120px;
      margin-right:25px;
    }
    .search_input{
      background: url('https://o4j806krb.qnssl.com/public/images/search.e53b380a.hashed.png') 4px 4px no-repeat #888;
      margin-top:0.2rem;
      width:240px;
      height:26px;
      line-height:26px;
      border-radius:26px;
      padding-left:25px;
      color:#000;
      margin-top:0.2rem;
      transition:all 0.4s linear;
    }
    .input_focus{background-color:#fff;}
  }
  .nav_router{
      padding-top:5px;
    li{
      color:#fff;
      padding-right:25px ;
      font-size:0.48rem;
      height:25px;
      line-height:25px;
      color:#ccc;
      a{

      height:25px;
      line-height:25px;
      color:#ccc;
      display: inline-block;
      }
    }
    li:hover{
      color:#fff;
    }
  }
}
.main{
  margin:20px auto 20px;
  min-width: 980px;
  max-width:1400px;
  .routerView{

  padding-bottom:10px;
  background:#fff;
    margin-right:305px;
  }
}

#footer{
    position: relative;    
    clear: both;
    background: #fff;
}

</style>
