<template>

  <div class="d-flex overflow">

    <!-- SECTION Profile Card -->
    <section class="bg-white h-75">
      <img class="avatar" :src="profile.picture" alt="">
      <p>{{profile.class}}</p>
      <p>{{profile.name}}</p>
      <p>{{profile.github}}</p>
      <p>{{profile.linkedin}}</p>
      <p>{{profile.resume}}</p>
    </section>
  
    <div class="container-fluid p-0 ">
      <header>
        <Navbar />
      </header>
  
      <main>
        <div class="d-flex">
          <router-view />
          <!-- Ads -->
          <section>
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
</style>
