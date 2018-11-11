<template>
    <div class="headWrap">
        <span>{{txt}}</span>
        <!-- <img src="../assets/images/ic_actionbar_search_icon.png">
        <img src="../assets/images/ic_chat_green.png" alt=""> -->
        <span class="leftImg"><slot name="leftImg"></slot></span>
        <span class="rightImg"><slot name="rightImg"></slot></span>
        <div><slot name="homeHead"></slot></div>
    </div>
</template>
<script>
export default {
    props:["txt"]
}
</script>
<style>
    .headWrap{
        width:100%;
        height:48px;
        line-height:48px;
        position:fixed;
        left:0;
        top:0;
        background-color: #f7f7f7;
        text-align: center;
        border-bottom:1px soli #ccc;
        z-index:3;
    }
    .headWrap img{
        width:25px;        
    }
    .headWrap .leftImg{
        position:absolute;
        top:10px;
        right:50px;
    }
    .headWrap .rightImg{
        position:absolute;
        top:10px;
        right:10px;
    }
    .homeHeader{
        /* height:100%;
        width:100%; */
        background-color: #45b656;
    }
     .homeHeader input{
         width:85%;
         height:25px;
         border:none;
         position: absolute;
         left:5px;
         top:10px;
         border-radius: 5px;
         text-indent: 3em;
     }
    .homeHeader input::-webkit-input-placeholder{
         color:#aaa;
     }
     .homeHeader img{
         width:20px;
     }
     .homeHeader .search{
         position:absolute;
         top:10px;
         left:10px;
     }
       .homeHeader .scan{
         position:absolute;
         top:12px;
         right:70px;
     }
     .homeHeader .chat{
         position:absolute;
         top:12px;
         right:10px;
     }
</style>

