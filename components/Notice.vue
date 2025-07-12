<script setup>
import { onMounted, ref } from 'vue';
import { VAvatar,VSheet,VDivider,VIcon,VImg } from 'vuetify/components';
const postCount = ref('0')
onMounted(async() => {
    const res = await fetch('/assets/document.json')
    const json = await res.json()
    postCount.value = json.count
})
</script>
<template>
<VSheet class="elevation-2 rounded-0 pa-4 text-center">
    <VAvatar image="/assets/avatar.png" size="120"></VAvatar>
    <div class="font-weight-black mt-3">Xinglin Song</div>
    <div class="mt-2 text-grey-darken-2">Keep striving</div>
    <VDivider class="mt-2 mb-2"></VDivider>
    <div class="font-weight-black">{{postCount}}</div>
    <div class="text-grey-darken-2">posts</div>
    <VImg src="https://unpkg.com/@creativecommons/vocabulary@2020.9.4/assets/license_badges/big/by_sa.svg" height="3rem" class="mt-4"></VImg>
</VSheet>
</template>