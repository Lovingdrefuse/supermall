<!--  -->
<template>
<div class="recommend">
    <div v-for="item in recommend" class="recommend-item">
        <a :href="item.link">
            <img :src="item.image" alt="">
            <div>{{item.title}}</div>
        </a>
    </div>

</div>
</template>

<script>
export default {
    data() {
        return {}
    },
    props: {
        recommend: {
            type: Array,
            default () {
                return []
            }
        }
    }
}
</script>

<style scoped>
.recommend {
    display: flex;
    width: 100%;
    text-align: center;
    padding: 10px 0 20px;
    border-bottom: 8px solid #eee;
}

.recommend-item {
    flex: 1;
}

.recommend-item img {
    width: 65px;
    height: 65px;
    margin-bottom: 8px;
}

.recommend-item a {
    font-size: 12px;
}
</style>
