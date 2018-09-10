<template>
    <div id="indexContainer">
        <div class="news-list" v-for="(item, index) in currentContent" :key="index">
            <router-link :to="url(item)">
              <container-list :item = "item"></container-list>
            </router-link>
        </div>
    </div>
</template>
<script>
/** 2018/6/27 0004
 *  作者:Mortimer
 *  功能:
 */
import { mapState, mapMutations, mapActions } from 'vuex'
import containerList from '@/page/index/container-list'

export default {
    data () {
        return {
            indexPageDetail: []    //点击导航栏时，获取到当前数据列表
        }
    },
    components: {
        containerList
    },
    computed: {
        ...mapState('index', [
            'indexPage',
            'currentContent',
            'indexAllData'
        ])
    },
    methods: {
        ...mapMutations('index', [
            'set_currentContent_data'
        ]),
        // 路由
        url(item) {
            return `detail?classid=${item.classid}&&id=${item.id}`
        },
    },
    watch: {
        currentContent (val) {
            console.log(this.currentContent);
        }
    }
}
</script>
<style lang="stylus">
#indexContainer
    margin-top 2rem
    .news-list
        margin 0 .3rem
</style>
