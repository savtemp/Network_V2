<template>
  <div class="d-flex justify-content-center">
    
    <div class="p-2">
      <button @click="changePage(newerPage)" :disabled="!newerPage" class="btn btn-outline-light text-light">
        <i class="mdi mdi-arrow-left"></i>
        <span> Newer</span>
      </button>
    </div>

    <div class="p-2">
      <p class="text-light">pages: {{page}}</p>
    </div>

    <div class="p-2">
      <button @click="changePage(olderPage)" class="btn btn-outline-light text-light">
        <span>Older </span>
        <i class="mdi mdi-arrow-right"></i>
      </button>
    </div>

  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import Pop from '../utils/Pop.js';
import { postsService } from '../services/PostsService.js';
import { profileService } from '../services/ProfileService.js';
export default {
  setup(){
  return {
    olderPage: computed(() => AppState.olderPage),
    newerPage: computed(() => AppState.newerPage),
    page: computed(() => AppState.page),
    totalPages: computed(() => AppState.totalPages),  

    async changePage(url){
      try {
        await postsService.changePage(url)
      } catch (error) {
        console.error(error)
       // @ts-ignore 
        Pop.error(('[ERROR]'), error.message)
      }
    }
  }
  }
};
</script>


<style lang="scss" scoped>

</style>