<template>
    <div>
        <Myheader txt=" 书影音">
            <img src="../assets/images/ic_actionbar_search_icon.png" slot="leftImg">
            <img src="../assets/images/ic_chat_green.png" slot="rightImg">
        </Myheader>
           <div class="childWrap">
                <!-- 
                    二级路由导航
                    to：目标组件
                    tag：导航用标签（默认是a标签）
                    active-class：激活时使用的样式类
                -->
                <router-link to='/audio/movies' tag="li" active-class="active">电影</router-link>
                <router-link to='/audio/read' tag="li" active-class="active">读书</router-link>
                <router-link to='/audio/tv' tag="li" active-class="active">电视</router-link>
                <router-link to='/audio/city' tag="li" active-class="active">同城</router-link>
                <router-link to='/audio/music' tag="li" active-class="active">音乐</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
import Myheader from "../components/head";
import AudioTab from "../components/audioTab"
export default {
  components: {
    Myheader,
    AudioTab
  }
};
</script>
<style>
    .childWrap {
        margin-top:48px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  padding-bottom: 0;
  border-top: 1px solid #ccc;
  border-bottom:1px solid #ccc;
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
