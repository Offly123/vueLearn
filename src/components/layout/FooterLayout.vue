<template>
    <footer>
        <img class="d-first" src="/src/assets/images/D-flying.svg" alt="D" />
        <img class="d-second" src="/src/assets/images/D-flying.svg" alt="D" />
        <div class="footer-main">
            <article class="footer-text">
                <h1>
                    Оставить заявку на поддержку сайта
                </h1>

                <p>
                    Срочно нужна поддержка сайта? 
                    Ваша команда не успевает справиться самостоятельно или 
                    предыдущий подрядчик не справился с работой? 
                    Тогда вам точно к нам! 
                    Просто оставьте заявку и наш менеджер с вами свяжется!
                </p>
                
                <div class="contacts">
                    <h2 class="phone">
                        8 800 123-12-34
                    </h2>
                    <h3>
                        example@mail.mail
                    </h3>
                </div>

            </article>
            <FormUI />
        </div>

        <div class="footer-small-text">
            <p>
                Проект ООО «Инитлаб», Краснодар, Россия.
            </p>
            <p>
                Drupal является зарегистрированной торговой маркой Dries Buytaert.
            </p>
        </div>

    </footer>
</template>

<script setup lang='ts'>
import FormUI from '../ui/FormUI.vue';


</script>


<style scoped>
footer {
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: flex-start;
    overflow: hidden;
    align-items: center;
    width: 100vw;
    padding: 100px 0 50px 0;
    color: white;
    background-image: linear-gradient(90deg, var(--color-main-black), 50%, #090d2a);
}

footer > .d-first {
    position: absolute;
    filter: brightness(70%);
    top: 100px;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 0;
    
    width: 40%;
    @media screen and (min-width: 1200px) {
        width: 20%;
    }
}

footer > .d-second {
    position: absolute;
    filter: brightness(70%);
    margin: auto;
    width: 40%;
    z-index: 0;
    
    right: 0;
    bottom: -75px;
    @media screen and (min-width: 1200px) {
        right: -100px;   
        bottom: -50%;
    }
}

footer > .footer-main {
    display: flex;
    flex-direction: column;
    z-index: 1;
    
    padding: 0 15px;
    @media screen and (min-width: 576px) {
        padding: 0 30px;
    }

    @media screen and (min-width: 992px) {
        flex-direction: row;
        justify-content: space-between;
    }
}

.footer-main > .footer-text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: auto;
    @media screen and (min-width: 992px) {
        width: 50%;
    }

    @media screen and (min-width: 1400px) {
        width: 600px;   
    }
}

.footer-text > h1 {
    text-align: center;
}

.footer-text > p {
    padding: 20px 0px;
    text-align: justify;
}

.footer-text > .contacts {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.contacts > h2, h3 {
    position: relative;
    margin: 10px 0;
    margin-left: 40px;
}

.contacts > h2::before {
    content: '';
    background-image: url('/src/assets/images/phone.svg');
    background-size: 100%;
    background-repeat: no-repeat;
    position: absolute;
    height: 20px;
    aspect-ratio: 1 / 1;
    top: 0;
    right: 110%;
    bottom: 0;
    margin: auto;
}

.contacts > h3 {
    text-decoration: underline;
    text-underline-offset: 1px;
}

.contacts > h3::before {
    content: '';
    background-image: url('/src/assets/images/email-letter.svg');
    background-size: 100%;
    background-repeat: no-repeat;
    position: absolute;
    height: 20px;
    aspect-ratio: 1 / 1;
    top: 0;
    right: 110%;
    bottom: 0;
    margin: auto;
}

footer > .footer-small-text {
    width: 100%;
    border-top: 1px solid rgba(255, 255, 255, .1);
    z-index: 1;
    
    padding: 50px 5px 0 5px;
    display: unset;
    flex-direction: unset;
    @media screen and (min-width: 576px) {
        padding: 50px 30px 0 30px;
    }
    
    @media screen and (min-width: 1200px) {
        display: flex;
        flex-direction: column;
    }
}

.footer-small-text > p {
    color: var(--color-text-gray);

    font-size: none;
    @media screen and (min-width: 1200px) {
        font-size: 13px;   
    }
}
</style>
