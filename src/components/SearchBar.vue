<template>
  <div class="input-group">
    <form class="d-flex" @submit.prevent="queryOnSearchPage()" action="">
      <input class="form-control" type="text" required placeholder="Search..." v-model="query">
      <button class="btn btn-light" type="submit"><i class="mdi mdi-magnify"></i></button>
    </form>
  </div>
</template>


<script>
import { ref } from 'vue';
import { router } from '../router.js';
import { postsService } from '../services/PostsService.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';

export default {
  setup(){
    const query = ref('')

    return{
      query, 

      async queryOnSearchPage(){
        try {
          router.push({name: 'Search', query: {query: query.value}})
          await postsService.queryOnSearchPage(query.value)
          query.value = ''
        } catch (error) {
          logger.log('[SEARCHING POST]', error)
          Pop.error(error)
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
</style>