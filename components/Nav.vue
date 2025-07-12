<script setup>
import { ref } from 'vue';
import { VCard,VSheet } from 'vuetify/components';
import { VList,VListItem,VIcon } from 'vuetify/components'
const links = [
    {
        title: 'Home',
        icon: 'mdi-home',
        to: '/'
    },{
        title: 'Tags',
        icon: 'mdi-tag',
        to: '/tags'
    },{
        title: 'Posts',
        icon: 'mdi-archive',
        to: '/posts'
    },{
        title: 'About',
        icon: 'mdi-information',
        to: '/about'
    }
]
const showList = ref(true)
const smallview = ref(false)
const debounce = (fn, delay) => {
    let timer;
    return function() {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn();
        }, delay);
    }
};
window.addEventListener('resize',debounce(() => {
    if(window.innerWidth >= 1121) {
        smallview.value = false
        showList.value = true
    } else {
        smallview.value = true
        showList.value = false
    }
    console.log(window.innerWidth)
},50))
</script>
<template>
    <VCard class="elevation-2 rounded-0 card">
        <VSheet color="primary" class="rounded-0 text-center pt-6 pb-6 pl-2 pr-2 sheet">
            <div class="text-h5">
                SXL's Blog
            </div>
            <div class="text-caption mt-1">
                A human.
            </div>
        </VSheet>
        <Transition :name="smallview ? 'slide-x-transition' : 'scroll-x-transition'">
            <VList class="rounded-0 list" v-if="showList">
                <VListItem v-for="item in links" :title="item.title" :to="item.to">
                    <template #prepend>
                        <VIcon :icon="item.icon"></VIcon>
                    </template>
                </VListItem>
            </VList>

        </Transition>
    </VCard>
</template>
<style scoped>
@media (max-width: 70rem) {
    .sheet {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 10;
    }
    .list {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        min-width: 15rem;
        z-index: 9;
    }
}
@media (min-width: 70rem) {
    .icon {
        display: none;
    }
}
.card {
    z-index: 10;
}
</style>