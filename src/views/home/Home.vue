<!--  -->
<template>
<div id="home">
    <NavBar class="home-nav">
        <div slot="center">购物车</div>
    </NavBar>
    <Scroll class="content" ref="scroll" :pullUpLoad="true" @pullingUp="getMore">
        <HomeBanner :banners="banners"></HomeBanner>
        <HomeRecommend :recommend="recommend"></HomeRecommend>
        <HomeFashion></HomeFashion>
        <TabControl class="tabControl" :titles="['流行','新款','精选']" @tabClick="tabClick"></TabControl>
        <GoodsList :goods="goods[currentType].list"></GoodsList>
    </Scroll>
</div>
</template>

<script>
import Scroll from '../../components/common/scroll/scroll'

import NavBar from '../../components/common/navbar/NavBar';
import HomeBanner from './homeComps/HomeBanner';
import HomeRecommend from './homeComps/HomeRecommend';
import HomeFashion from './homeComps/HomeFashion'
import TabControl from '../../components/content/tabControl/TabControl'

import GoodsList from '../../components/content/goods/GoodsList'

import {
    getHomeMultidata,
    getHomeGoods
} from '../../network/home'

export default {
    data() {
        return {
            //处理请求过来的数据
            banners: [],
            recommend: [],
            titles: [],
            goods: {
                'pop': {
                    page: 0,
                    list: []
                },
                'new': {
                    page: 0,
                    list: []
                },
                'sell': {
                    page: 0,
                    list: []
                }
            },
            currentType: 'pop',

        }
    },
    components: {
        NavBar,
        HomeBanner,
        HomeRecommend,
        HomeFashion,
        TabControl,
        GoodsList,
        Scroll
    },
    created() {
        //1、请求多个数据
        this.getHomeMultidata();
        this.getHomeGoods('pop');
        this.getHomeGoods('new');
        this.getHomeGoods('sell');
    },

    methods: {
        getHomeMultidata() {
            getHomeMultidata().then(res => {
                this.recommend = res.data.recommend.list;
                this.banners = res.data.banner.list;
            })
        },
        getHomeGoods(type) {
            //创建page参数
            const page = this.goods[type].page + 1;
            getHomeGoods(type, page).then(res => {
                console.log(res);
                this.goods[type].list.push(...res.data.list);
                //动态修改page值
                this.goods[type].page += 1;
                console.log(this.$refs)
            })
        },
        tabClick(index) {
            switch (index) {
                case 0:
                    this.currentType = 'pop'
                    break;
                case 1:
                    this.currentType = 'new';
                    break;
                case 2:
                    this.currentType = 'sell';
                    break;
            }
        },
        getMore() {
            this.getHomeGoods(this.currentType);

        }
    },

}
</script>

<style scoped>
#home {
    height: 100vh;
    position: relative;
}

.home-nav {
    user-select: none;
    background-color: rgb(218, 138, 151);
    color: white;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
}

.tabControl {
    position: sticky;
    top: 44px;
    background-color: #fff;
    z-index: 9;
}

.content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0px;
    right: 0px;
    overflow: hidden;

}
</style>
