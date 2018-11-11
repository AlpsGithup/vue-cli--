<template>
    <div class="content">
        <div>
             <span class="tit">
             <slot name="tit"></slot>
             </span>
             <a href="">更多></a>
        </div>
        <div class="pics">
            <ul>
                <li v-for="(item,index) in list" :key="index">
                    <img :src="item.img||item.image" alt="">
                    <h5>{{item.titleCn||item.title}}</h5>
                    <span v-show="flag">评分：{{item.ratingFinal}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    // data(){
    //     return{
    //         flag:false,
    //     }
    // },
  props: ["tit", "list","flag"]
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
}
.content {
  padding: 20px;
}
.tit {
  font-size: 26px;
  float: left;
}
a {
  text-decoration: none;
  color: #45b656;
  float: right;
}
.pics {
  margin-top: 50px;
  width: 100%;
  height: auto;
  /* padding-bottom:20px; */
  overflow-x: scroll;
  overflow-y:hidden;
}
.pics > ul {
    /* margin-left:-60px; */
    width:auto;
    height:230px;
     margin-bottom:20px;
     /* overflow: hidden; */
    display: flex;
    justify-content: space-between;
}
.pics > ul > li {
  height: 210px;
  width: 130px;
  /* display: inline-block; */
  margin-left: 10px;
  margin-bottom:10px;
 
}
.pics > ul > li > h5 {
  font-size: 20px;
  overflow:hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.pics > ul > li > img {
  /* width: 100%; */
  height: 90%;
}
</style>