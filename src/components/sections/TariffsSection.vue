<template>
    <section id="tariffs">
        <img src="/src/assets/images/letter-d.png" alt="">
        <h1>Тарифы</h1>
        <div class="cards">
            <div class="card">
                <h2>Стартовый</h2>
                <ul>
                    <li>Консультация и работы по SEO</li>
                    <li>Услуги дизайнера</li>
                    <li>
                        Неиспользованные оплаченные часы переносятся
                        на следующий месяц
                    </li>
                    <li>Предоплата от 6 000 рублей в месяц</li>
                </ul>
                <a href="#form">СВЯЖИТЕСЬ С НАМИ!</a>
            </div>
            <div class="card">
                <h2>Бизнес</h2>
                <ul>
                    <li>Консультация и работы по SEO</li>
                    <li>Услуги дизайнера</li>
                    <li>
                        Высокое время реакции - до 2 рабочих дней
                    </li>
                    <li>
                        Неиспользованные оплаченные часы переносятся
                        на следующий месяц
                    </li>
                    <li>Предоплата от 30 000 рублей в месяц</li>
                </ul>
                <a href="#form">СВЯЖИТЕСЬ С НАМИ!</a>
            </div>
            <div class="card">
                <h2>VIP</h2>
                <ul>
                    <li>Консультация и работы по SEO</li>
                    <li>Услуги дизайнера</li>
                    <li>
                        Максимальное время реакции - в день обращения
                    </li>
                    <li>
                        Неиспользованные оплаченные часы не переносятся
                    </li>
                    <li>Предоплата от 270 000 рублей в месяц</li>
                </ul>
                <a href="#form">СВЯЖИТЕСЬ С НАМИ!</a>
            </div>
        </div>
        <p class="tariffs-dont-suit">
            Вам не подходят наши тарифы? Оставьте заявку и мы
            предложим вам индивидуальные условия!
        </p>
        <a href="#form" class="get-individual-tariff">
            ПОЛУЧИТЬ ИНДИФИДУАЛЬНЫЙ ТАРИФ
        </a>
    </section>
</template>

<script setup lang='ts'>

</script>


<style scoped>
section {
    display: flex;
    position: relative;
    flex-direction: column;
    overflow: hidden;
    align-items: center;
    margin: 100px 0 25px 0;

    @media screen and (min-width: 1200px) {
        justify-content: space-between;
        height: 1000px;
    }
}

section > img {
    position: absolute;
    filter: saturate(200%);
    left: -300%;
    height: 100%;
    z-index: -1;

    @media screen and (min-width: 1200px) {
        left: unset;
        right: -25%;
    }
}

section > .cards {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    
    flex-direction: column;
    @media screen and (min-width: 1200px) {
        flex: 1;
        width: 1300px;
        flex-direction: row;   
    }
}

.cards > .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 20px 15px 20px rgba(0, 0, 0, 0.1);
    background-color: white;
    margin: 20px 0;
    width: 100%;
    /* height: 475px; */
    padding: 10px 40px 80px 40px;
    border-radius: 5px;
    --color-gray: #eee;
    border: 1px solid var(--color-gray);
    z-index: 1;
    transition: all 0.1s;

    @media screen and (min-width: 1200px) {
        width: 32%;
        padding-top: 50px;
    }
}

.card:nth-child(1) {
    @media screen and (min-width: 1200px) {
        height: 60%;
    }
}

.card:nth-child(2) {
    @media screen and (min-width: 1200px) {
        height: 80%;
    }
}

.card:nth-child(3) {
    @media screen and (min-width: 1200px) {
        height: 70%;
    }
}

.cards > .card:hover {
    @media screen and (min-width: 1200px) {
        scale: 1.05;
    }
}

.card > h2 {
    width: 100%;
    color: var(--color-orange);
    padding: 20px 0px;
    border-bottom: 1px solid var(--color-gray);
}

.card > ul {
    display: flex;
    flex-direction: column;
    padding: 40px 0;
    flex: 1;
}

ul > li {
    position: relative;
    color: var(--color-text-gray);
    padding: 10px 5px;
    margin-left: 20px;
}

ul > li::before {
    content: '✓';
    position: absolute;
    right: 100%;
    color: var(--color-orange);
}

.card > a {
    color: var(--color-orange);
    text-align: center;
    border: 1px solid var(--color-orange);
    border-radius: 5px;
    --padding: 15px;
    padding: var(--padding);
    width: calc(90% - 2 * var(--padding));

    @media screen and (min-width: 1200px) {
        height: auto;
        font-size: 0.8rem;
    }
}

.card > a:hover {
    @media screen and (min-width: 1200px) {
        color: white !important;
        background-color: var(--color-orange) !important;
    }
}

.card:nth-child(2) > a {
    background-color: var(--color-orange);
    color: white;

    @media screen and (min-width: 1200px) {
        color: var(--color-orange);
        background-color: white;
    }
}

section > .tariffs-dont-suit {
    text-align: center;
    color: var(--color-text-gray);
    
    @media screen and (min-width: 1200px) {
        font-size: 0.8em;
        width: 500px;
    }
}

section > .get-individual-tariff {
    padding: 20px;
    text-decoration: underline;
    text-underline-offset: 1px;

    @media screen and (min-width: 1200px) {
        font-size: 0.8em;
    }
}
</style>
