<template>
  <div id="sect">
    <section class="section">
      <h4 class="section__h4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </h4>
      <div class="section__block">
        <div class="section__block-left">
          <picture>
            <source
              srcset="../assets/img/section__img2.png"
              media="(max-width:976px)"
              class="section__img33"
            />

            <img
              src="../assets/img/section_img1.webp"
              alt=""
              class="section__img"
            />
          </picture>
          <div class="section__block_text">
            <h5 class="section__h5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h5>
            <div class="section__p">
              Irure minim do cupidatat do Lorem deserunt. Reprehenderit anim
              pariatur commodo labore aliquip eu magna elit mollit proident do
              pariatur consequat ea. Laboris aliquip ad est proident sint magna
              et nostrud commodo. In et voluptate officia elit pariatur mollit
              est magna.
            </div>
          </div>
        </div>
        <div class="section__block-right">
          <img
            src="../assets/img/section-img1.webp"
            class="section__right-img1"
            alt=""
          />
          <img
            src="../assets/img/section-img2.webp"
            class="section__right-img2"
            alt=""
          />
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "sect",
};
</script>
<style lang="scss">
.section {
  display: $f;
  justify-content: $c;
  align-items: $c;
  flex-direction: column;
  padding-right: 120px;
  padding-left: 120px;
  padding-bottom: 230px;

  background-color: #f4dedf;
  &__h4 {
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 38px;
    color: #000;
    padding-top: 127px;
    margin-bottom: 42px;
  }
  &__h5 {
    font-family: Noto Serif TC;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 1.5;
    margin-bottom: 42px;
  }
  &__block {
    display: $f;
    justify-content: $c;
    align-items: $c;
  }
  &__block_text {
    display: $f;
    flex-direction: column;
  }
  &__block-left {
    display: $f;
    justify-content: center;
    align-items: flex-start;
  }
  &__block-right {
    display: $f;
    justify-content: center;
    align-items: flex-start;
    position: relative;
  }
  &__img {
    margin-right: 26px;
  }
  &__right-img1 {
    position: relative;
    z-index: 3;
    margin-top: -150px;
    margin-left: 100px;
  }
  &__right-img2 {
    position: absolute;
    margin-left: -70px;
    z-index: 2;
  }
  &__p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
  }
}
@media (max-width: 1330px) {
  .section__img{
// max-width:226px;
  }
  .section{
    padding-right: 100px;
    padding-left: 100px;
  }
 .section__right-img1 {
    margin-top: -151px;
    max-width: 268px;
}
.section__right-img2 {
    margin-left: -15px;
    max-width: 266px;

}
}
@media (max-width: 1084px) {
   .section{
    padding-right: 50px;
    padding-left: 50px;
    margin-bottom: 100px;
  }
  .section__h4{
    font-size: 28px;
  }
  .section__h5{
    font-size: 18px;
  }
  .section__p{
    font-size: 15px;
  }
}

// lep
@media (max-width: 978px) {
  .section{
    padding: 0;
  }
  .section__block {
    display: $f;
    justify-content: $c;
    align-items: $c;
    flex-direction: column;
    position: relative;

    order: 3;
  }
  .section__block-left {
    display: $f;
    justify-content: center;
    align-items: $c;
    flex-direction: column;
    order: 2;
  }
  &__block-right {
    display: $f;
    justify-content: flex-end;
    align-items: flex-start;
    // flex-direction: column;
    order: 3;

      
  }
  .section__block_text {
    display: $f;
    flex-direction: column;
    order: -1;
    margin-top: 104px;
  }
  .section__h4 {
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 44px;
    letter-spacing: 0.025em;
    margin-bottom: 63px;
    text-align: center;
  }
  .section__right-img1 {
    position: absolute;
 
    margin-top: 0px;
    margin-left: 233px;
    z-index: 3;
 max-width: 258px;
  }
   .section__right-img2{
    position: relative;

    margin-top: 0px;
    margin-left: 0px;
     z-index: 1;
     max-width: 536px;
  }
  .section__h5{
    font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 42px;
text-align: center;
margin-right: 90px;
margin-left: 90px;
margin-bottom: 47px;
  }
  .section__p{
    font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 36px;
text-align: center;
margin-left: 104px;
margin-right: 104px;
margin-bottom: 45px;
  }
  .section__img{
   
        margin-right: 0px;
       padding-right: 0;
        padding-left: 0;
        width: 100%;
  }
}
</style>
