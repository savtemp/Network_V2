<template>

  <div class="container-fluid" v-if="profile">
    <div class="row justify-content-center">
      
      <div class="col-10 justify-content-center bg-white text-dark p-0 rounded elevation-4 my-4">
        <div>
          <img class="img-fluid cover-img" :src="profile.coverImg" alt="">
        </div>
        <div class="d-flex justify-content-between">
          <div class="px-3">
            <img class="movement" :src="profile.picture" alt="">
          </div>
          <div>
            <a v-if="profile.github" :href="profile.github"> <img class="icon mx-2"
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" srcset=""></a>
              <a v-if="profile.linkedin" :href="profile.linkedin"> <img class="icon mx-2"
                src="https://openvisualfx.com/wp-content/uploads/2019/10/linkedin-icon-logo-png-transparent.png" alt=""
                srcset=""></a>
                <a v-if="profile.resume" :href="profile.resume"> <img class="icon mx-2"
                  src="https://www.freeiconspng.com/thumbs/resume-icon-png/resume-icon-png-15.png" alt="" srcset=""></a>
                </div>
              </div>
              
              <div class="p-3">
                <p class="m-0">{{profile.class}}</p>
                <p class="fs-3">{{profile.name}}</p>
                <p class="m-0">{{profile.bio}}</p>
              </div>
              
              <div class="text-end p-2" v-if="profile.id == account.id">
                <button class="btn purple-btn">Edit</button>
              </div>
            </div>
            
            <div class="col-10 justify-content-center">
              <div class="row">
                <PostForm v-if="profile.id == account.id" />
              </div>
            </div>
            
            <!-- FIXME this still shows home page URL page numbers, change to show profile posts -->
            <div class="col-10 justify-content-center my-2">
              <div class="row">
                <PageNav />
              </div>
            </div>
            
            <div class="col-10 justify-content-center">
              <div class="row text-center" v-for="p in posts" :key="p.id">
                <PostCard :post="p" />
              </div>
            </div>
            
      </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity"
import { onMounted, watchEffect } from "vue"
import { useRoute } from "vue-router"
import { AppState } from "../AppState"
import PageNav from "../components/PageNav.vue"
import PostForm from "../components/PostForm.vue"
import { profileService } from "../services/ProfileService"
import Pop from "../utils/Pop"


export default {
  setup() {
    const route = useRoute();


    watchEffect(() => {
      if(route.params.id){
        profileService.clearAppState()
        getProfile()
        getPosts()
      }
    })
    
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
      account: computed(() => AppState.account),
      profile: computed(() => AppState.activeProfile),
      posts: computed(() => AppState.profilePosts)
    };
  },
  components: { PostForm, PageNav }
}
</script>

<style scoped>
.coverImg {
  /* height: 25VH; */
  /* height: 200px;
  width: 200px; */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.movement {
  top: -40px;
  /* position: relative; */
  border-radius: 50%;
  height: 200px;
  width: 200px;
  object-fit: cover;
  border: 3px solid #bb2fef;
}

.icon {
  height: 40px;
  width: 40px;
  /* object-fit: cover; */
}

.purple-btn{
  background-color: #74587e;
  color: white;
}
</style>