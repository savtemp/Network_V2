<template>

    <div class=''>
      <AccountForm />
    </div>

</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
export default {
  setup() {
    return {
      account: computed(() => AppState.account)
    }
  }
}
</script>

<style scoped>

body {
  background-color: #18191a;
}
</style>
