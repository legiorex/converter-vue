<template>
  <div :class="s.wrapper">
    <Header/>
    <main>
      <slot name="page"></slot>
    </main>
  </div>
</template>
<script lang="ts" setup>
import Header from '../Header/Header.vue'


</script>

<style module="s" lang="scss" src="./s.module.scss" />
