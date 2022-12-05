<template>

  <div class="my-3 card dork">
    <div class="div">
      <span class="mx-2">{{ post.creator.name }}</span> <br>
      <span>{{ post.createdAt }}</span> <br>
      <img @click="profilePush()" class="avatar" :src=post.creator.picture alt="Profile Picture"
        :title="post.creator.name">
    </div>
    <div v-if="post.creator.id == account.id">
      <button class="btn btn-danger" @click="deletePost(post.id)"> <i class="mdi mdi-delete"></i> </button>
    </div>
    <p>{{ post.body }}</p>
    <img class="postImg" :src=post.imgUrl alt="">
    <div class="div">
      <i class="mdi mdi-heart-outline"> {{ post.likes.length }}</i>
    </div>

  </div>

</template>

<script>
import { computed } from "@vue/reactivity";
import { useRoute, useRouter } from "vue-router";
import { AppState } from "../AppState";
import { ref } from "vue";
import { router } from "../router";
import { postsService } from "../services/PostsService.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop";


export default {
  props: {
    post: { type: Object, required: true }
  },


  setup(props) {
    const router = useRouter()

    const deleting = ref(false)

    return {
      deleting,
      account: computed(() => AppState.account),

      profilePush() {
        try {
          console.log(props.post.creator.id);
          router.push({ name: 'Profile', params: { id: props.post.creator.id } })
        } catch (error) {
          console.error(error)
          // @ts-ignore 
          Pop.error(('[ERROR]'), error.message)
        }
      },

      async deletePost(postId) {
        try {
          // console.log(props.post.id)
          const yes = await Pop.confirm("Do you want to delete this post?")
          if (!yes) { return }
          await postsService.delete(postId)
        } catch (error) {
          logger.error('[DELETING POST]', error)
          Pop.error(error)
        }
      }


    };

  }
}
</script>

<style>
.avatar {
  height: 60px;
  width: 60px;
  border-radius: 50%;
  object-fit: cover
}

.postImg {
  height: 45VH;
  width: 100%;
  object-fit: cover;
}

.dork {
  background-color: #252526;
  color: rgb(243, 240, 238);
}
</style>