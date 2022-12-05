<template>

<div class="row justify-content-center">

  <div class="col-10 justify-content-center my-3">
    <div class="row">
      <PostForm v-if="profile.id" />
    </div>
  </div>
  
  <div class="col-10 justify-content-center">
    <div class="row text-center" v-for="p in posts" :key="p.id">
      <PostCard :post="p" />
    </div>
  </div>
  
</div>




</template>

<script>
import { computed } from "@vue/reactivity"
import { onMounted } from "vue"
import { postsService } from "../services/PostsService"
import { AppState } from '../AppState'
import PostCard from "../components/PostCard.vue"
import Pop from "../utils/Pop.js"
import PostForm from "../components/PostForm.vue"
import { logger } from "../utils/Logger.js"


export default {
  setup() {
    onMounted(() => {
      getAll()
    });

    async function getAll() {
      try {
        await postsService.getAll();
      }
      catch (error) {
        console.error(error);
        // @ts-ignore 
        Pop.error(("[ERROR]"), error.message);
      }
    }

    // async function getAds(){
    //   try {
    //     await adsService.getAds()
    //   } catch (error) {
    //     logger.log('[GETTING ADS]', error)
    //     Pop.error(error)
    //   }
    // }


    return {
      posts: computed(() => AppState.posts),
      profile: computed(() => AppState.account),
      // ads: computed(() => AppState.ads)
    };
  },
  components: { PostCard, PostForm }
}
</script>

<style scoped lang="scss">

</style>
