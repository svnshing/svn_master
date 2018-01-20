<!-- The ref attr used to find the swiper instance -->
<template>
  <!-- 照片轮播器-->
    <div style="height: 100%;overflow: hidden">
      <swiper :options="swiperOption" ref="mySwiper" :style="{height:SwiperHeight}"><!-- @someSwiperEvent="callback"-->
        <!-- slides -->
        <div class="swiper-slide photo-div" v-for="photo in photos" >
          <img :src="photo.src" class="photo" :id="photo.id" @mouseenter.stop="stopAutoPlay($event,photo)" @mouseleave.stop="openAutoPlay">
        </div>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
        <!--<div class="swiper-scrollbar"   slot="scrollbar"></div>-->
      </swiper>
    </div>
</template>

<script>
  export default {
    name: 'CyclicalPhoto',
    props:{
      photos:{
        type:Array,
        default:[],
      },
      notNextTick:{
        type:Boolean,
        default:true,
      },
      SwiperHeight:{
        type:String,
        default:"100%",
      }
    },
    data() {
      return {
          swiperOption: {
            // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，<br>　　　　　　　　
            // 假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
            notNextTick: this.notNextTick,
            autoplay: {
              delay: 3000,
              stopOnLastSlide: false,
              disableOnInteraction: false,//触碰后自动切换也不会停止
            },
            speed:400,
            direction : 'horizontal',
            loop : false,//环路播放
            grabCursor : false,
            setWrapperSize :true,
            autoHeight: true,
            paginationClickable :true,
            mousewheelControl : true,
            observeParents:true,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            effect : 'coverflow',
            slidesPerView: 3,
            centeredSlides: true,
            coverflowEffect: {
              rotate: 30,
              stretch: 10,
              depth: 60,
              modifier: 2,
              slideShadows : false
            },
            pagination: {
              el: '.swiper-pagination',
              clickable :true,
            },
            observer:true,//添加事件监听
            watchSlidesProgress : true,//可获取当前展示的图片
        },
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      },
    },
    mounted() {
      // current swiper instance
      this.swiper.slideTo(0, 1000, false);
    },
    methods:{
      stopAutoPlay:function ($event,photo) {
        console.log("計算的id值"+~~(Math.floor(this.swiper.progress * this.photos.length)+1)+"\n");
        console.log("實際的id值"+photo.id+"\n");
        if(photo.id === ~~(Math.floor(this.swiper.progress * this.photos.length)+1)){
          this.swiper.autoplay.stop();
        }
      },
      openAutoPlay:function ($event) {
        this.swiper.autoplay.start();
      }
    }
  }
</script>
<style scoped>
  .photo{
    width: 500px;
    height: 500px;
  }
  .photo-div{
    top: 32%;
  }
</style>
