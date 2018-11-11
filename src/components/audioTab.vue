<template>
    <div>
      <!-- 用不到的页面 -->
        <!-- <Tabitem :list="list" :sel="sel" @change="getIndex">
        </Tabitem> -->
        <!-- <Dianying></Dianying> -->
    
    </div>
</template>
<script>
// import Tabitem from './audioTabitem';
// import Dianying from '../audioPages/dianying'
export default {
//   data() {
//     return {
//       list: ["电影", "读书", "电视", "同城", "音乐"],
//       sel: 0
//     };
//   },
//   // components:{
//   //     Tabitem,
//   //     Dianying
//   // },
//   methods: {
//     getIndex: function(val) {
//       this.sel = val;
//       // if(val==0){
//       //     this.$router.push('/audio/Moves');
//       // }
//       // else if(val==1){
//       //     this.$router.push('/audio/Read');
//       // }
//     }
//   }
};
</script>
<style>
.childWrap {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  padding-bottom: 0;
  border-top: 1px solid #ccc;
}
.childWrap > li {
    padding-bottom: 20px;
    width:15%;
  list-style: none;
}
.childWrap li.active {
  padding-bottom: 20px;
  color: #45b656;
  border-bottom: 2px solid green;
}
</style>

