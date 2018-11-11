<template>
    <div>
        <div class="swiper-container">
             <div class="swiper-wrapper">
               <slot name="slider"></slot>
             </div>
             <slot name="pagination"></slot>
         </div>
    </div>
</template>
<script>
import Swiper from "../../node_modules/swiper/dist/js/swiper.min";
export default {
    mounted: function() {
      var mySwiper = new Swiper(".swiper-container", {
        autoplay: true, //可选选项，自动滑动
        pagination: {
          el: ".swiper-pagination",
        //    clickable :true
        },
        loop:true,
      });
    }
};
</script>
<style>
@import url("../../node_modules/swiper/dist/css/swiper.min");
</style>


