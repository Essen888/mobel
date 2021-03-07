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
  // padding-top: 127px;
  // padding-bottom: 127px;
  // padding-left: 128px;
  // padding-right: 128px;

  &__line {
    display: $f;
    justify-content: $c;
    align-items: $c;
    margin-bottom: 50px;
    transform: 0.5s;
    margin-left: -25px;
        margin-right: -25px;
  }
   &__line-no {
    margin-bottom: 0;
  }
  &__hover {
    z-index: 4;
    width: calc(33% - 50px);
    position: relative;
    margin-left: 25px;
    margin-right: 25px;
       overflow: hidden;
  
  }
  &__img {
    max-width: 100%;
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
    max-width: 60%;
    display: $f;
    justify-content: $c;
    align-items: $c;
  }
  &__hover:hover .cart__text {
    transform: translateX(0px);

    margin-left: 40%;
  }
}
</style>