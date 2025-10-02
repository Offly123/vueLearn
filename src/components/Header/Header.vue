<template>
    <header>
        <video src="/src/assets/images/video.mp4" muted autoplay loop></video>
        <img id="drupalGuy" src="/src/assets/images/druplicon.svg" alt="">
        <Navbar />
        <div>
            <h1>Поддержка сайтов на Drupal</h1>
        </div>
    </header>
</template>

<script setup lang="ts">
import Navbar from './Navbar/Navbar.vue';
</script>

<style scoped>
header {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 650px;
    background-color: black;
    overflow: hidden;
    color: white;
    width: 100vw;
    z-index: 1;
}

video {
    filter: brightness(20%) blur(5px);
    width: 100%;
    justify-self: center;
    position: absolute;
    z-index: -1;
    top: -10%
}

#drupalGuy {
    position: absolute;
    left: 0;
}

</style>