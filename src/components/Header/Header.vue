<template>
    <header>
        <Navbar />
        <HeaderMain />
        <video src="/src/assets/images/video.mp4" muted autoplay loop></video>
        <img draggable="false" id="drupalGuy" src="/src/assets/images/druplicon.svg" alt="druplicon.svg">
    </header>
    <MobileMenu />
</template>

<script setup lang="ts">
import Navbar from './Navbar/Navbar.vue';
import HeaderMain from './HeaderMain/HeaderMain.vue';
import MobileMenu from './MobileMenu/MobileMenu.vue';
</script>

<style scoped>
header {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: black;
    height: 400px;
    min-height: 100dvh;
    overflow: hidden;
    color: white;
    width: 100vw;
    z-index: 1;
    --min-padding: 0px;
    --prefer-padding: 5%;
    --max-padding: 125px;
    padding: 0 clamp(var(--min-padding), var(--prefer-padding), var(--max-padding));
    padding-bottom: 10px;
}

video {
    filter: brightness(20%) blur(5px);
    min-height: 100%;
    min-width: 100%;
    position: absolute;
    z-index: -1;
}

#drupalGuy {
    position: absolute;
    z-index: -1;
    left: 0;
}

@media screen and (min-width: 350px) {
    header {
        height: 500px;
    }
}

@media screen and (min-width: 400px) {
    header {
        height: 700px;
    }
}

@media screen and (min-width: 1000px) {
    header {
        min-height: 0px;
        height: 800px;
    }
}

@media screen and (min-width: 1200px) {
    header {
        height: 650px;
    }
}
</style>