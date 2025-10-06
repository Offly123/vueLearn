<template>
    <section>
        <div class="text-wrapper">
            <h1>С нами работают</h1>
            <p>
                Десятки компаний доверяют нам самое ценное, 
                что у них есть в интернете – свои сайты. 
                Мы делаем всё, чтобы наше сотрудничество было долгим.
            </p>
        </div>
        <div class="card">
            <Carousel :value="products" v-bind:numVisible="5" :numScroll="1" :showNavigators="false" :showIndicators="false" circular :autoplayInterval="2000">
                <template #item="slotProps">
                    <div class="image-wrapper image-wrapper-11">
                        <div class="inner-wrapper inner-wrapper-1">
                            <img :src="slotProps.data.src" :alt="slotProps.data.alt" class="logo">
                        </div>
                    </div>
                </template>
            </Carousel>
            <Carousel :value="products" v-bind:numVisible="5" :numScroll="1" :showNavigators="false" :showIndicators="false" circular :autoplayInterval="2000">
                <template #item="slotProps">
                    <div class="image-wrapper image-wrapper-21">
                        <div class="inner-wrapper inner-wrapper-2">
                            <img :src="slotProps.data.src" :alt="slotProps.data.alt" class="logo">
                        </div>
                    </div>
                </template>
            </Carousel>
        </div>
    </section>
</template>

<script setup lang="ts">
import { Carousel } from "primevue";

// Я не знаю как убрать скачок после окончания
// прокрутки, поэтому много повторяющихся элементов
const products = [
    {
        src: '/src/assets/images/logo_0.png',
        alt: 'CIEL',
    },
    {
        src: '/src/assets/images/logo.png',
        alt: 'Personal Writer'
    },
    {
        src: '/src/assets/images/logo_2.png',
        alt: 'Serebro.Ag'
    },
    {
        src: '/src/assets/images/nashagazeta_ch.png',
        alt: 'Наша Газета'
    },
    {
        src: '/src/assets/images/logo_0.png',
        alt: 'CIEL'
    },
    {
        src: '/src/assets/images/logo.png',
        alt: 'Personal Writer'
    },
    {
        src: '/src/assets/images/logo_2.png',
        alt: 'Serebro.Ag'
    },
    {
        src: '/src/assets/images/nashagazeta_ch.png',
        alt: 'Наша Газета'
    },
    {
        src: '/src/assets/images/logo_0.png',
        alt: 'CIEL',
    },
    {
        src: '/src/assets/images/logo.png',
        alt: 'Personal Writer'
    },
    {
        src: '/src/assets/images/logo_2.png',
        alt: 'Serebro.Ag'
    },
    {
        src: '/src/assets/images/nashagazeta_ch.png',
        alt: 'Наша Газета'
    },
    {
        src: '/src/assets/images/logo_0.png',
        alt: 'CIEL',
    },
    {
        src: '/src/assets/images/logo.png',
        alt: 'Personal Writer'
    },
    {
        src: '/src/assets/images/logo_2.png',
        alt: 'Serebro.Ag'
    },
    {
        src: '/src/assets/images/nashagazeta_ch.png',
        alt: 'Наша Газета'
    },
    {
        src: '/src/assets/images/logo_0.png',
        alt: 'CIEL',
    },
    {
        src: '/src/assets/images/logo.png',
        alt: 'Personal Writer'
    },
    {
        src: '/src/assets/images/logo_2.png',
        alt: 'Serebro.Ag'
    },
    {
        src: '/src/assets/images/nashagazeta_ch.png',
        alt: 'Наша Газета'
    }
];

</script>

<style scoped>
section {
    margin-bottom: 100px;
}

.text-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}

.text-wrapper > p {
    padding: 10px 0;
    font-size: calc(var(--font-default-size) * 1.5);
}

.image-wrapper {
    position: relative;
    height: 100px;
    width: 50dvw;
    margin: 5px;

    @media screen and (min-width: 768px) {
        width: 33dvw;
    }

    @media screen and (min-width: 1200px) {
        width: 25dvw;   
    }

    @media screen and (min-width: 1400px) {
        width: 20dvw;   
    }
}

.inner-wrapper {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 50%;
    border: 1px solid #eee;
    border-radius: 5px;
    width: 100%;
    height: 100%;
}

.inner-wrapper-1 {
    transform: translate(0, -50%);
}

.inner-wrapper-2 {
    transform: translate(-50%, -50%);
}

.image-wrapper > .logo {
    position: absolute;
    top: 50%;
    width: 100%;
    transform: translate(0, -50%);
    border: 1px solid #eee;
    border-radius: 5px;
}

.image-wrapper-2 > .logo {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    left: -50%;
}
</style>