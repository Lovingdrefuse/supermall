<!--  -->
<template>
<div class="wrapper" ref="wrapper">
    <div class="content">
        <slot></slot>
    </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
    data() {
        return {
            scroll: null,
        }
    },
    props: {
        probeType: {
            type: Number,
            default: 0
        },
        pullUpLoad: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        finishPullUp() {
            this.scroll.finishPullUp();
        }
    },
    updated() {
        this.scroll = new BScroll(this.$refs.wrapper, {
            click: true,
            probeType: this.probeType,
            pullUpLoad: this.pullUpLoad

        });
        this.scroll.on('pullingUp', () => {
            // console.log("上拉加载更多");
            this.$emit('pullingUp');
            // this.scroll.finishPullUp();
        })
    },
}
</script>

<style scoped>

</style>
