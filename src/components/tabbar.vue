<template>
    <div class="tabbarWrap">
        <Item txt='首页' mark='home' :sel='selected' @change="getVal">
            <img src="../assets/images/ic_tab_home_active.png" alt="" slot="activeImg">
            <img src="../assets/images/ic_tab_home_normal.png" alt="" slot="normalImg">
        </Item>
        <Item txt='书影音' mark='audio' :sel='selected' @change="getVal">
            <img src="../assets/images/ic_tab_subject_active.png" alt="" slot="activeImg">
            <img src="../assets/images/ic_tab_subject_normal.png" alt="" slot="normalImg">
        </Item>
        <Item txt='广播' mark='broadcast' :sel='selected' @change="getVal">
             <img src="../assets/images/ic_tab_status_active.png" alt="" slot="activeImg">
            <img src="../assets/images/ic_tab_status_normal.png" alt="" slot="normalImg">
        </Item>
        <Item txt='小组' mark='group' :sel='selected' @change="getVal">
             <img src="../assets/images/ic_tab_group_active.png" alt="" slot="activeImg">
            <img src="../assets/images/ic_tab_group_normal.png" alt="" slot="normalImg">
        </Item>
        <Item txt='我的' mark='mine' :sel='selected' @change="getVal">
             <img src="../assets/images/ic_tab_profile_active.png" alt="" slot="activeImg">
            <img src="../assets/images/ic_tab_profile_normal.png" alt="" slot="normalImg">
        </Item>
    </div>
</template>
<script>
import Item from './item'
    export default{
        data:function(){
            return{
                selected:'home'
            }
        },
        components:{
            Item
        },
        methods:{
            getVal:function(val){
                // console.log(val)
                this.selected=val;
                //导航式路由(或者绑定在子组件item.vue中)
                this.$router.push('/'+val);
            }
        }
    }
</script>
<style>
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}
.tabbarWrap {
  width: 100%;
  height: 70px;
  padding-top:5px;
  padding-bottom:5px;
  border-top: 1px solid #ccc;
  background-color:#ccc;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index:5;
}
</style>
