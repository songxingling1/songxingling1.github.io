<script setup>
import { VCard,VCardTitle,VCardSubtitle } from 'vuetify/components';
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
</script>
<template>
    <VCard  class="elevation-4 rounded-0">
        <VCard color="primary" class="rounded-0 text-center pt-2 pb-4">
            <VCardTitle>
                SXL's Blog
            </VCardTitle>
            <VCardSubtitle class="mt-1">
                A human.
            </VCardSubtitle>
        </VCard>
        <VList>
            <VListItem v-for="item in links" :title="item.title" :to="item.to">
                <template #prepend>
                    <VIcon :icon="item.icon"></VIcon>
                </template>
            </VListItem>
        </VList>
    </VCard>
</template>
