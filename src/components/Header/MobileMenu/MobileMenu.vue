<template>
    <Accordion value="0">
        <AccordionPanel value="1">
            <AccordionHeader>
                <img src="/src/assets/images/drupal-coder.svg" alt="drupal-coder.svg" height="25">
            </AccordionHeader>
            <AccordionContent>
                <a href="">
                    ПОДДЕРЖКА DRUPAL
                </a>
            </AccordionContent>
            <AccordionContent>
                <Accordion value="2">
                    <AccordionPanel value="3">
                        <AccordionHeader>
                            <p>
                                АДМИНИСТИРОВАНИЕ
                            </p>
                        </AccordionHeader>
                        <AccordionContent>
                            <a href="">
                                МИГРАЦИЯ
                            </a>
                        </AccordionContent>
                        <AccordionContent>
                            <a href="">
                                БЭКАПЫ
                            </a>
                        </AccordionContent>
                        <AccordionContent>
                            <a href="">
                                АУДИТ БЕЗОПАСНОСТИ
                            </a>
                        </AccordionContent>
                        <AccordionContent>
                            <a href="">
                                ОПТИМИЗАЦИЯ СКОРОСТИ
                            </a>
                        </AccordionContent>
                        <AccordionContent>
                            <a href="">
                                ПЕРЕЕЗД НА HTTPS
                            </a>
                        </AccordionContent>
                    </AccordionPanel>
                </Accordion>
            </AccordionContent>
            <AccordionContent>
                <a href="">
                    ПРОДВИЖЕНИЕ
                </a>
            </AccordionContent>
            <AccordionContent>
                <a href="">
                    РЕКЛАМА
                </a>
            </AccordionContent>
            <AccordionContent>
                <Accordion value="4">
                    <AccordionPanel value="5">
                        <AccordionHeader>
                            <p>
                                КОМАНДА
                            </p>
                        </AccordionHeader>
                        <AccordionContent>
                            <a href="">
                                DRUPALGIVE
                            </a>
                        </AccordionContent>
                        <AccordionContent>
                            <a href="">
                                БЛОГ
                            </a>
                        </AccordionContent>
                        <AccordionContent>
                            <a href="">
                                КУРСЫ DRUPAL
                            </a>
                        </AccordionContent>
                    </AccordionPanel>
                </Accordion>
            </AccordionContent>
            <AccordionContent>
                <a href="">
                    ПРОЕКТЫ
                </a>
            </AccordionContent>
            <AccordionContent>
                <a href="">
                    КОНТАКТЫ
                </a>
            </AccordionContent>
        </AccordionPanel>
    </Accordion>
</template>

<script setup lang="ts">
import { Accordion, AccordionContent, AccordionHeader, AccordionPanel } from 'primevue';
</script>

<style>

.p-accordion {
    background-color: var(--color-main-black) !important;
}

.temp {
    padding-bottom: 0px !important;
}

.p-accordionheader {
    background-color: var(--color-main-black) !important;
    border-radius: 0 !important;
    /* padding-left: 0 !important; */
}

.p-accordioncontent:not(:last-child):not(:first-child) {
    background-color: var(--color-main-black) !important;
}

.p-accordioncontent-content {
    border: none !important;
    background-color: var(--color-main-black) !important;
}

.p-accordionpanel {
    border: none !important;
}

a, p {
    font-size: calc(var(--font-default-size) * 1.3);
}
@media screen and (min-width: 1000px) {
    .p-accordion {
        display: none;
    }
}
</style>