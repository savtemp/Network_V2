<template>

  <div class="row justify-content-center">
    <div class="col-4 justify-content-center">
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

export default {
  setup() {
    onMounted(() => {
      getAll();
    });
    async function getAll() {
      try {
        let posts = await postsService.getAll();
      }
      catch (error) {
        console.error(error);
        // @ts-ignore 
        Pop.error(("[ERROR]"), error.message);
      }
    }
    return {
      posts: computed(() => AppState.posts.posts)
    };
  },
  components: { PostCard }
}
</script>

<style scoped lang="scss">

</style>
