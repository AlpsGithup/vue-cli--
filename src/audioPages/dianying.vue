<template>
    <div>
     <Moveitem class="Moves" :list="list1" :flag="true">
         <span slot="tit">影院热映</span>
     </Moveitem>
      <div class="ads" v-for="(item,index) in ads" :key="index">
         <!-- <img :src="item.url" alt=""> -->
         <img src="../assets/images/gl750175.jpg" alt="">
         <h4>{{item.tag}}</h4>
     </div>
      <Moveitem class="Moves" :list="list2">
         <span slot="tit">即将上线</span>
     </Moveitem>
    
    </div>
</template>
<script>
import Moveitem from '../audioPages/pageItems';
import axios from 'axios'
export default {
    data(){
        return{
            list1:[],
            list2:[],
            ads:[]
        }
    },
    components:{
        Moveitem
    },
    methods:{
        getData:function(){
            // 跨域  https://blog.csdn.net/yuanlaijike/article/details/80522621
            // https://api-m.mtime.cn/PageSubArea/HotPlayMovies.api?locationId=290
            // https://api-m.mtime.cn/Movie/MovieComingNew.api?locationId=290
            // https://ticket-api-m.mtime.cn/movie/detail.api?locationId=290&movieId=125805
            axios.post("/a/PageSubArea/HotPlayMovies.api?locationId=290").then(resp=>{
                // console.log(resp.data.movies)
                this.list1=resp.data.movies;
            }).catch(err=>{

            });
            axios.post("/a/Movie/MovieComingNew.api?locationId=290").then(resp=>{
                // console.log(resp.data.aattention)
                this.list2=resp.data.attention;
               
            }).catch(err=>{

            });
             axios.post("/b/movie/detail.api?locationId=290&movieId=125805").then(resp=>{
                // console.log(resp.data.data)
                 this.ads=resp.data.data.advertisement.advList;
            }).catch(err=>{

            });
        }
    },
    mounted:function(){
        this.getData();
    }

}
</script>
<style>
    .Moves:last-child{
        margin-bottom:60px;
    }
    .ads>img{
        width:100%;
    }
</style>


