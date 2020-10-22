<!--  -->
<template>
<div class="goods">
    <GoodsItem v-for="item in goods" :goodsItem="item"></GoodsItem>
</div>
</template>

<script>
import GoodsItem from './GoodsItem'
export default {
    data() {
        return {}
    },
    props: {
        goods: {
            type: Array,
            default () {
                return []
            }
        }
    },
    components: {
        GoodsItem
    }
}
</script>

<style scoped>
.goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 5px;
}
</style>
