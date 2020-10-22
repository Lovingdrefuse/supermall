<!--  -->
<template>
<div>
    <TabBar>
        <TabBarItem path="/home">
            <img src="../../assets/img/tabbar/hh.png" alt="" slot="item-icon">
            <img src="../../assets/img/tabbar/logo.png" alt="" slot="item-icon-active">
            <div slot="item-text">首页</div>
        </TabBarItem>
        <TabBarItem path="/category">
            <img src="../../assets/img/tabbar/hh.png" alt="" slot="item-icon">
            <img src="../../assets/img/tabbar/logo.png" alt="" slot="item-icon-active">
            <div slot="item-text">分类</div>
        </TabBarItem>
        <TabBarItem path="/cart">
            <img src="../../assets/img/tabbar/hh.png" alt="" slot="item-icon">
            <img src="../../assets/img/tabbar/logo.png" alt="" slot="item-icon-active">
            <div slot="item-text">购物车</div>
        </TabBarItem>
        <TabBarItem path="/profile">
            <img src="../../assets/img/tabbar/hh.png" alt="" slot="item-icon">
            <img src="../../assets/img/tabbar/logo.png" alt="" slot="item-icon-active">
            <div slot="item-text">我的</div>
        </TabBarItem>
    </TabBar>
</div>
</template>

<script>
import TabBar from '../common/tabbar/TabBar'
import TabBarItem from '../common/tabbar/TabBarItem'
export default {
    data() {
        return {}
    },
    components: {
        TabBarItem,
        TabBar
    }
}
</script>

<style scoped>
@import url('../../assets/css/base.css');

.tabbar_item {
    flex: 1;
    text-align: center;
    height: 49px;
}

.active {
    color: red;
}

.tabbar_item img {
    width: 24px;
    height: 24px;
}
</style>
