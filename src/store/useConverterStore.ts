import { defineStore } from 'pinia'
import { ref, computed, reactive } from 'vue'

type NameCurrencies = 'RUB' | 'EUR' | 'USD'
type Currencies = {
    name: NameCurrencies
}[]

type CurrencyInfo = {
    name: NameCurrencies
    icon: string
}

type ConvertibleCurrencies = Record<NameCurrencies, Array<CurrencyInfo>>

const convertibleCurrencies: ConvertibleCurrencies = {
    EUR: [
        { name: 'RUB', icon: 'ci-rub' },
        { name: 'USD', icon: 'ci-usd' },
    ],
    RUB: [
        { name: 'EUR', icon: 'ci-eur' },
        { name: 'USD', icon: 'ci-usd' },
    ],
    USD: [
        { name: 'EUR', icon: 'ci-eur' },
        { name: 'RUB', icon: 'ci-rub' },
    ],
}

type Actions = {
    setBaseCurrency: (currency: NameCurrencies) => void
    fetchExchangeRate: () => void
}

export const useConverterStore = defineStore('converterStore', () => {
    const baseCurrency = ref<NameCurrencies>((localStorage.getItem('baseCurrency') as NameCurrencies) || 'RUB')
    const exchangeRate = reactive<Record<string, number>>({})
    const loading = ref(true)
    const error = ref('')
    const currencies = ref<Currencies>([{ name: 'RUB' }, { name: 'EUR' }, { name: 'USD' }])
    const getConvertibleCurrencies = computed(() => convertibleCurrencies[baseCurrency.value])

    const setBaseCurrency: Actions['setBaseCurrency'] = (currency: NameCurrencies) => {
        localStorage.setItem('baseCurrency', currency)
    }

    const fetchExchangeRate: Actions['fetchExchangeRate'] = async () => {
        try {
            const response = await fetch('https://status.neuralgeneration.com/api/currency')

            if (!response.ok) {
                throw new Error('Network response was not ok')
            }

            const result = await response.json()

            exchangeRate.value = result
        } catch (e) {
            error.value = (e as Error).message
        } finally {
            loading.value = false
        }
    }

    return {
        currencies,
        baseCurrency,
        getConvertibleCurrencies,
        exchangeRate,
        loading,
        error,
        setBaseCurrency,
        fetchExchangeRate,
    }
})
