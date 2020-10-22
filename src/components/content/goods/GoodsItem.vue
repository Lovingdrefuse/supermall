<!--  -->
<template>
<div class="goodsList">
    <img :src="goodsItem.show.img" alt="">
    <div class="good-info">
        <p>{{goodsItem.title}}</p>
        <span class="price">{{goodsItem.price}}</span>
        <span class="collect">{{goodsItem.cfav}}</span>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {}
    },
    props: {
        goodsItem: {
            type: Object,
            default () {
                return {}
            }
        }
    }
}
</script>

<style scoped>
.goodsList {
    padding-bottom: 40px;
    width: 48%;
    position: relative;
}

.goodsList img {
    width: 100%;
    border-radius: 5px;
}

.good-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0px;
    right: 0px;
    overflow: hidden;
    text-align: center;
}

.good-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
}

.good-info .price {
    color: #666;
    margin-right: 20px;
}

.good-info .collect {
    position: relative;

}

.good-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;

}
</style>
