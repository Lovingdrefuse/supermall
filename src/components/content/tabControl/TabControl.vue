<!--  -->
<template>
<div id="tabControl">
    <div v-for="(item,index) in titles" :class="{active:currentIndex === index}" class="tabControl-item" @click="ItemClick(index)">
        <span>{{item}}</span>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            currentIndex: 0
        }
    },
    props: {
        titles: {
            type: Array,
            default () {
                return []
            }
        }
    },
    methods: {
        ItemClick(index) {
            this.currentIndex = index;
            this.$emit('tabClick', index)
        }
    },
}
</script>

<style scoped>
#tabControl {
    display: flex;
    width: 100%;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
}

.tabControl-item {

    flex: 1;

}

.tabControl-item span {
    padding: 5px;
    user-select: none;
}

.active span {
    color: lightcoral;
    border-bottom: 3px solid lightcoral;
}
</style>
