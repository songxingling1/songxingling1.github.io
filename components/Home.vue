<script setup>
import { onMounted, ref } from 'vue';
import { VCard,VCardTitle,VCardSubtitle,VCardText,VIcon } from 'vuetify/components';
import { VPagination } from 'vuetify/components';
import { useTheme } from 'vuetify';
const showedArticles = ref([])
let articles = []
const theme = useTheme()
const showPagination = ref(true)
const pageCount = ref(1)
const page = ref(1)
onMounted(async ()=>{
    const res = await fetch('/assets/document.json')
    articles = await res.json()
    articles = articles.data
    if(articles.length <= 10) showedArticles.value = articles
    else {
        showedArticles.value = articles.slice(0,10)
        pageCount.value = Math.ceil(articles.length / 10)
    }
})
function getDate(timestamp) {
    const timer = new Date(timestamp)
    return `${timer.getFullYear()}-${timer.getMonth() + 1}-${timer.getDate()}`
}
function updatePage(curPage) {
    showedArticles.value = articles.slice((curPage - 1) * 10,curPage * 10)
    console.log(curPage)
}
</script>
<template>
<div>
    <VCard class="elevation-2 rounded-0 mb-3 pt-5 pb-5" v-for="(item,index) in showedArticles" :key="index">
        <VCardTitle class="text-center">
            <RouterLink :to="'/posts/' + item.name" class="text-h5 text-weight-medium opacity-100 pa-0 link">
                {{item.name}}
            </RouterLink>
        </VCardTitle>
        <VCardSubtitle class="text-center">
            <VIcon icon="mdi-calendar-blank"></VIcon>
            Posted on {{getDate(item.time)}}
        </VCardSubtitle>
        <VCardText class="pl-8 pr-8">{{ item.summary }}</VCardText>
    </VCard>
    <VCard v-if="showPagination" class="elevation-2 rounded-0">
        <VPagination :length="pageCount" total-visible="3" v-model="page" @update:modelValue="updatePage(page)" ></VPagination>
    </VCard>
</div>
</template>
<style scoped>
.link {
    color: v-bind('theme.current.value.colors['on-primary']');
    text-decoration: none;
    position: relative;
}
.link::after {
    content: '';
    position: absolute;
    top: -1;
    bottom: 0;
    left: 0;
    right: 0;
    border-bottom-width: 2pt;
    border-bottom-color: v-bind('theme.current.value.colors['on-primary']');
    border-bottom-style: solid;
    transform: scaleX(0);
    transition: transform 0.2s ease-out;
}.link:hover::after {
    content: '';
    position: absolute;
    top: -1;
    bottom: 0;
    left: 0;
    right: 0;
    border-bottom-width: 2pt;
    border-bottom-color: v-bind('theme.current.value.colors['on-primary']');
    border-bottom-style: solid;
    transform: scaleX(1);
    transition: transform 0.2s ease-out;
}
</style>