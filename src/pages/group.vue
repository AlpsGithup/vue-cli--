<template>
    <div>
        <Myheader txt=" 小组">
            <img src="../assets/images/ic_actionbar_search_icon.png" slot="leftImg">
            <img src="../assets/images/ic_chat_green.png" slot="rightImg">
        </Myheader>
        <div class="groupbanner">
            <div class="banner01">
                <h3>77777个小组等你来玩</h3>
                <span>立即选择加入吧！</span>
                <span class="recom">根据你的兴趣推荐</span>
            </div>
            <GruopSwiper class="swiperCont">
                <div class="swiper-slide" slot="slider" v-for="(item,index) in imgArr" :key="index">
                    <img :src="item" alt="">
                </div>
            </GruopSwiper>
            <div class="type">
                <Gritem></Gritem>
            </div>
        </div>
    </div>
</template>
<script>
import Myheader from "../components/head";
import Gritem from "../components/groupitem";
import GruopSwiper from "../components/swiper";
import Pic01 from "../assets/images/ic_rec_group_banner_1.png";
import Pic02 from "../assets/images/ic_rec_group_banner_2.png";
import Pic03 from "../assets/images/ic_rec_group_banner_3.png";
import Pic04 from "../assets/images/ic_rec_group_banner_4.png";
import Pic05 from "../assets/images/ic_rec_group_banner_5.png";
import Pic06 from "../assets/images/ic_rec_group_banner_6.png";
export default {
    data(){
        return{
            imgArr:[
                Pic01,
                Pic02,
                Pic03,
                Pic04,
                Pic05,
                Pic06
            ]
        }
    },
  components: {
    Myheader,
    GruopSwiper,
    Gritem
  }
};
</script>
<style>
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    .banner01{
        margin-top:48px;
        width:100%;
        height:200px;
        background:url(../assets/images/ic_group_banner.png) center no-repeat;
        background-size:100% 100%;
        text-align: center;
        padding-top:80px;
        position: relative;
    }
    .banner01>span{
        color:#999;
        font-weight:bold;
    }
    .recom{
        font-size:14px;
        display: block;
        position: absolute;
        left:10px;
        bottom:10px;
    }
    .swiperCont{
        padding-left:10px;
        padding-right:10px;
        width:100%;
    }
       .swiper-wrapper img{
        width:100%;
        height:100%;
    }
</style>
