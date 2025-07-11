<script setup>
import { VApp,VCard } from 'vuetify/components';
import { useTheme } from 'vuetify';
const theme = useTheme()
</script>
<template>
    <VApp :style="{ background: theme.current.value.colors.background }" class="text-center">
        <VCard id="content" class="elevation-4">
            <template #title>
                Oops!
            </template>
            <template #subtitle>
                404 Not Found
            </template>
        </VCard>
    </VApp>
</template>
<style scoped>
#content {
    margin: auto;
    width: 40rem;
}
</style>