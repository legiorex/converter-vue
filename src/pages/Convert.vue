<template>
    <div :class="s.converter">
        <InputCurrency
            :countCoin="countCoinX"
            :baseCurrency="coinX"
            @update:Count="updateCountX"
            @update:modelValue="updateCurrencyX"
        />
        <InputCurrency
            :countCoin="countCoinY"
            :baseCurrency="coinY"
            @update:Count="updateCountY"
            @update:modelValue="updateCurrencyY"
        />
    </div>
</template>
<script lang="ts" setup>
import { computed, ref, toRaw, watch } from 'vue'

import InputCurrency from '../components/InputCurrency/InputCurrency.vue'
import { useConverterStore } from '../store/useConverterStore'
import { roundToTwoDecimalPlaces } from '../utils/roundToTwoDecimalPlaces'

const converterStore = useConverterStore()

const coinX = ref('RUB')
const coinY = ref('USD')
const countCoinX = ref(0)
const countCoinY = ref(0)

const exchangeRate = computed(() => toRaw(converterStore.exchangeRate).value)

const updateCurrencyX = (currency: string) => {
    coinX.value = currency
}
const updateCurrencyY = (currency: string) => {
    coinY.value = currency
}

const changeCount = () => {
    const x = countCoinX.value
    const y = countCoinY.value
    countCoinX.value = y
    countCoinY.value = x
}

const getRate = ({ coinNameX, coinNameY }: { coinNameX: string; coinNameY: string }) => {
    return exchangeRate.value[`${coinNameX.toLowerCase()}-${coinNameY.toLowerCase()}`]
}

const updateCountX = (count: number, coinNameX?: string) => {
    countCoinX.value = count
    const rate = getRate({ coinNameX: coinNameX || coinX.value, coinNameY: coinY.value })
    const result = count * rate

    countCoinY.value = roundToTwoDecimalPlaces(result)
}
const updateCountY = (count: number, coinNameY?: string) => {
    countCoinY.value = count
    const rate = getRate({ coinNameX: coinNameY || coinY.value, coinNameY: coinX.value })
    const result = count * rate

    countCoinX.value = roundToTwoDecimalPlaces(result)
}

watch(coinX, (newValue, oldValue) => {
    if (newValue === coinY.value) {
        coinY.value = oldValue
        changeCount()
    } else {
        updateCountX(countCoinX.value, newValue)
    }
})
watch(coinY, (newValue, oldValue) => {
    if (newValue === coinX.value) {
        coinX.value = oldValue
        changeCount()
    } else {
        updateCountY(countCoinY.value, newValue)
    }
})
</script>

<style lang="scss" module="s">
.converter {
    display: flex;
    flex-direction: column;
    width: 600px;
    gap: 20px;
    margin-left: auto;
    margin-right: auto;
}
</style>
