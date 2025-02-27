
<template>
  <div>
    test
    <form-page></form-page>
  </div>
</template>

<script setup lang="ts">
import { reactive,toRefs,onMounted} from 'vue'
import { describe, expect, test } from 'vitest'
import {add} from "./test/add.js"
import FormPage  from "./FormPage.vue"

</script>
<style scoped>
</style>