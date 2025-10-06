import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useFetchStatus = defineStore('fetchStatus', () => {
    const status = ref<"Pending" | "Success" | "Failure" | null>(null)


    // Имитация отправки формы
    function sendFormPlaceholder() {
        console.log('clicked')

        status.value = "Pending"
        
        setTimeout(() => {
            status.value = Math.random() < 0.5 ? "Success" : "Failure"
            console.log(status.value)
        }, 1000)
    }

    return { status, sendFormPlaceholder }
})
