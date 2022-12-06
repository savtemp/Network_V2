<template>
  <div class="row">
    <p>Posts:</p>
  </div>

  <div class="col-10 justify-content-center">
    <div class="row text-center" v-for="p in posts" :key="p.id">
      <PostCard :post="p" />
    </div>
  </div>

</template>


<script>
import PostCard from '../components/PostCard.vue';

export default {
    setup() {
        return {};
    },
    components: { PostCard }
}
</script>

<style lang="scss" scoped>
</style>