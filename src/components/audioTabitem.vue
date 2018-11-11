<template>
    <div class="tabWrap">
        <!-- 用不到的页面 -->
        <ul>
            <li v-for="(item,index) in list" :key="index" :class="{active:sel==index}" @click="fn(index)">
                <span>{{item}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    // computed:{
    //     flag:function(){
    //         if(this.index==this.sel){
    //             return true;
    //         }
    //         else{
    //             return false;
    //         }
    //     }
    // },
    props:['list','sel'],
    methods:{
        fn:function(index){
            this.$emit("change",index);
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
.tabWrap>ul{
    height:60px;
    display:flex;
    justify-content: space-between;
    padding:20px;
    padding-bottom:0px;
    border-top:1px solid #ccc;
    border-bottom:1px solid #ccc;
}
    .tabWrap>ul>li{
        width:15%;
        display:inline-block;
    }
    .active{
        padding-bottom:20px;
        color:#45b656;
        border-bottom:2px solid #45b656;
    }
</style>


