<template>

  <img :src=profile.coverImg alt="">
  <img class="avatar" :src=profile.picture alt="">
  <h1>{{ profile.name }}</h1>
  <p>{{ profile.bio }}</p>
  <p>Class: {{ profile.class }}</p>
  <span>Has Graduated: {{ profile.graduated }}</span> <br>
  <span>Github: {{ profile.github }}</span> <br>
  <span>LinkedIn: {{ profile.linkedin }}</span> <br>
  <span>Resume: {{ profile.resume }}</span> <br>
  <span>Email: {{ profile.email }}</span> <br>

  <div class="row justify-content-center">
    <div class="col-4 justify-content-center">
      <div class="row">
        <PostForm />
      </div>
    </div>
  </div>

  <div class="row justify-content-center">
    <div class="col-4 justify-content-center">
      <div class="text-center row" v-for="p in posts" :key="p.id">
        <PostCard :post="p" />
      </div>
    </div>
  </div>

</template>

<script>
import { computed } from "@vue/reactivity"
import { onMounted } from "vue"
import { useRoute } from "vue-router"
import { AppState } from "../AppState"
import PostForm from "../components/PostForm.vue"
import { profileService } from "../services/ProfileService"
import Pop from "../utils/Pop"


export default {
    setup() {
        const route = useRoute();
        onMounted(() => {
            getPosts();
            getProfile();
        });
        async function getPosts() {
            try {
                console.log(route.params.id);
                let profileId = route.params.id;
                await profileService.getPostsById(profileId);
            }
            catch (error) {
                console.error(error);
                // @ts-ignore 
                Pop.error(("[ERROR]"), error.message);
            }
        }
        async function getProfile() {
            try {
                await profileService.getProfileById(route.params.id);
            }
            catch (error) {
                console.error(error);
                // @ts-ignore 
                Pop.error(("[ERROR]"), error.message);
            }
        }
        return {
            profile: computed(() => AppState.activeProfile),
            posts: computed(() => AppState.profilePost)
        };
    },
    components: { PostForm }
}
</script>

<style>

</style>