<template>
    <div :class="s.errorWrapper">
        <h1>{{ props.msg }}</h1>
    </div>
</template>

<script lang="ts" setup>
type Props = {
    msg: string
}

const props = defineProps<Props>()
</script>
<style lang="scss" module="s" src="./s.module.scss" />
