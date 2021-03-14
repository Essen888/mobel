<template>
  <div class="f-section">
    <h6 class="f-section__h6">Wir werden erwähnt</h6>
    <div class="fsection__firm">
      <img src="../assets/img/firm-1.webp" alt="" class="f-section__img_f" />
      <img
        src="../assets/img/Rectangle-30.webp"
        alt=""
        class="f-section--img-f"
      />
      <img
        src="../assets/img/Rectangle-31.png"
        alt=""
        class="f-section__img-f"
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
</style>