<template>
  <div style="height: 100%">
    <cyclical-photo :photos="photos" :notNextTick=notNextTick SwiperHeight="900px"></cyclical-photo>
    <my-footer :message="message"></my-footer>
  </div>
</template>

<script>
  import CyclicalPhoto from '../components/CyclicalPhoto';
  import MyFooter from '../components/MyFooter'

  export default {
    name: "welcome-page",
    components: {CyclicalPhoto, MyFooter},
    data() {
      return {
        photos: [],
        notNextTick: false,
        message:"svnshing自制相册",
      }
    },
    mounted() {
      for (let i = 1; i < 8; i++) {
        let displayPhoto = {
          id: i,
          src: require("@/assets/image/" + i + ".jpg"),
        }
        this.photos.push(displayPhoto);
      }

    }
  }
</script>

<style scoped>

</style>
