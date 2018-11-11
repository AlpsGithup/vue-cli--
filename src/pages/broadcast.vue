<template>
    <div>
        <Myheader txt=" 广播">
            <img src="../assets/images/ic_status_search_user.png" slot="leftImg">
            <img src="../assets/images/ic_chat_green.png" slot="rightImg">
        </Myheader>
        <div class="findPer">
            <img src="../assets/images/ic_status_anonymous_header.png" alt="">
            <div>
                <h4>发现有趣的人</h4>
                <span>关注他们，发现更大的世界</span>
            </div>
        </div>
        <div class="content">
            <ul>
                <li v-for="(item,index) in list" :key="index">
                    <img :src="item.src">
                    <div>
                         <span class="close" @click="closeFn(index)">X</span>
                        <span class="author">{{item.author}}</span><br>
                        <span class="follow">{{item.follow}}人关注</span>
                        <button :class="{activebutton:item.followFlag}" @click="followFn(index)">关注</button>
                         <p>{{item.text}} </p>
                         <div class="voted-comm">
                              <img v-show="item.voteflag" @click="vote(index)" src="../assets/images/ic_vote.png" alt="">
                              <img v-show="!item.voteflag" @click="vote(index)" src="../assets/images/ic_fill_voted_large.png" alt="">
                              <span>{{item.votNum}}</span>
                              <img v-show="item.comflag" @click="comm(index)" src="../assets/images/ic_comments_profile.png" alt="">
                              <img v-show="!item.comflag" @click="comm(index)" src="../assets/images/ic_group_comment_0.png" alt="">
                              <span>{{item.commNum}}</span>
                         </div>          
                    </div>
                </li>
            </ul>
        </div>
        <div class="change">
            <span>
                <img src="../assets/images/ic_change_round.png" alt="">
                <a href="">换一批</a>
            </span>
            <button>选好了，进入广播</button>
        </div>
    </div>
</template>
<script>
import Myheader from "../components/head";
import axios from "axios";
export default {
  data() {
    return {
      list: [
        {
          src: require("../assets/images/ic_share_status.png"),
          author: "陈苍苍11",
          follow: "53228",
          text:
            "临近20C，当尼采这个狂人宣告上帝已死的时候，现代性才跃出了启蒙思想家的思想图纸，犹如鬼魅一般真正进入了大众民众的日常思想谱系，于是，形式繁多的现代性学说主宰了20C的大众意识形态，无                 论是虚无主义，存在主义，还是马克思主义等等都是现代性语境下的产物。但随着现代性在意识形态的统治地位不断扩张，现代性所引发的病理在21C也愈发彰显。",
          votNum: 50,
          commNum: 20,
          followFlag:true,
          voteflag: true,
          comflag: true
        },
        {
          src: require("../assets/images/ic_share_status.png"),
          author: "陈苍苍22",
          follow: "53228",
          text:
            "临近20C，当尼采这个狂人宣告上帝已死的时候，现代性才跃出了启蒙思想家的思想图纸，犹如鬼魅一般真正进入了大众民众的日常思想谱系，于是，形式繁多的现代性学说主宰了20C的大众意识形态，无                 论是虚无主义，存在主义，还是马克思主义等等都是现代性语境下的产物。但随着现代性在意识形态的统治地位不断扩张，现代性所引发的病理在21C也愈发彰显。",
          votNum: 50,
          commNum: 20,
          followFlag:true,
          voteflag: true,
          comflag: true
        }
      ]
    };
  },
  components: {
    Myheader
  },
  methods: {
    vote: function(index) {
      this.list[index].voteflag = !this.list[index].voteflag;
      if (this.list[index].voteflag) {
        this.list[index].votNum--;
      } else {
        this.list[index].votNum++;
      }
    },
    comm: function(index) {
      this.list[index].comflag = !this.list[index].comflag;
      if (this.list[index].comflag) {
        this.list[index].commNum--;
      } else {
        this.list[index].commNum++;
      }
    },
    followFn:function(index){
      this.list[index].followFlag = !this.list[index].followFlag;
      if (this.list[index].followFlag) {
        this.list[index].follow--;
      } else {
        this.list[index].follow++;
      }
    },
    closeFn:function(index){
      this.list.splice(index,1);
    }
    //     getData:function(){
    //       //   var params=new URLSearchParams();
    //       // 需要把json文件放在static文件夹下面 这是vue-cli内置服务器对外暴露静态资源的位置
    //         axios.get("../../static/broadcast.json").then(resp=>{
    //             console.log(resp)
    //             this.list=resp.data;
    //         }).catch(err=>{

    //         })
    //     }
    // },
    // mounted:function(){
    //     this.getData();
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: #888;
}
.findPer {
  margin-top: 48px;
  height: 190px;
  padding: 20px 30px;
  text-align: left;
  background-color: #f7f7f7;
  border-top: 1px solid #ccc;
}
.findPer > div {
  padding-top: 40px;
  /* vertical-align: middle; */
}
.findPer > img {
  width: 40%;
  height: 100%;
  float: left;
  margin-right: 20px;
}
.findPer:after {
  content: "";
  display: block;
  clear: both;
}
.content > ul {
  margin-bottom: 150px;
}
.content > ul > li {
  width: 100%;
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 2px solid #ccc;
}
.content > ul > li:last-child {
  border: none;
}
.content > ul > li > img {
  width: 20%;
  border-radius: 100%;
  float: left;
}
.content > ul > li:after {
  content: "";
  display: block;
  clear: both;
}
.content > ul > li > div {
  width: 70%;
  float: right;
  text-align: left;
  position: relative;
}
.content > ul > li > div > p {
  margin-top: 10px;
}
.author {
  font-weight: bold;
}
.follow {
  font-size: 14px;
  color: #999;
}
.close {
  display: block;
  position: absolute;
  right: 5px;
  top: -10px;
  /* background-color: #ccc; */
  padding: 5px;
  border-radius: 50%;
}
button {
  border: none;
  padding: 8px 20px;
  font-size: 16px;
  color: #fff;
  border-radius: 5px;
  outline-color: #fff;
}
.content > ul > li > div > button {
  position: absolute;
  right: 17%;
  top: 0;
}
.content > ul > li > div > .activebutton{
background-color: #45b656;
}
.change {
  width: 100%;
  background-color: #f7f7f7;
  margin-bottom: 50px;
  position: fixed;
  bottom: 20px;
  left: 0;
}
.change > span {
  height: 100%;
  display: inline-block;
  margin-right: 20px;
}
.change > span > img,
.change > span > a {
  vertical-align: middle;
}
.change > span > a {
  margin-left: 5px;
  margin-top: 8px;
}
.change > button {
  margin-top: 13px;
}
.change:after {
  content: "";
  display: block;
  clear: both;
}
.voted-comm {
  margin-top: 15px;
  height: 20px;
  line-height: 20px;
  /* vertical-align: middle; */
}
.voted-comm > img {
  height: 100%;
}
.voted-comm > span {
  display: inline-block;
  margin-right: 20px;
  /* margin-top:-5px; */
  vertical-align: 3px;
  height: 20px;
  line-height: 20px;
  font-size: 14px;
  color: #ccc;
}
</style>


