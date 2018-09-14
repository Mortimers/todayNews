<template>
    <div id="detial-top">
        <header class="det-top">
            <div class="det-l"><slot name="left"></slot></div>
            <div class="det-m">{{title}}<slot name="middle"></slot></div>
            <div class="det-r"><slot name="right"></slot></div>
        </header>
    </div>
</template>
<script>
/** 2018/6/27 0004
 *  作者:Mortimer
 *  功能:
 */
export default {
    data() {
        return {
            title: "健康头条"
        }
    }
}
</script>
<style lang="stylus">
header-height = 1.2rem
#detial-top
    width 100%
    height header-height
    background-color gray
    header
        width 100%
        height inherit
        display flex
        .det-l
        .det-r
            width header-height
            height header-height
            a
                display inline-block
                width 100%
                height 100%
        .det-m
            flex 1


</style>
