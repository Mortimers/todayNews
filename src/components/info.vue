<template>
    <div id="listInfo">
      <span class="news_label blue" v-if='json.playonlineurl'>视频</span>
      <span class="news_label red" v-else-if="json.istop && json.istop >= 9 ">置顶</span>
      <span class="news_label blue" v-else-if="json.isgood >= 6">荐</span>
      <span class="news_label red" v-else-if="json.firsttitle >= 6">热</span>
      <span class='news_from' v-if='json.befrom'>{{json.befrom}}</span>
      <span class='news_click' v-if='json.onclick'>{{json.onclick | watchFilter }}阅读</span>
      <span class='news_plnum' v-if='json.plnum'>{{json.plnum}}评论</span>
      <span class='news_time' v-if='json.time'>{{json.time}}</span>
      <span class='news_tag' v-if='json.nlist'>{{json.nlist}}</span>
    </div>
</template>
<script>
/** 2018/6/27 0004
 *  作者:Mortimer
 *  功能:
 */
export default {
    props: ['json'],
    filters: {
        watchFilter (value) {
            // 给阅读量加一个随机数 100~200
            let randomVal = Math.floor(Math.random() * 100 + 100)
            if (value) {
                return randomVal
            } else {
                return ''
            }
        }
    }
}
</script>
<style lang="stylus">
#listInfo
    width 100%
    height .4rem
    margin-top .16rem
    font-size 8px
    .news_label
        color #eee
        border-radius .1rem
    .blue
        background-color #00939c
</style>
