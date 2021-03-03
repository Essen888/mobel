<template>
    <div id="kinderzimmer">
   
      <img :src=" require('../assets/img/'+cart_data.imag) " alt="img"  class="cart__h" />
    
    </div>  

</template>
<script>
export default {
    name:"kinderzimmer",
    props:{
        cart_data:{
            type:Object,
            default(){
                return{}
            }
        }
    },
  
}
</script>
