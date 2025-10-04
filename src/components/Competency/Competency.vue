<template>
    <section id="competency">
        <div class="header">
            <h1>13 лет совершенствуем компетенции в Drupal поддержке</h1>
            <p>
                Разрабатываем и оптимизируем модули, 
                расширяем функциональность сайтов, обновляем дизайн
            </p>
        </div>
        <div class="card-list">
            <div class="card">
                <img class="svg-image" src="/src/assets/images/competency-1.svg" alt="competency-1.svg">
                <img class="letter-d" src="/src/assets/images/letter-d.png" alt="letter-d.png">
                <p>Добавление информации на сайт, создание новых разделов</p>
            </div>
            <div class="card">
                <img class="svg-image" src="/src/assets/images/competency-2.svg" alt="competency-2.svg">
                <img class="letter-d" src="/src/assets/images/letter-d.png" alt="letter-d.png">
                <p>Разработка и оптимизация модулей сайта</p>
            </div>
            <div class="card">
                <img class="svg-image" src="/src/assets/images/competency-3.svg" alt="competency-3.svg">
                <img class="letter-d" src="/src/assets/images/letter-d.png" alt="letter-d.png">
                <p>Интеграция с CRM, 1C, платёжными системами, любыми веб-сервисами</p>
            </div>
            <div class="card">
                <img class="svg-image" src="/src/assets/images/competency-4.svg" alt="competency-4.svg">
                <img class="letter-d" src="/src/assets/images/letter-d.png" alt="letter-d.png">
                <p>Любые доработки функционала и дизайна</p>
            </div>
            <div class="card">
                <img class="svg-image" src="/src/assets/images/competency-5.svg" alt="competency-5.svg">
                <img class="letter-d" src="/src/assets/images/letter-d.png" alt="letter-d.png">
                <p>Аудит и мониторинг безопасности Drupal сайтов</p>
            </div>
            <div class="card">
                <img class="svg-image" src="/src/assets/images/competency-6.svg" alt="competency-6.svg">
                <img class="letter-d" src="/src/assets/images/letter-d.png" alt="letter-d.png">
                <p>Миграция, импорт контента и апгрейд Drupal</p>
            </div>
            <div class="card">
                <img class="svg-image" src="/src/assets/images/competency-7.svg" alt="competency-7.svg">
                <img class="letter-d" src="/src/assets/images/letter-d.png" alt="letter-d.png">
                <p>Оптимизация и ускорение Drupal-сайтов</p>
            </div>
            <div class="card">
                <img class="svg-image" src="/src/assets/images/competency-8.svg" alt="competency-8.svg">
                <img class="letter-d" src="/src/assets/images/letter-d.png" alt="letter-d.png">
                <p>Веб-маркетинг, консультации и работы по SEO</p>
            </div>
        </div>
    </section>    
    
</template>

<script setup lang='ts'>

</script>


<style scoped>
#competency {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: clamp(0px, 150dvh, 900px);
    max-width: 80%;
    margin: clamp(0px, 7vw, 100px) 0 100px clamp(0px, 12vw, 150px);
}

#competency > .header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 20%;
    margin-bottom: 20px;
}

.header > h1, p {
    display: block;
}
.header > h1 {
    font-size: calc(0px, 2vw, 20px);
    margin-bottom: 20px;
    display: block;
}

#competency > .card-list {
    display: flex;
    justify-content: space-around;
    position: relative;
    flex-wrap: wrap;
    height: 70%;
}

.card-list > .card {
    position: relative;
    --margin-right: 5vw;
    margin-right: var(--margin-right);
    width: calc(50% - var(--margin-right));
    height: 25%;
    margin: 10px 0;
}

.card > .letter-d {
    position: absolute;
    top: 30px;
    left: -30px;
}

.card > img {
    width: clamp(0px, 40%, 100px);
}

@media screen and (min-width: 500px) {
    #competency {
        height: clamp(0px, 150dvh, 1200px);
    }

    .card > .letter-d {
        top: 40px;
    }
}

@media screen and (min-width: 1000px) {
    #competency {
        height: clamp(0px, 100dvh, 1000px);
    }

    #competency > .header {
        width: 80%;
    }

    .card-list > .card {
        width: calc(33% - 2 * var(--margin-right));
    }

    .card > .letter-d {
        top: 20%;
        left: -40px;
    }
}

@media screen and (min-width: 1200px) {
    #competency > .header {
        width: 70%;
    }
}

@media screen and (min-width: 1400px) {
    #competency {
        height: clamp(0px, 100dvh, 900px);
    }

    #competency > .header {
        width: 60%;
    }

    .card-list > .card {
        --margin-right: 1vw;
        width: calc(25% - 2 * var(--margin-right));
    }
}
</style>
