<script setup>
import { onMounted, ref } from 'vue';
import { VCard,VCardTitle,VCardSubtitle } from 'vuetify/components';
const articles = ref([])
onMounted(async ()=>{
    const res = await fetch('/document.json')
    articles.value = await res.json()
    console.log(articles.value)
})
function getDate(timestamp) {
    const timer = new Date(timestamp)
    return timer.getFullYear() + '-' + timer.getMonth() + '-' + timer.getDay()
}
</script>
<template>
<VCard class="elevation-4 rounded-0 mt-6" v-if="(item,index) in articles" :key="index">
    <VCardTitle class="text-center">{{item.name}}</VCardTitle>
    <VCardSubtitle class="text-center">Posted on {{getDate(item.time)}}</VCardSubtitle>
    {{ item.summary }}
    <RouterLink :to='"/posts/" + item.name'>Read More</RouterLink>
</VCard>
</template>