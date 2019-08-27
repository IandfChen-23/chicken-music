<template>
  <div>
    <div class="wrapper">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="item of recommendLists" :key="item.id">
          <a :href="item.linkUrl">
            <img class="swiper-img" :src="item.picUrl" style="width:100%">
          </a>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="loading-container" v-show="!topLists">
      <loading></loading>
    </div>
    <div class="topList">
      <div style="text-align:center;font-size:24px" class="list-title">热门歌曲推荐</div>
      <ul>
        <li v-for="item in topLists" :key="item.id" class="item" >
          
            <div class="icon">
              <img :src="item.picUrl" style="width:120px;height:120px" alt>
            </div>
            <ul>
              <li
                style="margin-left: 60px;font-size:18px;margin-top:10px;color:gray"
                v-for="song in item.songList"
              >{{song.singername}}-{{song.songname}}</li>
            </ul>
          
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import loading from "../../base/loading/loading";
import { getRecommend, getTopList } from "../../api/recommend";
import { ERR_OK } from "../../api/config";
import Vue from "vue";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
Vue.use(VueAwesomeSwiper);
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  components: {
    swiper,
    swiperSlide,
    loading
  },
  data() {
    return {
      recommendLists: [],
      topLists: [],
      //轮播设置
      swiperOption: {
        notNextTick: true,
        autoplay: true,
        preloadImages: false,
        slidesPerView: "auto",
        centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 5,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          bulletClass: "my-bullet",
          bulletActiveClass: "my-bullet-active"
        },
        spaceBetween: 30,
        onSlideChangeEnd: swiper => {
          //这个位置放swiper的回调方法
          this.page = swiper.realIndex + 1;
          this.index = swiper.realIndex;
        }
      }
    };
  },
  //定义这个sweiper对象
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    //这边就可以使用swiper这个对象去使用swiper官网中的那些方法
    this.swiper.slideTo(0, 1000, false);
  },

  created() {
    getTopList().then(res => {
      if (res.code === ERR_OK) {
        this.topLists = res.data.topList;
      }
    });
    getRecommend().then(res => {
      if (res.code === ERR_OK) {
        console.log(res.data.slider);
        this.recommendLists = res.data.slider;
      }
    });
  }
};
</script>

<style  lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/variable';

.topList {
  .list-title {
    height: 65px;
    line-height: 65px;
    text-align: center;
    font-size: $font-size-medium;
    color: $color-theme;
  }

  .item {
    display: flex;
    box-sizing: border-box;
    align-items: center;
    padding: 0 20px 20px 20px;

    .icon {
      flex: 0 0 60px;
      width: 60px;
      padding-right: 20px;
    }

    .text {
      display: flex;
      flex-direction: row;
      justify-content: center;
      flex: 1;
      line-height: 20px;
      overflow: hidden;
      font-size: $font-size-medium;

      .name {
        margin-bottom: 10px;
        color: $color-text;
      }

      .desc {
        color: $color-text-d;
      }
    }
  }
}

.loading-container {
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
}
</style>