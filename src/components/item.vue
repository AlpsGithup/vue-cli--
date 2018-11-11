<template>
    <div class="itemWrap" @click='fn'>
        <!-- <img src="../assets/images/ic_tab_home_active.png" alt=""> -->
        <span v-show="flag"><slot name="activeImg"></slot><br></span>
         <span v-show="!flag"><slot name="normalImg"></slot><br></span>
        <span :class="{active:flag}">{{txt}}</span>
    </div>
</template>
<script>
export default {
    // data:function(){
    //     return{
    //         flag:false 
    //     }
    // },
    //计算属性 加入逻辑运算
    computed:{
        flag:function(){
            if(this.mark==this.sel){
                return true;
            }
            else{
                return false;
            }
        }
    },
    props:['txt','mark','sel'],
    methods:{
        fn:function(){
            this.$emit("change",this.mark);
            // //导航式路由(或者绑定在父组件tabbar.vue中)
            // this.$router.push("/"+this.mark)
        }
    }
}
</script>

<style>
    .itemWrap{
        width:20%;
        text-align: center;
        float:left;
    }
    .itemWrap img{
        width:35px;
    }
    .itemWrap .active{
        color:#45b656;
    }
</style>

