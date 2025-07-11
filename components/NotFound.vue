<script setup>
import { VSheet } from 'vuetify/components';
import { useTheme } from 'vuetify';
const theme = useTheme()
</script>
<template>
    <VSheet color="transparent" class="d-flex align-center justify-center test-center mt-12 flex-column">
        <h1 class="text-h2 font-weight-bold">Oops!</h1>
        <p class="text-h4 mt-8">The page you're looking for can't be found.</p>
    </VSheet>
</template>