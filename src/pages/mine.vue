<template>
    <div>
        <Myheader txt=" 我的">
            <img src="../assets/images/ic_chat_green.png" slot="rightImg">
        </Myheader>
        <div class="mineban">
            <img src="../assets/images/ic_award_tag.png" alt="">
            <div>
                <h4 class="myname">周杰伦<img src="../assets/images/ic_mine_male.png" alt=""></h4>
                <span>ID:1112222333</span><br><br>
                <span>关注 1万</span>&nbsp;&nbsp;&nbsp;
                <span>被关注  &nbsp;2万</span>
            </div>
            <span>个人主页 ></span>
        </div>
        <div class="cont-one">
            <ul>
                <li>
                    <span><img src="../assets/images/ic_mine_notification.png" alt="">提醒</span>
                    <span></span>
                    <span>></span>
                    <!-- <img src="../assets/images/ic_seti_arrow_right_gray.png" alt=""> -->
                </li>
                <li>
                    <span>暂无提醒</span>
                </li>
            </ul>
        </div>
        <div class="itemlist">
          <ul>
            <li>
                <Myitems icontxt="喜欢">
                  <div slot="iconimg">
                    <img src="../assets/images/ic_my_likes.png" alt=""><br>
                  </div>
                </Myitems>
               <Myitems icontxt="日记">
                  <div slot="iconimg">
                    <img src="../assets/images/ic_my_note.png" alt=""><br>
                  </div>
                </Myitems>
                <Myitems icontxt="相册">
                  <div slot="iconimg">
                    <img src="../assets/images/ic_my_album.png" alt=""><br>
                  </div>
                </Myitems>
                <Myitems icontxt="我的广播">
                  <div slot="iconimg">
                    <img src="../assets/images/ic_my_status.png" alt=""><br>
                  </div>
                </Myitems>
            </li>
              <li>
                <Myitems icontxt="电影.电视">
                  <div slot="iconimg">
                    <img src="../assets/images/ic_my_movies_tvs.png" alt=""><br>
                  </div>
                </Myitems>
               <Myitems icontxt="读书">
                  <div slot="iconimg">
                    <img src="../assets/images/ic_my_books.png" alt=""><br>
                  </div>
                </Myitems>
                <Myitems icontxt="音乐">
                  <div slot="iconimg">
                    <img src="../assets/images/ic_my_music.png" alt=""><br>
                  </div>
                </Myitems>
                <Myitems icontxt="同城活动">
                  <div slot="iconimg">
                    <img src="../assets/images/ic_my_events.png" alt=""><br>
                  </div>
                </Myitems>
            </li>
              <li>
                <Myitems icontxt="舞台剧">
                  <div slot="iconimg">
                    <img src="../assets/images/ic_drama_channel_logo.png" alt=""><br>
                   
                  </div>
                </Myitems>
               <Myitems icontxt="豆瓣时间">
                  <div slot="iconimg">
                     <img src="../assets/images/ic_my_likes.png" alt=""><br>
                  </div>
                </Myitems>
                <Myitems icontxt="豆列">
                  <div slot="iconimg">
                    <img src="../assets/images/ic_my_doulist.png" alt=""><br>
                  </div>
                </Myitems>
                <Myitems icontxt="订单">
                  <div slot="iconimg">
                    <img src="../assets/images/ic_my_orders.png" alt=""><br>
                  </div>
                </Myitems>
            </li>
          </ul>
           
        </div>
    </div>
</template>
<script>
import Myitems from "../components/mineItem"
import Myheader from "../components/head";
export default {
  components: {
    Myheader,
    Myitems
  }
};
</script>
<style>
.mineban {
  margin-top: 50px;
  width: 100%;
  height: 170px;
  background: url("../assets/images/live_player_bg.jpg") center no-repeat;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 20px;
  padding-left: 20px;
  color: #fff;
}
.mineban > img {
  width: 20%;
  height: 40px;
  margin-right: 10px;
}
.mineban > div {
  text-align: left;
}
.myname {
  margin-bottom: 5px;
}
.myname > img {
  margin-left: 5px;
  width: 6%;
  vertical-align: -2px;
}
.cont-one ul {
  padding-left: 20px;
  padding-right: 20px;
  background-color: #f7f7f7
}
.cont-one li {
  display: flex;
  align-items: center;
  justify-content: space-between;
   padding-right: 20px;
}
.cont-one {
  margin-top: 20px;
}
.cont-one li:nth-of-type(1) {
  height:50px;
  padding-top:10px;
    padding-bottom:10px;
  border-bottom: 1px solid #ccc;
}
.cont-one li > img {
  width: 8%;
  height: 20px;
}
.cont-one li > span > img {
  width: 40%;
  vertical-align: middle;
  margin-right:5px;
}
.cont-one li:nth-of-type(2){
  text-align: center;
  height:50px;
}
.cont-one li:nth-of-type(2)>span{
  color:#999;
  position: absolute;
  left:50%;
  transform:translateX(-50%);
}
.itemlist{
  margin-bottom:80px;
}
.itemlist li{
  display:flex;
  justify-content:space-between;
  padding:20px 15px;
  border-bottom:1px solid #ccc;
}
</style>
