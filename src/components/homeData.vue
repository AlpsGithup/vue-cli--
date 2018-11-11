<template>
    <div>
        <div class="secTit">
            <span></span>
            <span>热点</span>
        </div>
       <div class="content" v-for="(item,index) in list" :key="index">
           <div class="content-up">
                <div class="left">
                    <h3>{{item.title}}</h3>
                    <span>{{item.digest}}</span>
                    <hr>    
                </div>
           <div class="right">
               <img :src="item.picInfo[0].url" alt="">
           </div>
           </div>
            <div class="content-bottom"> 
                <span>作者：{{item.source}}</span> 
                <span>{{item.laiyuan}}</span>
           </div>
       </div>
    </div>
</template>
<script>
import axios from "../../node_modules/axios";
export default {
  data: function() {
    return {
      list: [],
    };
  },
  methods:{
      getData:function(){
          axios.post('https://www.apiopen.top/journalismApi').then(resp=>{
            //   console.log(resp.data.data.auto);
            //   console.log(resp.data.data.auto[0].picInfo[0].url);
            // for(var i=0;i<resp.data.data.auto.length;i++){
            //     this.list[i].tit=resp.data.data.auto[i].title;
            //     this.list[i].detail=resp.data.data.auto[i].digest;
            //     this.list[i].authour=resp.data.data.auto[i].source;
            //     this.list[i].src=resp.data.data.auto[i].picInfo[0].url;
            //     console.log(this.list);
            //     this.list.push(this.list[i]);
                
            // }
            this.list=resp.data.data.auto;
           
          }).catch(err=>{

          })
      }
  },
  mounted:function(){
      this.getData();
  }
};
</script>
<style>
.secTit span:nth-of-type(2) {
  display: block;
  width: 70px;
  height: 20px;
  line-height: 20px;
  color: #f60;
  font-weight: bold;
  font-size: 20px;
}
.secTit span:nth-of-type(1) {
  width: 5px;
  height: 20px;
  display: block;
  background-color: #f60;
  float: left;
}
.secTit:after {
  content: "";
  display: block;
  clear: both;
}
.content {
  padding: 20px;
}
.left {
  text-align: left;
  width: 60%;
  float: left;
}
.left h3 {
  margin-bottom: 10px;
}
.left hr {
  margin-top: 10px;
  margin-bottom: 10px;
  width: 20px;
}
.right{
    float:right;
    width:38%;
}
.right img{
    margin-top:30px;
    width:100%;
    /* height:80px; */
}
.content-up:after{
    content:"";
    display: block;
    clear:both;
}
.content-bottom{
    text-align: left;
}
.content-bottom span:nth-of-type(1){
    margin-right:20px;
}
</style>

