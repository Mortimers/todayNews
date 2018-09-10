<template>
    <div id="containList">
      <!--视频-->
      <!-- 1张大图 -->
      <div v-if="item.ptitlepic">
          <div class="news_title">
            <h3 v-html="item.title"></h3>
          </div>
          <div class='news_img'>
            <img v-lazy.container='item.ptitlepic'>
          </div>
          <list-info :json="item"></list-info>
      </div>
      <!-- 3张小图 -->
      <div v-else-if="item.titlepic3">
          <div class="news_title">
            <h3 v-html="item.title"></h3>
          </div>
          <div class='list_img'>
            <ul>
              <li><img v-lazy.container='item.titlepic'></li>
              <li><img v-lazy.container='item.titlepic2'></li>
              <li><img v-lazy.container='item.titlepic3'></li>
            </ul>
          </div>
          <list-info :json="item"></list-info>
      </div>
      <!-- 1张小图 -->
      <div v-else-if="item.titlepic">
          <div class="news_title">
            <h3 v-html="item.title"></h3>
          </div>
          <div class='news_img'>
            <img v-lazy.container='item.titlepic'>
          </div>
          <list-info :json="item"></list-info>
      </div>
      <!-- 文字 -->
      <div v-else-if='item.title'>
          <h3 v-html="item.title"></h3>
          <list-info :json="item"></list-info>
      </div>
      <div v-else-if='item.type' id="lookHere">
        <p>上次看到这里，点击刷新 <i class="icon-refresh"></i></p>
      </div>
    </div>
</template>
<script>
/** 2018/6/27 0004
 *  作者:Mortimer
 *  功能:
 */
 import listInfo from '@/components/info'
 export default {
    props: ['item'],
    components: {
        listInfo
    },
    methods: {

    }
 }
</script>
<style lang="stylus">
#containList
    width 100%
    padding .4rem 0
    overflow hidden
    border-bottom 1px solid #ccc
    div
        .news_title
            overflow hidden
            font-size 16px
            h3
                font-weight 400
        .list_img
            height 1.8rem
            overflow hidden
            margin-top .16rem
            ul
                display flex
                overflow hidden
                li
                    flex 1
                    padding 0 2px
                    img
                        width 100%
        .news_img
            height 4.5rem
            overflow hidden
            margin-top .16rem
            img
                width 100%

</style>
