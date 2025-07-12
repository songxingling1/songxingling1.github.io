<script setup>
import { VApp,VRow,VCol } from 'vuetify/components';
import { useTheme } from 'vuetify';
import Nav from './Nav.vue'
const theme = useTheme()
</script>
<template>
    <VApp :style="{ background: theme.current.value.colors.background }">
        <div id="container" class="d-flex flex-nowrap align-start ga-3">
            <Nav class="flex-0-0 nav"></Nav>
            <RouterView class="flex-fill"></RouterView>
        </div>
    </VApp>
</template>
<style scoped>
#container {
    width: calc(100% - 1rem);
    margin: 0 auto;
}
@media (min-width: 89rem) {
    #container {
        width: 87rem;
    }
}
.nav {
    width: 15rem;
}
</style>