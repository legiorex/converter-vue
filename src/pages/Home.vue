<template>
    <div v-if="!error" :class="s.cyrrencies">
        <CurrencyInfo
            :loading="loading"
            :baseCoin="baseCurrency"
            :baseCoinIcon="`ci-${baseCurrency.toLowerCase()}`"
            :countBaseCoin="exchangeRate.value[`${coinX.name.toLowerCase()}-${baseCurrency.toLowerCase()}`]"
            :countCoin="1"
            :name="coinX.name"
            :icon="coinX.icon"
        />
        <CurrencyInfo
            :loading="loading"
            :baseCoin="baseCurrency"
            :baseCoinIcon="`ci-${baseCurrency.toLowerCase()}`"
            :countBaseCoin="exchangeRate.value[`${coinY.name.toLowerCase()}-${baseCurrency.toLowerCase()}`]"
            :countCoin="1"
            :name="coinY.name"
            :icon="coinY.icon"
        />
    </div>
    <Error v-if="error" :msg="error" />
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'

import { useConverterStore } from '../store/useConverterStore'
import CurrencyInfo from '../components/CurrencyInfo/CurrencyInfo.vue'
import Error from '../components/Error/Error.vue'

const converterStore = useConverterStore()

const { getConvertibleCurrencies, loading, exchangeRate, error, baseCurrency } = storeToRefs(converterStore)

const coinX = computed(() => getConvertibleCurrencies.value[0])
const coinY = computed(() => getConvertibleCurrencies.value[1])
</script>

<style lang="scss" module="s">
.cyrrencies {
    display: flex;
    gap: 20px;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
}
</style>
