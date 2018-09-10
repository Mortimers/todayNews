<template>
    <div id="index">
      <index-header></index-header>
      <index-container></index-container>
    </div>
</template>
<script>
/** 2018/08/01 0004
 *  作者:Mortimer
 *  功能: 首页
 */
import indexHeader from '@/page/index/index-header'
import indexContainer from '@/page/index/index-container'
import { mapActions } from 'vuex'

export default {
    components: {
        indexHeader,
        indexContainer
    },
    methods: {
        ...mapActions('index', [
            'get_navColumn_data'
        ])
    },
    created () {
        this.get_navColumn_data()
    }
}
</script>
<style lang="stylus">
#index
    position: relative
</style>
