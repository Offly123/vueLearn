<template>
    <div class="header-info">
        <div class="info-main">
            <h1>Поддержка сайтов на Drupal</h1>
            <p>Сопровождение и поддержка сайтов на CMS Drupal любой версии и запущенности</p>
            <a href="#tariffs">ТАРИФЫ</a>
        </div>
        <div class="info-cards">
            <div>
                <h1>
                    #1
                    <img src="/src/assets/images/cup.png" alt="cup.png">
                </h1>
                <p>Drupal-разработчик в России по версии Рейтинга Рунета</p>
            </div>
            <div>
                <h2>3+</h2>
                <p>средний опыт специалистов более 3-х лет</p>
            </div>
            <div>
                <h2>14</h2>
                <p>лет опыта в сфере Drupal</p>
            </div>
            <div>
                <h2>200+</h2>
                <p>модулей и тем в формате DrupalGive</p>
            </div>
            <div>
                <h2>35000</h2>
                <p>часов поддержки сайтов на Drupal</p>
            </div>
            <div>
                <h2>200+</h2>
                <p>проектов на поддержке</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.header-info {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%;
}

.info-main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.info-main > h1 {
    display: block;
    text-wrap: wrap-reverse;
    text-align: center;
    padding-top: 20px;
}

.info-main > p {
    padding-top: 3%;
    display: block;
    text-align: center;
}

.info-main > a {
    display: block;
    width: clamp(0px, 20%, 100px);
    margin: clamp(0px, 10%, 20px) 0;
    padding: clamp(0px, 3%, 20px) clamp(0px, 10%, 50px);
    text-align: center;
    border: 2px solid var(--color-orange);
    border-radius: 5px;
}

.info-cards {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    position: relative;
    justify-content: space-between;
    width: 100%;
    height: 100%;
}

.info-cards > div {
    height: 20%;
    border-left: 3px solid var(--color-orange);
    --padding: 5px;
    --margin: 5px;
    padding: var(--padding);
    margin: var(--margin);
    width: calc(50% - 2 * var(--padding) - 2 * var(--margin));
}

.info-cards > div > h1 {
    display: block;
    height: 50%;
    position: relative;
    top: -20%
}

.info-cards > div > h2 {
    height: 50%;
    display: block;
}

.info-cards > div > h1 > img {
    height: 100%;
    aspect-ratio: 1 / 1;
}

.info-cards > div > p {
    font-size: var(--font-default-size);
    display: block;
    height: 50%;
}

@media screen and (min-width: 1000px) {
    .header-info {
        padding-top: 0;
    }
}

@media screen and (min-width: 1200px) {
    .header-info {
        flex-direction: row;
        justify-content: space-between;
    }
    
    .info-main {
        align-items: flex-start;
        width: 40%;
    }
    
    .info-main > h1 {
        text-align: left;
    }

    .info-main > p {
        text-align: left;
    }
    
    .info-cards {
        width: 50%;
    }
    
    .info-cards > div {
        width: calc((100% / 3) - 2 * var(--padding) - 2 * var(--margin));
    }
}

@media screen and (min-width: 1400px) {

}
</style>