<template>

  <div class="bg-white elevation-4 rounded d-flex p-0">
    <div class="col-2 p-2">
      <img class="postFormAvatar" :src="profile.picture" alt="">
    </div>
    <form class="col-9 py-2" action="" @submit.prevent="handleSubmit">
        <textarea class="form-control" style="resize: none" name="body" id="" cols="30" rows="5" placeholder="Share your thoughts..."
          v-model="editable.body"></textarea>
        <input class="form-control" type="url" placeholder="Add a photo or video" v-model="editable.imgUrl">
        <div class="text-end">
          <button class="btn btn-outline-dark mt-2" type="submit">
            <i class="mdi mdi-send"> <span> Post</span></i>
          </button>
        </div>
    </form>
  </div>


</template>


<script>
import { computed, ref } from '@vue/reactivity';
import { AppState } from '../AppState.js';
import { postsService } from '../services/PostsService.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';

export default {
  setup() {
    const editable = ref({})
    const phrase = ("                " + "Share what's happening" + " " + AppState.account.name)


    return {
      profile: computed(() => AppState.account),
      phrase,
      editable,

      async handleSubmit() {
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
textarea {
  // background-color: #252526;
  border: dashed #74587e;
}

.postFormAvatar {
  border-radius: 50%;
  height: 60px;
  width: 60px;
  object-fit: cover;
  top: 70px;
  border: 3px solid #bb2fef;
  // position: relative;
}

input {
  // background-color: #252526;
  margin-top: 2px;
  margin-bottom: 2px;
  border: none;
  border: dashed #74587e;
}
</style>