<template>
    <div id="indexHeader">
        <header>
            <div class="logo"><a class="title"></a></div>
            <div class="search"><a class="search_btn"></a></div>
        </header>
        <nav>
            <a v-for="(item, index) in navColumnData" :class="{active:indexPage === item.classpath}" @click.stop="navToCurrent(item)" :key="index">{{item.classname}}</a>
        </nav>
    </div>
</template>
<script>
/** 2018/6/27 0004
 *  作者:Mortimer
 *  功能:
 */
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
    data() {
        return {
            loading: false   //页面信息加载
        }
    },
    computed: {
        ...mapState('index', [
            'indexPage',
            'indexId',
            'indexAllData',
            'navColumnData'
        ])
    },
    methods: {
        ...mapMutations('index', [
            'set_currentContent_data',
            'set_indexAllData',
            'set_indexPage',
            'set_indexId'
        ]),
        ...mapActions('index', [
            'get_indexPageDetail_data'
        ]),
        // 点击导航栏菜单绑定事件,查询当前导航栏对应的数据列表
        navToCurrent (item) {
            // 触发值的设定、请求数据
            console.log(item)
            this.set_indexPage(item.classpath)
            this.set_indexId(item.classid)
            // 查看数据是不是缓存在indexAllData中，如果缓存有，取缓存，如果没有，重新请求数据
            if (this.indexAllData[item.classpath]) {
                this.set_currentContent_data(this.indexAllData[item.classpath])
            } else {
                this.get_indexPageDetail_data(item)
            }
            // 动态滚动导航栏
            this.slideTo(item)
        },
        // 导航栏滚动
        slideTo (item) {
            // 在获取dom时，一般会在更新前获取dom的信息，需要使用nextTick
            // 此处要注意nextTick的概念和用法
            this.$nextTick(function () {
                let screenWith = document.body.offsetWidth;

                let aActiveDom = document.getElementsByClassName("active"),
                    navDom = document.getElementsByTagName("nav");
                // 获取dom距父元素的边框的距离
                let aActiveOffset = aActiveDom[0].offsetLeft;
                // 获取有滚动元素滚动条
                let navScrollLeft = navDom[0].scrollLeft;
                // 当前元素宽度
                let aActiveWidth = aActiveDom[0].offsetWidth;

                console.log(aActiveOffset, navScrollLeft,aActiveWidth);
                if ((aActiveOffset - navScrollLeft) > screenWith/2) {
                    navDom[0].scrollLeft = aActiveOffset - navScrollLeft - (screenWith - aActiveWidth)/2
                } else {
                    navDom[0].scrollLeft = 0
                }
            })

        }
    },
    watch: {
        indexAllData: function () {

        }
    }
}
</script>
<style lang="stylus">
#indexHeader
    position fixed
    top 0
    left 0
    z-index 9
    width 100%
    height 2rem
    header
        width 100%
        height 1rem
        background-color #00939c
        display flex
        .logo
            flex 1
            margin-left 1rem
            a
                display block
                width 100%
                height 100%
                background-size 145px
        .search
            flex-basis 1rem
            a
              display block
              width 100%
              height 100%
              background-size 24px

    nav
        width 100%
        height .8rem
        overflow-x scroll
        background-color #ccc
        white-space nowrap
        font-size 0
        &::-webkit-scrollbar
            width 0
            height 0
        a
            display inline-block
            padding 0 15px
            height .8rem
            line-height .8rem
            text-align center
            font-size 17px
            &.active
                border-bottom: 2px solid #00939c;
</style>
<style>
#indexHeader .title {
    background: url(~@/assets/img/news_logo.png) no-repeat center center;
}
#indexHeader .search_btn {
    background: url(~@/assets/img/search.png) no-repeat center center;
}
</style>
