<template>
    <section id="expertise">
        <img class="drupal-guy" src="/src/assets/images/druplicon.svg" alt="druplicon.svg">
        <div class="content">
            <h1>Экспертиза в Drupal, опыт 14 лет!</h1>
            <div class="cards">
                <div class="card">
                    <p>
                        Только системный подход – контроль версий, 
                        резервирование и тестирование!
                    </p>
                </div>
                <div class="card">
                    <p>
                        Только Drupal сайты, не берем на поддержку
                        сайты на других CMS!
                    </p>
                </div>
                <div class="card">
                    <p>
                        Учавствуем в разраотке ядра Drupal и
                        модулей на Drupal.org, разрабатываем
                        <span>свои модули Drupal</span>
                    </p>
                </div>
                <div class="card">
                    <p>
                        Поддерживаем сайты на Drupal 5, 6, 7 и 8
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped>
#expertise {
    position: relative;
    color: white;
    overflow-x: hidden;
    overflow: visible;
    background-image: linear-gradient(90deg, var(--color-main-black), 50%, #090d2a);
    
    padding: 20px;
    height: 120dvh;
    @media screen and (min-width: 1000px) {
        height: 110dvh;
        padding-top: 40px;
    }

    @media screen and (min-width: 1200px) {
        height: 1000px;
    }
}

#expertise::after {
    content: '';
    display: block;
    position: absolute;
    background-image: url('/src/assets/images/laptop.png');
    background-repeat: no-repeat;
    background-size: contain;
    aspect-ratio: 1 / 1;
    bottom: -10%;
    z-index: 1;
    left: 0;
    width: 80%;
    max-height: 100%;

    @media screen and (min-width: 1000px) {
        width: 70%;
        bottom: -10%;
    }

    @media screen and (min-width: 1200px) {
        width: 60%;
    }

    @media screen and (min-width: 1400px) {
        max-width: 50%;
        width: 900px;
        bottom: -160px;
    }
}

#expertise > .content {
    display: flex;
    flex-direction: column;
    position: relative;
    height: 70%;

    @media screen and (min-width: 1200px) {
        position: absolute;
        width: 50%;
        bottom: 0;
        right: 0;
    }
}

#expertise > .drupal-guy {
    position: absolute;
    width: 120%;
    right: 0;
    bottom: 0px;
}

.content > h1 {
    width: min(100%, 600px);
    font-size: clamp(1.5rem, 4vw, 2.5rem);
}

.content > .cards {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
    width: 70%;

    @media screen and (min-width: 1000px) {
        width: 70%;
        bottom: -10%;
    }

    @media screen and (min-width: 1200px) {
        width: 100%;
    }

    @media screen and (min-width: 1400px) {
        width: 40%;
    }
}

.cards > .card {
    border-left: 3px solid var(--color-orange);
    margin: 20px 0px;
    padding: 5px 15px;
}
</style>