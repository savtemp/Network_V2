<template>

  <div class="my-3">
    <div class="div">
      <span class="mx-2">{{ post.creator.name }}</span> <br>
      <span>{{ post.createdAt }}</span> <br>
      <img @click="profilePush()" class="avatar" :src=post.creator.picture alt="Profile Picture"
        :title="post.creator.name">
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
import { router } from "../router";
import Pop from "../utils/Pop";


export default {
  props: {
    post: { type: Object, required: true }
  },


  setup(props) {
    const router = useRouter()

    return {
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
      }


    };

  }
}
</script>

<style>
.avatar {
  height: 50px;
  width: 50px;
  border-radius: 50%;
}

.postImg {
  height: 45VH;
  width: 100%;
}
</style>