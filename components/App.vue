<script setup>
import { VApp } from 'vuetify/components';
import { useTheme } from 'vuetify';
import Nav from './Nav'
import Footer from './Footer'
const theme = useTheme()
</script>
<template>
    <VApp :style="{ background: theme.current.value.colors.background }">
        <div id="container" class="d-flex flex-nowrap ga-3">
            <div class="flex-0-0" id="sidebar">
                <Nav></Nav>
                <RouterView name="side" id="side" class="mt-3"></RouterView>
            </div>
            <div class="flex-fill">
                <RouterView></RouterView>
                <Footer></Footer>
            </div>
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
#sidebar {
    width: 15rem;
}
#side {
    position: sticky;
    top: 12px;
}
</style>