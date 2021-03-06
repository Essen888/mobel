<template>
    <div id="schop-look">
   
      <img :src="require('../assets/img/'+  schopLook_data.imag1) " alt="img"  class="cart__h" />
    
    </div>  

</template>
<script>
export default {
    name:"schop-look",
    props:{
         schopLook_data:{
             type:Object,
            default(){
                return{}
            }
        }
    },
  
}
</script>
