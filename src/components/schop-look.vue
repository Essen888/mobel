<template>
    <div id="schop-look">
   
      <img :src="require('../assets/img/'+  schopLookData.imag1) " alt="img"  class="cart__h" />
    
    </div>  

</template>
<script>
export default {
    name:"schop-look",
    props:{
         schopLookData:{
             type:Object,
            default(){
                return{}
            }
        }
    },
  
}
</script>
