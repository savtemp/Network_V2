<template>
  <div class="d-flex input-group">
    <input class="form-control" type="text" required placeholder="Search..." v-model="query">
    <button @click="queryOnSearchPage()" class="btn btn-light" type="submit"><i class="mdi mdi-magnify"></i></button>
  </div>
</template>


<script>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { postsService } from '../services/PostsService.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';

export default {
  setup(){
    const query = ref('')

    const router = useRoute()

    return{
      query, 

      // TODO router push this to the search page
      async queryOnSearchPage(){
        try {
          // FIXME
          // router.push('/search', {params: {query}})
          await postsService.queryOnSearchPage(query.value)
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