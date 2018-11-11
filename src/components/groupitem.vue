<template>
    <div>
        <div class="grouptit">
            <span></span>
            <span>影视</span>
            <span></span>
        </div>
        <div class="groupcontent">
            <ul>
                <li v-for="(item,index) in list" :key="index">
                    <img :src="item.LeftPic01" alt="">
                    <div>
                        <h4>{{item.contentTit}}</h4>
                        <span>
                            {{item.contentDeta}}
                        </span>
                    </div>
                    <div>
                        <span>{{item.contentNum}}人</span>
                        <img v-show="item.flag" @click="checkFn(index)" src="../assets/images/ic_group_check_anonymous.png" alt="">
                        <img v-show="!item.flag"  @click="checkFn(index)" src="../assets/images/ic_group_checked_anonymous.png" alt="">
                    </div>
                </li>
            </ul>
        </div>
          <div class="change">
            <button>选好了，去玩小组</button>
        </div>
    </div>
</template>
<script>
import LeftPic01 from "../assets/images/ic_douban_pay.png";
export default {
  data() {
    return {
      list: [
        {
          LeftPic01,
          contentTit: "佳片推荐（只谜电影不装逼）",
          contentDeta:
            "加入豆瓣人数最多的影视组织、临近20C，当尼采这个狂人宣告上帝已死的时候，现代性才跃出了启蒙思想家的思想图纸",
          contentNum: "66667",
          flag: true
        },
        {
          LeftPic01,
          contentTit: "佳片推荐（只谜电影不装逼）",
          contentDeta:
            "加入豆瓣人数最多的影视组织、临近20C，当尼采这个狂人宣告上帝已死的时候，现代性才跃出了启蒙思想家的思想图纸",
          contentNum: "66667",
          flag: true
        },
        {
          LeftPic01,
          contentTit: "佳片推荐（只谜电影不装逼）",
          contentDeta:
            "加入豆瓣人数最多的影视组织、临近20C，当尼采这个狂人宣告上帝已死的时候，现代性才跃出了启蒙思想家的思想图纸",
          contentNum: "66667",
          flag: false
        },
        {
          LeftPic01,
          contentTit: "佳片推荐（只谜电影不装逼）",
          contentDeta:
            "加入豆瓣人数最多的影视组织、临近20C，当尼采这个狂人宣告上帝已死的时候，现代性才跃出了启蒙思想家的思想图纸",
          contentNum: "66667",
          flag: false
        }
      ]
    };
  },
  methods: {
    checkFn: function(index) {
      this.list[index].flag = !this.list[index].flag;
    }
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
}
.grouptit {
  width: 100%;
  margin-top: 10px;
}
.grouptit > span {
  display: inline-block;
  vertical-align: middle;
}
.grouptit > span:nth-of-type(1),
.grouptit > span:nth-of-type(3) {
  height: 1px;
  width: 40%;
  border: 1px solid #ccc;
}
.grouptit > span:nth-of-type(2) {
  margin-right: 5px;
  margin-left: 5px;
}
.groupcontent {
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 130px;
}
.groupcontent > ul > li {
  margin-top: 20px;
}
.groupcontent > ul > li > img:nth-of-type(1) {
  width: 15%;
  float: left;
}
.groupcontent > ul > li > div:nth-of-type(1) {
  margin-left: 10px;
  width: 48%;
  float: left;
  text-align: left;
}
.groupcontent > ul > li > div:nth-of-type(1) > h4 {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.groupcontent > ul > li > div:nth-of-type(1) > span {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  color: #ccc;
}
.groupcontent > ul > li > div:nth-of-type(2) {
  margin-top: 20px;
  width: 30%;
  float: left;
}
.groupcontent > ul > li > div:nth-of-type(2) > span {
  color: #ccc;
  float: left;
  margin-left: 10%;
}
.groupcontent > ul > li > div:nth-of-type(2) > img {
  width: 20%;
  float: right;
}
.groupcontent > ul > li:after {
  content: "";
  display: block;
  clear: both;
}
.change {
  width: 100%;
  height: 50px;
  background-color: #f7f7f7;
  margin-bottom: 50px;
  position: fixed;
  bottom: 20px;
  left: 0;
}
.change > button {
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  float: right;
  margin-right: 20px;
  margin-top: 8px;
}
</style>
