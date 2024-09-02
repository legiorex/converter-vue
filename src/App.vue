<template>
    <Wrapper>
        <template v-slot:page>
            <RouterView />
        </template>
    </Wrapper>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import Wrapper from './components/Wrapper/Wrapper.vue'
import { useConverterStore } from './store/useConverterStore'

const converterStore = useConverterStore()
const timer = ref<number | null>(null)

onMounted(() => {
    converterStore.fetchExchangeRate()

    timer.value = window.setInterval(() => {
        converterStore.fetchExchangeRate()
    }, 60000)
})
onUnmounted(() => {
    if (timer.value) {
        window.clearInterval(timer.value)
    }
})
</script>
