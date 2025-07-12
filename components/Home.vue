<script setup>
import { onMounted, ref } from 'vue';
import { VCard,VCardTitle,VCardSubtitle,VCardText } from 'vuetify/components';
import { useTheme } from 'vuetify';
const articles = ref([])
const theme = useTheme()
onMounted(async ()=>{
    const res = await fetch('/document.json')
    articles.value = await res.json()
})
function getDate(timestamp) {
    const timer = new Date(timestamp)
    console.log(timestamp)
    return `${timer.getFullYear()}-${timer.getMonth() + 1}-${timer.getDate()}`
}
</script>
<template>
<div>
    <VCard class="elevation-4 rounded-0 mb-3 pt-5 pb-5" v-for="(item,index) in articles" :key="index">
        <VCardTitle class="text-center">
            <RouterLink :to="'/posts/' + item.name" class="text-h5 text-weight-medium opacity-100 pa-0 link">
                {{item.name}}
            </RouterLink>
        </VCardTitle>
        <VCardSubtitle class="text-center">Posted on {{getDate(item.time)}}</VCardSubtitle>
        <VCardText>{{ item.summary }}</VCardText>
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