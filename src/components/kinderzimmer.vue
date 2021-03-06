<template>
    <div id="kinderzimmer">
   
      <img :src=" require('../assets/img/'+cartData.imag) " alt="img"  class="cart__h" />
    
    </div>  

</template>
<script>
export default {
    name:"kinderzimmer",
    props:{
        cartData:{
            type:Object,
            default(){
                return{}
            }
        }
    },
  
}
</script>
