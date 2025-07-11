<script setup>
import { VApp,VRow,VCol } from 'vuetify/components';
import { useTheme } from 'vuetify';
import Nav from './Nav.vue'
const theme = useTheme()
</script>
<template>
    <VApp :style="{ background: theme.current.value.colors.background }">
        <VRow id="content" dense>
            <VCol cols="2">
                <Nav></Nav>
            </VCol>
            <VCol cols="10">
                <Nav></Nav>
            </VCol>
        </VRow>
    </VApp>
</template>
<style scoped>
#content {
    margin-left: auto;
    margin-right: auto;
    width: 85rem;
}
</style>