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
        <li>
            <a href="/placeholder">ПОДДЕРЖКА САЙТОВ</a>
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
        <li>
            <a href="/placeholder">КОНТАКТЫ</a>
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
    margin-right: 5%;
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
    width: fit-content;
    align-items: center;
    padding: 7px 10px;
    height: 10%;
}

ul > li > a {
    font-size: min(2vw, 15px);
    position: relative;
    display: block;
    max-width: max;
    text-align: center;
}

ul > li > a:hover {
    /* При жирном тексте элемент становится больше
    и навбар дёргается при наведении */
    /* font-weight: 600; */
}

ul > li > a::after {
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

ul > li > a:hover::after {
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