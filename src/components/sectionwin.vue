<template>
  <div id="sect">
    <section class="section">
      <h4 class="section__h4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </h4>
      <div class="section__block">
        <div class="section__block-left">
          <img src="../assets/img/section_img1.webp" alt="" class="section__img" />
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
          <img src="../assets/img/section-img1.webp" class="section__right-img1" alt="" />
          <img src="../assets/img/section-img2.webp" class="section__right-img2" alt="" />
      
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "sect"
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
  &__block{
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
     
  }
 &__img{
     margin-right: 10px;

 }
 &__right-img1{
   position: relative;
   z-index: 3;
   margin-top:-150px ;
   margin-left:100px;
 

 }
 &__right-img2{
     position:absolute;
  margin-left:-70px;
  z-index: 2;
      
 }
 &__p{

 font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 30px;

 }
}
</style>
