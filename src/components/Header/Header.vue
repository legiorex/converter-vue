<template>
    <header :class="s.header">
        <div :class="s.buttons">
            <Button as="router-link" label="Home" to="/" />
            <Button as="router-link" label="Convert" to="/convert" />
        </div>
        <Select
            v-model="baseCurrency"
            :value="baseCurrency"
            :options="currencies"
            optionLabel="name"
            class="w-full md:w-56"
            optionValue="name"
            @update:modelValue="converterStore.setBaseCurrency"
        />
    </header>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import Select from 'primevue/select'
import { useConverterStore } from '../../store/useConverterStore'

const converterStore = useConverterStore()
const { baseCurrency, currencies } = storeToRefs(converterStore)
</script>

<style module="s" lang="scss" src="./s.module.scss" />
