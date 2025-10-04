<template>
    <section id="support">
        <h1>Поддержка от Drupal-coder</h1>
        <div class="cards">
            <article class="card">
                <h3>01.</h3>
                <h2>Постановка задачи по Email</h2>
                <p>
                    Удобная и привычная модель 
                    постановки задач, при которой задачи
                    фиксируются и никогда не теряются.
                </p>
                <img src="/src/assets/images/support1.svg" alt="">
            </article>
            <article class="card">
                <h3>02.</h3>
                <h2>Система Helpdesk - отчётность, прозрачность</h2>
                <p> 
                    Возможность посмотреть все заявки в работе
                    и отработанные часы
                    в личном кабинете через браузер.
                </p>
                <img src="/src/assets/images/support2.svg" alt="">
            </article>
            <article class="card">
                <h3>03.</h3>
                <h2>Расширенная техническая поддержка</h2>
                <p>
                    Возможность организации расширенной техподдержки 
                    с 6:00 до 22:00 без выходных.
                </p>
                <img src="/src/assets/images/support3.svg" alt="">
            </article>
            <article class="card">
                <h3>04.</h3>
                <h2>Персональный менеджер проекта</h2>
                <p>
                    Ваш менеджер проекта  всегда в курсе текущего состояния проекта
                    и в любой момент готов ответить на любые вопросы.
                </p>
                <img src="/src/assets/images/support4.svg" alt="">
            </article>
            <article class="card">
                <h3>05.</h3>
                <h2>Удобные способы оплаты</h2>
                <p>
                    Безналичный расчет по договору или электронные деньги: 
                    WebMoney, Яндекс.Деньги, Paypal.
                </p>
                <img src="/src/assets/images/support5.svg" alt="">
            </article>
            <article class="card">
                <h3>06.</h3>
                <h2>Работаем с SLA и NDA</h2>
                <p>
                    Работа в рамках соглашений о конфиденциальности
                    и об уровне качетсва работ.
                </p>
                <img src="/src/assets/images/support6.svg" alt="">
            </article>
            <article class="card">
                <h3>07.</h3>
                <h2>Штатные специалисты</h2>
                <p>
                    Надежные штатные специалисты, никаких фрилансеров.
                </p>
                <img src="/src/assets/images/support7.svg" alt="">
            </article>
            <article class="card">
                <h3>08.</h3>
                <h2>Удобные каналы связи</h2>
                <p>
                    Консультации по телефону, скайпу, в месенджерах.
                </p>
                <img src="/src/assets/images/support8.svg" alt="">
            </article>
        </div>
    </section>
    <section id="support-dark">
        <div class="content">
            <h1>Экспертиза в Drupal, опыт 14 лет!</h1>
            <div class="cards-dark">
                <div class="card-dark">
                    <p>
                        Только системный подход – контроль версий, 
                        резервирование и тестирование!
                    </p>
                </div>
                <div class="card-dark">
                    <p>
                        Только Drupal сайты, не берем на поддержку
                        сайты на других CMS!
                    </p>
                </div>
                <div class="card-dark">
                    <p>
                        Учавствуем в разраотке ядра Drupal и
                        модулей на Drupal.org, разрабатываем
                        <span>свои модули Drupal</span>
                    </p>
                </div>
                <div class="card-dark">
                    <p>
                        Поддерживаем сайты на Drupal 5, 6, 7 и 8
                    </p>
                </div>
            </div>
        </div>
        <img class="drupal-guy" src="/src/assets/images/druplicon.svg" alt="druplicon.svg">
        <img class="laptop" src="/src/assets/images/laptop.png" alt="laptop.png">
    </section>
</template>

<script setup lang='ts'>

</script>


<style scoped>
#support {
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: shown;
    justify-content: flex-start;
    align-items: center;
    z-index: 1;
}

#support::after {
    content: '';
    display: block;
    position: absolute;
    background-image: linear-gradient(90deg, var(--color-main-black), 50%, #090d2a);
    z-index: -1;
    height: 150px;
    width: 100%;
    bottom: 0;
}

#support > h1 {
    text-align: center;
    
    width: 60%;
    @media screen and (min-width: 1000px) {
        width: 500px;
    }
}

#support > .cards {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    
    flex-direction: column;
    flex-wrap: nowrap;
    @media screen and (min-width: 700px) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }

    padding: 0;
    @media screen and (min-width: 1000px) {
        padding: 0 3vw;
    }
}

.cards > .card {
    position: relative;
    box-shadow: 20px 15px 20px rgba(0, 0, 0, 0.1);
    border-radius: 5px 5px 0 5px;
    background-color: white;
    --padding: 10px;
    padding: var(--padding);
    --margin: 3px;
    margin: var(--margin);
    
    height: 200px;
    width: 90%;
    @media screen and (min-width: 700px) {
        height: 300px;
        width: 45%;
    }

    @media screen and (min-width: 1200px) {
        width: calc(25% - 2 * var(--margin));
        /* width: 25%; */
    }
}

.card > h3 {
    color: var(--color-text-gray);
}

.card > h2 {
    display: block;

    @media screen and (min-width: 700px) {
        font-size: min(5vw, 20px);
    }
}

.card > p {
    position: relative;
    z-index: 1;
    
    font-size: calc(var(--font-default-size) * 1.7);
    @media screen and (min-width: 400px) {
        font-size: calc(var(--font-default-size) * 1.4);
    }

    @media screen and (min-width: 600px) {
        font-size: calc(var(--font-default-size) * 1.2);
    }
}

.card > img {
    position: absolute;
    bottom: 0;
    right: 0;
}

#support-dark {
    position: relative;
    color: white;
    overflow-x: hidden;
    overflow-x: visible;
    background-image: linear-gradient(90deg, var(--color-main-black), 50%, #090d2a);
    
    padding: 20px;
    height: 140dvh;
    @media screen and (min-width: 1000px) {
        height: 110dvh;
        padding-top: 40px;
    }
}

#support-dark > .content {
    display: flex;
    flex-direction: column;
    height: 60%;
}

#support-dark > .laptop {
    position: absolute;
    width: 80%;
    left: 0%;

    bottom: -5%;
    @media screen and (min-width: 1000px) {
        width: 70%;
        bottom: -10%;
    }

    @media screen and (min-width: 1200px) {
        width: 60%;
    }
}

#support-dark > .drupal-guy {
    position: absolute;
    width: 120%;
    right: -10%;
    bottom: 0px;
}

.content > .cards-dark {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
    width: 70%;
}

.cards-dark > .card-dark {
    border-left: 3px solid var(--color-orange);
    margin: 20px 0px;
    padding: 5px 15px;
}
</style>
