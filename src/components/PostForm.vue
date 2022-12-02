<template>
  <div>
    <img class="avatar" :src="profile.picture" alt="">
  </div>
  <form action="" @submit.prevent="handleSubmit">
    <textarea class="form-control" name="body" id="" cols="30" rows="10" placeholder="Share whats happening" v-model="editable.body"></textarea>
    <input class="form-control" type="url" placeholder="Add a photo or video" v-model="editable.imgUrl">
    <button class="btn btn-primary" type="submit">
      <i class="mdi mdi-send"><span>Post</span></i>
    </button>
  </form>
</template>


<script>
import { computed, ref } from '@vue/reactivity';
import { AppState } from '../AppState.js';
import { postsService } from '../services/PostsService.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';

export default {
  setup(){
    const editable = ref({})


    return{
      profile: computed(() => AppState.account),
      editable,

      async handleSubmit(){
        try {
          await postsService.create(editable.value)
          editable.value = {}
          Pop.toast("Post Created", 'success')
        } catch (error) {
          logger.log('[CREATING A POST]', error)
          Pop.error(error)
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
</style>