<template>
  <div id="cartsect">
    <div class="cart">
      <div class="cart__line">
        <div class="cart__hover">
          <img
            src="../assets/img/cart1.webp"
            alt=""
            srcset=""
            class="cart__img"
          />
          <p class="cart__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus sed
            fermentum ornare pellentesque sapien a nulla sit. Consequat justo
            nunc lacinia faucibus mauris viverra.
          </p>
        </div>
        <div class="cart__hover">
          <img
            src="../assets/img/cart2.webp"
            alt=""
            srcset=""
            class="cart__img"
          />
          <p class="cart__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus sed
            fermentum ornare pellentesque sapien a nulla sit. Consequat justo
            nunc lacinia faucibus mauris viverra.
          </p>
        </div>
        <div class="cart__hover">
          <img
            src="../assets/img/cart3.webp"
            alt=""
            srcset=""
            class="cart__img"
          />
          <p class="cart__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus sed
            fermentum ornare pellentesque sapien a nulla sit. Consequat justo
            nunc lacinia faucibus mauris viverra.
          </p>
        </div>
   

  
        <div class="cart__hover">
          <img
            src="../assets/img/cart4.webp"
            alt=""
            srcset=""
            class="cart__img"
          />
          <p class="cart__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus sed
            fermentum ornare pellentesque sapien a nulla sit. Consequat justo
            nunc lacinia faucibus mauris viverra.
          </p>
        </div>
        <div class="cart__hover">
          <img
            src="../assets/img/cart5.webp"
            alt=""
            srcset=""
            class="cart__img"
          />
          <p class="cart__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus sed
            fermentum ornare pellentesque sapien a nulla sit. Consequat justo
            nunc lacinia faucibus mauris viverra.
          </p>
        </div>
        <div class="cart__hover">
          <img
            src="../assets/img/cart6.webp"
            alt=""
            srcset=""
            class="cart__img"
          />
          <p class="cart__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus sed
            fermentum ornare pellentesque sapien a nulla sit. Consequat justo
            nunc lacinia faucibus mauris viverra.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "cartsect",
  data: () => {
    return {
      upText: false
    };
  }
};
</script>
<style lang="scss">
.cart {
  padding-top: 127px;
  padding-bottom: 67px;
  padding-left: 128px;
  padding-right: 128px;

  &__line {
    display: $f;
    justify-content: $c;
    align-items: $c;

    transform: 0.5s;
    margin-left: -25px;
        margin-right: -25px;
        flex-wrap: wrap;
  }
  
  &__hover {
    z-index: 4;
    width: calc(33% - 50px);
    position: relative;
    margin-left: 25px;
    margin-right: 25px;
    margin-bottom: 60px;
       overflow: hidden;
  
  }
  &__img {
 width: 100%;
   overflow: hidden;
    z-index: 2;
  }
  &__text {
    position: absolute;
    z-index: 6;
    right: 0px;
    top: 0;
    bottom: 0;

    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 18px;
    background: rgba(231, 231, 231, 0.8);
    padding: 15px 10px;
    transition: all 0.7s ease-in-out 0s;
    transform: translateX(300px);
    max-width: 50%;
    display: $f;
    justify-content: $c;
    align-items: $c;
  }
  &__hover:hover .cart__text {
    transform: translateX(0px);

    margin-left: 40%;
  }
}
@media(max-width:1016px){
  .cart{
     padding-top: 80px;
  padding-bottom: 40px;
  padding-left: 100px;
  padding-right: 100px;

   &__line {
   
    margin-left: -20px;
        margin-right: -20px;
   
  }
  
  &__hover {

    width: calc(33% - 40px);
   
    margin-left: 20px;
    margin-right: 20px;
     margin-bottom: 40px;
    //  вычитаю из bottom в cart
   
  
  }
  &__text {
  
    font-size: 13px;
    line-height: 15px;
 padding: 10px 5px;

    
  }
  }
}
  // lap
  @media(max-width:767px){
  
   .cart{
     padding-top: 90px;
  padding-bottom: 72px;
  padding-left: 78px;
  padding-right: 78px;

   &__line {
   
  
    margin-left: -9px;
        margin-right: -9px;
       
  }
  
  &__hover {
 
    width: calc(50% - 40px);

    margin-left: 9px;
    margin-right: 9px;
     margin-bottom: 18px;
    //  вычитаю из bottom в cart
  
  
  }
  &__text {
  
    font-size: 15px;
    line-height: 17px;
    background: rgba(231, 231, 231, 0.8);
    padding: 10px 5px;
    transition: all 0.7s ease-in-out 0s;
    transform: translateX(300px);
   
    
  }
  }
}
@media(max-width:600px){
  
   .cart{
     padding-top: 37px;
  padding-bottom: 21px;
  padding-left: 25px;
  padding-right: 25px;

   &__line {
   
  
    margin-left: -8px;
        margin-right: -8px;
       
  }
  
  &__hover {
 
    width: calc(100% - 16px);

    margin-left: 8px;
    margin-right: 8px;
     margin-bottom: 16px;
    //  вычитаю из bottom в cart
  
  
  }
  &__text {
  
    font-size: 18px;
    line-height: 1.5;
    background: rgba(231, 231, 231, 0.8);
    padding: 5px 10px;
    transition: all 0.7s ease-in-out 0s;
    transform: translateX(300px);
   
    
  }
  }
}

</style>