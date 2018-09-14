<template>
    <div id="detail">
        <my-header>
            <a class="back-black" slot="left" @click="$router.go(-1)"></a>
            <a slot="middle"></a>
            <a class="menu" slot="right"></a>
        </my-header>
    </div>
</template>
<script>
/** 2018/6/27 0004
 *  作者:Mortimer
 *  功能:
 */
import myHeader from '@/page/detail/my-header'
import {mapState, mapMutations, mapActions} from 'vuex'
export default {
    data () {
        return {
            id: '',
            classid: '',
            datafrom: ''
        }
    },
    components: {
        myHeader
    },
    methods: {
        ...mapMutations('detail', [
            'set_historyArticle'
        ]),
        ...mapActions('detail', [
            'get_article_Data'
        ]),
        getArticle () {
            let params = {
                id: this.id,
                datafrom: this.datafrom
            }
            console.log(params)
            this.get_article_Data(params).then(res => {
                console.log(res)
            })

        }
    },
    mounted: function () {
        this.id = this.$route.query.id,
        this.datafrom = this.$route.query.datafrom;
        console.log(this.$route);
        this.getArticle();

    }
}
</script>
<style lang="stylus">
#detail
    width 100%

</style>
