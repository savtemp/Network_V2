<template>
  <div class="row d-flex justify-content-center">
    <div class="col-8">
      <img class="coverImg" :src="account.coverImg" alt="">
    </div>
  </div>
  <div class="row">
    <div class="col-2 offset-2">
      <div class="about">
        <img class="movement" :src="account.picture" alt="">
      </div>
    </div>
  </div>

  <AccountForm />
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
.coverImg {
  height: 50VH;
  width: 100%;
  object-fit: cover;
}

.movement {
  top: -40px;
  position: relative;
  border-radius: 50%;
  height: 200px;
  width: 200px;
  object-fit: cover;
  border: 5px solid #18191a;
}

body {
  background-color: #18191a;
}
</style>
