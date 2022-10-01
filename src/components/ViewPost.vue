<template>
    <div class="card">
        <div class="title">{{singlepost.title}}</div>
        <div class="content">{{singlepost.content}}</div>
    </div>
</template>
<script>
import postmixin from '../mixins/postmixin';

    export default{
        name:'View-Post',
        mixins:[postmixin],
        data(){
            return{
                singlepost:'',
            }
        },
      
        mounted(){
           const postIno= JSON.parse(localStorage.getItem('postInfo'))
            const params = this.$route.params
            console.log(typeof params['postid']);
            console.log(typeof postIno[0]['title'])
        for(let i=0;i<1;i++)
        {
        if(postIno[i]['title'] == params['postid'])
        {
            this.singlepost=postIno[i];
            console.log("gfhjghjg",this.singlepost); 
            break;
        }
    }
    }
}
</script>
<style>
    .card{
      
        background: rgb(107, 107, 147);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-top: 1%;
        margin-left: auto;
        margin-right: auto;
        max-width: 60%;
        flex-wrap: wrap;
        min-height: 30%;
        margin-bottom: 1%;
    }
    .title {
        font-size: 32px;
    
    }
    
    .content {
        font-size: 16px
    }
</style>