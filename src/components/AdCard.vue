<template>
    <img class="img-fluid" :src="ad.tall" alt="">
</template>


<script>
export default {
  props: {
    ad: {type: Object, required: true}
  },

  setup(props){
    return{
    }
  }
}
</script>


<style lang="scss" scoped>
</style>