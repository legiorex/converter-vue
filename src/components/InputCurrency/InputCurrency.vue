<template>
    <InputGroup>
        <InputNumber :value="countCoin" v-model="countCoin" @input="updateCount" />
        <InputGroupAddon>
            <div :class="s.wrapperSelect">
                <Select
                    v-model="baseCurrency"
                    :value="baseCurrency"
                    :options="currencies"
                    optionLabel="name"
                    class="w-full md:w-56"
                    optionValue="name"
                    @update:modelValue="updateCurrency"
                />
            </div>
        </InputGroupAddon>
    </InputGroup>
</template>

<script lang="ts" setup>
import InputGroup from 'primevue/inputgroup'
import InputGroupAddon from 'primevue/inputgroupaddon'
import InputNumber, { InputNumberInputEvent } from 'primevue/inputnumber'
import Select from 'primevue/select'
import { ref, watch } from 'vue'
import { storeToRefs } from 'pinia'

import { useConverterStore } from '../../store/useConverterStore'

const converterStore = useConverterStore()
const { currencies } = storeToRefs(converterStore)

type Props = {
    baseCurrency: string
    countCoin: number
}

const props = defineProps<Props>()
const emit = defineEmits(['update:modelValue', 'update:Count'])

const baseCurrency = ref(props.baseCurrency)
const countCoin = ref(props.countCoin)

const updateCurrency = (currency: string) => {
    emit('update:modelValue', currency)
}

const updateCount = (event: InputNumberInputEvent) => {
    emit('update:Count', event.value)
}

watch(
    () => props.countCoin,
    (newValue) => {
        countCoin.value = newValue
    },
)
watch(
    () => props.baseCurrency,
    (newValue) => {
        baseCurrency.value = newValue
    },
)
</script>
<style lang="scss" module="s" src="./s.module.scss" />
