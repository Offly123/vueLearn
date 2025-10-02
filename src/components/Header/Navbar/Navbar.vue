<template>
<nav>
    <a href="/" id="logo">
        <img src="/src/assets/images/drupal-coder.svg" alt="drupal-coder.png">
    </a>
    <div id="ul-and-phone">
        <ul>
            <li>
                <a text="ПОДДЕРЖКА САЙТОВ" href="/placeholder">ПОДДЕРЖКА САЙТОВ</a>
            </li>
            <li>
                <a text="ТАРИФЫ" href="/placeholder">ТАРИФЫ</a>
            </li>
            <li>
                <a text="НАШИ РАБОТЫ" href="/placeholder">НАШИ РАБОТЫ</a>
            </li>
            <li>
                <a text="ОТЗЫВЫ" href="/placeholder">ОТЗЫВЫ</a>
            </li>
            <li>
                <a text="КОНТАКТЫ" href="/placeholder">КОНТАКТЫ</a>
            </li>
        </ul>
        <div id="phone-and-lang">
            <p>8 800 123-12-34</p>
            <p>RU</p>
        </div>
    </div>
</nav>
</template>

<script>

</script>

<style>
nav {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-top: 20px;
    height: 100px;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    text-wrap: nowrap;
    z-index: 1;
    --min-padding: 0px;
    --prefer-padding: 5%;
    --max-padding: 125px;
    /* padding-left: clamp(var(--min-padding), var(--prefer-padding), var(--max-padding)); */
    padding: 10px clamp(var(--min-padding), var(--prefer-padding), var(--max-padding));
}

nav > #logo {
    height: 30%;
    margin-right: 5%;
}

#logo > img {
    height: 100%;
}

#ul-and-phone {
    flex: 1;
    width: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    /* margin-right: auto; */
    align-items: center;
    justify-self: flex-start;
    height: 100%;
    transition: all 0.1s;
}

ul > li {
    width: fit-content;
    padding: 10px;
}

ul > li > a {
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
    transition: all 0.2s;
}

ul > li > a:hover::after {
    opacity: 1;
}

#phone-and-lang {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    flex: 1;
    width: auto;
}

#phone-and-lang > p {
    position: relative;
    font-weight: 500;
    font-size: calc(var(--font-default-size) * 1.5);
    --min-padding: 0px;
    --prefer-padding: 5%;
    --max-padding: 20px;
    padding-left: clamp(var(--min-padding), var(--prefer-padding), var(--max-padding));
    padding-right: clamp(var(--min-padding), var(--prefer-padding), var(--max-padding));
}

#phone-and-lang > :not(:first-child)::after {
    display: inline;
    position: absolute;
    content: '⌄';
    top: -20%
}
</style>