<template>
    <form id="form" action="" @submit="sendForm">
        <input type="text" name="username" id="username" placeholder="Ваше имя">
        <input type="text" name="phoneNumber" id="phoneNumber" placeholder="Телефон">
        <input type="email" name="email" id="email" placeholder="E-mail">
        <textarea name="commentary" id="commentary" placeholder="Ваш комментарий"></textarea>
        <div class="consent">
            <input type="checkbox" name="user-consent" id="user-consent">
            <label for="user-consent">
                Отправляя заявку, я даю согласие на 
                обработку своих персональных данных
            </label>
        </div>
        <button 
            :disabled="isButtonDisabled" 
            class="send-button" 
            :class="buttonClass" 
            type="submit" 
        >{{ buttonText }}</button>
    </form>
</template>

<script setup lang="ts">

import { useFetchStatus } from '@/stores/fetchStatus'
import { computed } from 'vue'

const fetchStatus = useFetchStatus()

function sendForm(event: SubmitEvent) {
    event.preventDefault()

    fetchStatus.sendFormPlaceholder()
}

const buttonText = computed(() => {
    switch (fetchStatus.status) {
        case 'Pending': return 'Ожидение ответа...'
        case 'Failure': return 'Ошибка'
        case 'Success': return 'Заявка принята'
        default: return 'СВЯЖИТЕСЬ С НАМИ'
    }
})

const buttonClass = computed(() => {
    return fetchStatus.status?.toLowerCase()
})

const isButtonDisabled = computed(() => {
    return fetchStatus.status == 'Pending' || fetchStatus.status == 'Success';
})

// const buttonText = status != null ? status : 'СВЯЖИТЕСЬ С НАМИ'
</script>

<style scoped>
#form {
    display: flex;
    flex-direction: column;
    margin: 50px 0;

    width: auto;
    @media screen and (min-width: 992px) {
        width: 40%;
    }
}

#form > input {
    background-color: transparent;
    border-radius: 5px;
    border: 1px solid gray;
    margin: 5px;
    padding: 15px 20px;
    /* height: 50px; */
}

#form > textarea {
    background-color: transparent;
    border-radius: 5px;
    border: 1px solid gray;
    margin: 5px;
    padding: 15px 20px;
    height: 100px;
}

#form > .send-button {
    background-color: var(--color-orange);
    padding: 20px;
    text-align: center;
    border-radius: 5px;
    margin: 5px;
    user-select: none;
}

.send-button.pending {
    color: black;
    background-color: rgb(195, 188, 0) !important;
}

.send-button.success {
    color: black;
    background-color: rgb(67, 155, 0) !important;
}

.send-button.failure {
    background-color: rgb(204, 0, 0) !important;
}
</style>