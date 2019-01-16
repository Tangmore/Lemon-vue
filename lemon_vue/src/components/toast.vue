<template>
    <div class="app-toast" :class="toastClass">
        {{toastMsg}}
    </div>
</template>
<script>
export default {
    data(){
        return {
            
        }
    },
    props:["toastMsg","toastClass"]
        
    
}
</script>
<style>
    .app-toast{
        border-radius: 5px;
        height:1rem;
        line-height: 0rem;
        color:#fff;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        padding:1.5rem;
    }
</style>