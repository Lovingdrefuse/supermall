<!--  -->
<template>
<Banner>
    <BannerItem v-for="(item, index) in banners" :key="index">
        <a :href="item.link"><img :src="item.image" alt=""></a>
    </BannerItem>
</Banner>
</template>

<script>
import BannerItem from '../../../components/common/banner/BannerItem'
import Banner from '../../../components/common/banner/Banner'
export default {
    data() {
        return {}
    },
    components: {
        Banner,
        BannerItem
    },
    props: {
        banners: {
            type: Array,
            default () {
                return []
            }
        }
    }
}
</script>

<style scoped>

</style>
