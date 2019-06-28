<template>
  <div class="Player" style="margin: 0 auto;">
    <van-dropdown-menu>
      <van-dropdown-item v-model="api" :options="option1" />
    </van-dropdown-menu>

    <div style="position:absolute;width:100%;height:100%;">
        <iframe frameborder="0" width="95%" height="80%" scrolling="no" allowfullscreen="true"
                webkitallowfullscreen="true" mozallowfullscreen="true" :src= api+url ></iframe>
    </div>

  </div>
</template>

<script>
    export default {
        name: "Player",
        data() {
          return {
            value1: 0,
            option1: [
              { text: '全部接口', value:0 },
              { text: '万能接口1', value: 'https://jqaaa.com/jq3/?url=&url=' },
              { text: '万能接口2', value: 'https://jiexi.071811.cc/jx2.php?url=' },
              { text: '万能接口3', value: 'https://yun.baiyug.cn/vip/index.php?url=' },
              { text: '万能接口4', value: 'https://jqaaa.com/jx.php?url=' },
            ],
            url:'',
            api:'https://jqaaa.com/jq3/?url=&url=',
          }
        },
    mounted() {
      window.addEventListener(
      "onorientationchange" in window ? "orientationchange" : "resize",
      function() {
        if (window.orientation === 90 || window.orientation === -90) {
            //想把下面的alert换成能够控制v-show的代码
          alert(
            this.$options.methods.showCover() +
              "横屏可能导致页面异常，建议竖屏操作！"
          );
        }
      },
      false
      );
    },
    created: function () {
      var that = this
      that.url = this.$route.query.dataObj
    // console.log(this.$route.query)
  },
    watch: {
    // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
      '$route': 'getParams'
    }

    }
</script>

<style scoped>

</style>
