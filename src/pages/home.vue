<template>
    <div>
        <Myheader class="homeHeader">
            <div slot="homeHead">
                <input type="text" placeholder="影视 图书 唱片 小组等">
                <img src="../assets/images/ic_group_search_small.png" alt="" class="search">
                <img src="../assets/images/ic_scan_gray.png" alt="" class="scan">
                <img src="../assets/images/ic_chat_white.png" alt="" class="chat">
            </div>
        </Myheader>
        <HomeSwiper class="homeSwiper">
            <div class="swiper-slide" slot="slider" v-for="(item,index) in imgArr" :key="index"><img :src="item" alt=""></div>
            <!-- <div class="swiper-slide" slot="slider"><img src="../assets/images/banner/02.jpg" alt=""></div>
            <div class="swiper-slide" slot="slider"><img src="../assets/images/banner/03.jpg" alt=""></div> -->
            <div class="swiper-pagination" slot="pagination"></div>
        </HomeSwiper>
        <HomeData class="homeData"></HomeData>
    </div>
</template>
<script>
//图片引入
import Ban01 from '../assets/images/banner/01.jpg';
import Ban02 from '../assets/images/banner/02.jpg';
import Ban03 from '../assets/images/banner/03.jpg';
import Myheader from "../components/head";
import HomeSwiper from "../components/swiper";
import HomeData from "../components/homeData"
export default {
    data:function(){
        return{
            imgArr:[
                Ban01,
                Ban02,
                Ban03,
            ]
        }
    },
  components: {
    Myheader,
    HomeSwiper,
    HomeData
  },
  methods:{
      mounted:function(){

      }
  }
};
</script>
<style>
    .swiper-wrapper img{
        width:100%;
    }
    .swiper-container{
        margin-top:48px;
    }
    .homeSwiper{
        margin-top:48px;
    }
    .homeData{
        margin-top:28px;
        margin-bottom:50px;
    }
</style>

