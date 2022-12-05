<template>

  <div class="d-flex overflow">

    <!-- SECTION Profile Card -->
    <section class="bg-white rounded h-75">
      <div class="text-center p-3">
        <img class="profile-card-img text-center" :src="profile.picture" alt="">
      </div>
      <div class="mx-4">
        <p class="m-0">{{profile.class}}</p>
        <p class="m-0 fs-3"><b> {{profile.name}}</b></p>
      </div>
      <div class="d-flex flex-column my-5">
        <div class="d-flex my-2">
          <a v-if="profile.github" :href="profile.github"> <img class="icon mx-2"
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" srcset=""></a>
          <p class="m-0">{{profile.github}}</p>
        </div>
        <div class="d-flex my-2">
          <a v-if="profile.linkedin" :href="profile.linkedin"> <img class="icon mx-2"
                src="https://openvisualfx.com/wp-content/uploads/2019/10/linkedin-icon-logo-png-transparent.png" alt=""
                srcset=""></a>
          <p class="m-0">{{profile.linkedin}}</p>
        </div>
        <div class="d-flex my-2">
          <a v-if="profile.resume" :href="profile.resume"> <img class="icon mx-2"
                src="https://www.freeiconspng.com/thumbs/resume-icon-png/resume-icon-png-15.png" alt="" srcset=""></a>
          <p class="m-0">{{profile.resume}}</p>
        </div>
      </div>
    </section>
  
    <div class="container-fluid p-0 ">
      <header>
        <Navbar />
      </header>
  
      <main>
        <div class="d-flex">
          <router-view />
          <!-- Ads -->
          <section class="p-3">
            <div v-for="ad in ads" :key="ad.title">
              <AdCard :ad="ad" />
            </div>
          </section>
        </div>
      </main>
    </div>

  </div>



  <!-- <footer class="bg-dark text-light">
  </footer> -->
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from './AppState'
import AdCard from './components/AdCard.vue'
import Navbar from './components/Navbar.vue'
import { adsService } from './services/AdsService.js'

export default {
  setup() {

    onMounted(() => {
      getAds()
    })
    
    async function getAds(){
      try {
        await adsService.getAds()
      } catch (error) {
        logger.log('[GETTING ADS]', error)
        Pop.error(error)
      }
    } 

    return {
      appState: computed(() => AppState),
      profile: computed(() => AppState.account),
      ads: computed(() => AppState.ads)
    }
  },
  components: { Navbar, AdCard }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

:root {
  --main-height: calc(100vh - 32px - 64px);
}


footer {
  display: grid;
  place-content: center;
  height: 32px;
}

body {
  background-color: #18191a !important;
}

.overflow{
  overflow-x: hidden;
}

.profile-card-img{
  border-radius: 50%;
  height: 200px;
  width: 200px;
  object-fit: cover;
  border: 5px solid #252526;
}

.icon {
  height: 40px;
  width: 40px;
  object-fit: cover;
}

</style>
