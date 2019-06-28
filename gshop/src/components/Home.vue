<template>
  <div class="Home">
    <van-search v-model="title" placeholder="请输入搜索关键词" show-action shape="round">
    <div slot="action" @click="search">搜索</div>
    </van-search>
    <van-pagination v-show="cheak" v-model="row" :page-count="49" mode="simple" @click="initApp"/><br>
    <van-row gutter="20">
    <div v-for="(i,index) in VideoList">
        <van-col span="8">
          <div @click="show = true,url=i.url">
            <img width="98%"  :src= i.img_url />
            <div>
              <b>{{i.title |elipsis}}</b>
            </div>
            <p>{{i.star |elipsis}}</p>
            <p><van-icon name="video-o" />{{i.tags}}</p>
          </div>
         </van-col>
      <van-action-sheet v-model="show" :actions="actions" @select="onSelect" />
    </div>
  </van-row>

  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      VideoList:[],
      url:"",
      row:0,
      title:'',
      cheak:true,
      show: false,
      actions: [
        {name: '立即播放'},
        {name: '添加收藏'},
      ]
    }
  },
  mounted: function () {
    this.initApp();
  },
   methods:{
    goPlayer(){

    },
    onSelect(item) {
          // 点击选项时默认不会关闭菜单，可以手动关闭
          this.show = false;

          if(item.name=="立即播放"){
              //跳转页面到Player，携带i
              this.$router.push({
                path: '/Player/',
                query: {
                  dataObj: this.url
                }
              })
          }
          this.$toast(item.name)

        },
      search(){
      this.cheak=false;
      this.$toast("正在搜索中，服务器过于垃圾，请稍等30s")
      var that =this;
      this.$axios.request({
        url:'https://www.jn-wang.cn/api/v1/SearchVideo/',
        method:'POST',
        data:{
          title:this.title,
        },
        //表示发送的josn请求J
        headers:{
          'Content-Type':'application/json',
        }
      }).then(function (ret) {
        if(ret.data.code ===1000){
          that.VideoList = ret.data.data
          console.log(ret.data)
        }else{
          alert(ret.data.error)
        }
      }).catch(function (ret) {
        console.log('出现错误')
      })
    }
  },
  computed: {
    initApp: function () {
      var that = this
      document.documentElement.scrollTop = document.body.scrollTop = 0;
      this.$axios.request({
        url: 'https://www.jn-wang.cn/api/v1/Video/'+(this.row-1)+'/',
        // url: this.$store.state.apiList.course,
        method: 'GET'
      }).then(function (ret) {
        if (ret.data.code === 1000) {
          that.VideoList = ret.data.data
          console.log(ret.data)
        } else {
          alert("失败")
        }
      }).catch(function (ret) {
      })
    }
  },
  filters:{
    elipsis(value){
      if(!value)return ""
      if(value.length>8){
        return value.slice(0,7)+'...'
      }
      return value
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  b{
    font-size: 13px;
    margin-left: 1%;
  }
  p{
    margin-left: 1%;
    font-size: 11px;
    color: rgb(153,153,153);
    -webkit-line-clamp:10;
  }
</style>
