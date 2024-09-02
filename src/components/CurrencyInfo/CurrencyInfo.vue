<template>
    <Skeleton v-if="loading" :class="s.wrapper"></Skeleton>
    <div v-if="!loading" :class="s.wrapper">
        <div :class="s.currency">
            <h3>{{ props.countCoin }}</h3>
            <v-icon :name="props.icon" />
            <h3>{{ props.name }}</h3>
        </div>
        =
        <div :class="s.currency">
            <h3>{{ roundToTwoDecimalPlaces(props.countBaseCoin) }}</h3>
            <v-icon :name="baseCoinIcon" />
            <h3>{{ props.baseCoin }}</h3>
        </div>
    </div>
</template>

<script setup lang="ts">
import Skeleton from 'primevue/skeleton'
import { roundToTwoDecimalPlaces } from '../../utils/roundToTwoDecimalPlaces'

type Props = {
    name: string
    icon: string
    baseCoin: string
    baseCoinIcon: string
    countCoin: number
    countBaseCoin: number
    loading: boolean
}

const props = defineProps<Props>()
</script>

<style lang="scss" module="s" src="./s.module.scss" />
