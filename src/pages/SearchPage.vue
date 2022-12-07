<template>
  <div class="container-fluid">

    <!-- SECTION Searched Profiles -->
    <div class="row justify-content-center">
      <p class="fs-3 text-light">Profiles:</p>
      <div class="col-10 justify-content-center">
        <div class="row text-center" v-for="p in posts" :key="p.id">
          <ProfileCard :post="p" /> 
        </div>
      </div>
    </div>
    
    <!-- SECTION Searched Posts -->
    <div class="row justify-content-center">
      <p class="fs-3 text-light">Posts:</p>
      <div class="col-10 justify-content-center">
        <div class="row text-center" v-for="p in posts" :key="p.id">
          <PostCard :post="p" />
        </div>
      </div>
    </div>
    
  </div>
</template>


<script>
import { computed } from '@vue/reactivity';
import { AppState } from '../AppState.js';
import PostCard from '../components/PostCard.vue';
import ProfileCard from '../components/ProfileCard.vue';

export default {
    setup() {
        return {
          posts: computed(() => AppState.posts),
          profile: computed(() => AppState.account)
        };
    },
    components: { PostCard, ProfileCard }
}
</script>

<style lang="scss" scoped>
</style>