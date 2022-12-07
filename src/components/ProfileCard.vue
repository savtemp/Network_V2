<template>
  <div class="rounded d-flex my-3 dork">
    <div class="p-3">
      <img @click="profilePush()" class="avatar" :src="post.creator.picture" alt="" :title="post.creator.name">
    </div>
    <div class="text-start p-3">
      <p class="m-0">{{post.creator.class}}</p>
      <p class="m-0 fs-4">{{post.creator.name}}</p>
    </div>

  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import Pop from '../utils/Pop.js';
import { router } from '../router.js';
import { useRouter } from 'vue-router';
export default {
  props: {
    post:{type: Object, required: true}
  },


  setup(props){
    const router = useRouter()

  return {  
    account: computed(() => AppState.account),

    profilePush(){
      try {
        console.log(props.post.creator.id)
        router.push({name: 'Profile', params: {id: props.post.creator.id}})
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