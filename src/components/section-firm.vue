<template>
  <div class="f-section">
    <h6 class="f-section__h6">Wir werden erwähnt</h6>
    <div class="f-section__firm">
      <img src="../assets/img/firm-1.webp" alt="" class="f-section__img_f" />
      <img
        src="../assets/img/Rectangle-30.webp"
        alt=""
        class="f-section--img-f f-section__img_f"
      />
      <img
        src="../assets/img/Rectangle-31.png"
        alt=""
        class="f-section__img_f"
      />
    </div>
  </div>
</template>

<style lang="scss">
.f-section {
  display: $f;
  justify-content: $c;
  align-content: $c;
  flex-direction: column;
  background-color: rgb(255, 255, 255);
  padding-top: 128px;
  padding-bottom: 128px;
  &__h6 {
    display: $f;
    justify-content: $c;
    align-items: $c;
    font-style: normal;
    font-weight: normal;
    font-size: 33px;
    line-height: 36px;
    text-transform: uppercase;
    color: #141414;
    margin-bottom: 44px;
  
  }

  &__firm {
    display: $f;
    justify-content: $c;
    align-items: $c;
    padding-left: 0px;
  }
  &--img-f {
  padding: 0 30px;
  }
}
@media(max-width: 960px){
  .f-section {

  padding-top: 86px;
  padding-bottom: 86px;
   &__h6 {
   font-style: normal;
   font-weight: normal;
    font-size: 33px;
    line-height: 36px;
    margin-bottom: 58px;
    }
    &__img_f{
    width:211px;
    }
}
}
@media(max-width: 695px){
  .f-section {

  padding-top: 86px;
  padding-bottom: 86px;
   &__h6 {
   font-style: normal;
   font-weight: normal;
    font-size: 33px;
    line-height: 36px;
    margin-bottom: 58px;
    }
    &__img_f{
    width:170px;
    }
}
}
@media(max-width: 568px){
  .f-section {

  padding-top: 37px;
  padding-bottom: 37px;
  &__h6{
    font-style: normal;
font-weight: normal;
font-size: 36px;
line-height: 33px;
text-align: center;
text-transform: uppercase;
color: #000000;
margin-bottom: 22px;
  }
   &__firm {
    display: $f;
    justify-content: $c;
    align-items: $c;
    flex-direction: column;
    padding-left: 0px;
  }
    &--img-f {
  padding: 21px 0px;
  }
   &__img_f{
    width:300px;
    }
}
}
@media(max-width: 484px){
  .f-section {

  
  &__h6{
   
font-size: 26px;
}
}
}
@media(max-width: 398px){
  .f-section {

  
  &__h6{
   
font-size: 20px;
}
 &__img_f{
    width:250px;
    }
}
}
@media(max-width: 320px){
  .f-section {

  padding-top: 37px;
  padding-bottom: 37px;
  &__h6{
    font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 33px;
text-align: center;
text-transform: uppercase;
color: #000000;
margin-bottom: 22px;
  }
   &__firm {
    display: $f;
    justify-content: $c;
    align-items: $c;
    flex-direction: column;
    padding-left: 0px;
  }
    &--img-f {
  padding: 21px 0px;
  }
   &__img_f{
    width:187px;
    }
}
}
</style>