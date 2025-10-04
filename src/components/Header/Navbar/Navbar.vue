<template>
<nav>
    <a href="/" id="logo">
        <img src="/src/assets/images/drupal-coder.svg" alt="drupal-coder.png">
    </a>
    <div class="phone-and-lang">
        <p>8 800 123-45-67</p>
        <p>RU</p>
    </div>
    <ul class="links">
        <li class="with-menu">
            <p>ПОДДЕРЖКА САЙТОВ</p>
            <menu class="hover-menu">
                <a href="/placeholder">
                    МИГРАЦИЯ
                </a>
                <a href="/placeholder">
                    БЭКАПЫ
                </a>
                <a href="/placeholder">
                    АУДИТ БЕЗОПАСНОСТИ
                </a>
                <a href="/placeholder">
                    ОПТИМИЗАЦИЯ СКОРОСТИ
                </a>
                <a href="/placeholder">
                    ПЕРЕЕЗД НА HTTPS
                </a>
            </menu>
        </li>
        <li>
            <a href="/placeholder">ТАРИФЫ</a>
        </li>
        <li>
            <a href="/placeholder">НАШИ РАБОТЫ</a>
        </li>
        <li>
            <a href="/placeholder">ОТЗЫВЫ</a>
        </li>
        <li class="with-menu">
            <p>КОНТАКТЫ</p>
            <menu class="hover-menu">
                <a href="/placeholder">
                    ЗАПОЛНИТЕЛЬ
                </a>
                <a href="/placeholder">
                    ЗАПОЛНИТЕЛЬ
                </a>
                <a href="/placeholder">
                    ЗАПОЛНИТЕЛЬ
                </a>
            </menu>
        </li>
    </ul>
</nav>
</template>

<script setup lang="ts">

</script>

<style scoped>
nav {
    display: none;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 20px;
    height: 100px;
    width: 100%;
    text-wrap: nowrap;
    z-index: 1;
}

nav > #logo {
    order: 1;
    height: 30%;
    margin-right: clamp(0px, 5%, 30px);
}

#logo > img {
    height: 100%;
}

ul.links {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    order: 3;
    height: 20%;
    width: 100%;
}

ul.links > li {
    display: flex;
    position: relative;
    width: fit-content;
    align-items: center;
    font-size: min(2vw, 15px);
    padding: 7px 15px;
    height: 10%;
}

ul > li > a, p {
    position: relative;
    display: block;
    text-align: center;
}

ul > li > a:hover, p:hover {
    /* При жирном тексте элемент становится больше
    и навбар дёргается при наведении */
    /* font-weight: 600; */
}

ul > li > a::before, p::before {
    content: '';
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    bottom: -30%;
    background-color: var(--color-orange);
    opacity: 0;
    transition: all 0.1s;
}

ul > li.with-menu::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    width: 10px;
    height: 100%;
    background: url("/src/assets/images/arrow-down.svg") center no-repeat;
    background-size: contain;
    transform: rotate(90deg);
    transition: all 0.1s;
}

ul > li.with-menu:hover::after {
    transform: rotate(0deg);
}

ul > li > a:hover::before, p:hover::before {
    opacity: 1;
}

li > .hover-menu {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    top: 140%;
    padding: 10px 0px;
    background-color: var(--color-orange);
    visibility: hidden;
    opacity: 0;
    position: absolute;
    transition: all 0.1s;
}

li > .hover-menu > a {
    --horizontal-padding: 20px;
    width: calc(100% - 2 * var(--horizontal-padding));
    padding: 2px 20px;
}

li > .hover-menu > a:hover{
    background-color: rgba(0, 0, 0, 0.15);
}

li:hover > .hover-menu {
    visibility: visible;
    opacity: 1;
}

.phone-and-lang {
    position: relative;
    order: 2;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex: 1;
    /* width: auto; */
}

.phone-and-lang > p {
    position: relative;
    font-weight: 500;
    font-size: calc(var(--font-default-size) * 1.2);
    --min-padding: 0px;
    --prefer-padding: 5%;
    --max-padding: 20px;
    padding-left: clamp(var(--min-padding), var(--prefer-padding), var(--max-padding));
    padding-right: clamp(var(--min-padding), var(--prefer-padding), var(--max-padding));
}

.phone-and-lang > :not(:first-child)::after {
    display: inline;
    position: absolute;
    content: '⌄';
    top: -20%
}

.phone-and-lang > :not(:first-child) {
    font-weight: 600;
    font-size: calc(var(--font-default-size) * 1.2);
}

.p-menu {
    position: absolute !important;
    background-color: red !important;
    top: -100% !important;
}

.p-menu-list {
    position: absolute !important;
    background-color: red !important;
    top: -100% !important;
}

@media screen and (min-width: 1400px) {
    nav {
        flex-direction: row !important;
        justify-content: space-around;
    }

    .phone-and-lang {
        position: relative;
        order: 3;
    }

    ul.links {
        order: 2;
        width: unset;
    }

    .phone-and-lang > p {
        font-size: calc(var(--font-default-size) * 1.5);
    }
}

@media screen and (min-width: 1000px) {
    nav {
        display: flex;
    }
}
</style>
