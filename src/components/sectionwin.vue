<template>
  <div id="sectwin">
    <section class="section">
      <h4 class="section__h4">
        Mobel ipsum dolor sit amet consectetur adipiscing elit
      </h4>
      <div class="section__block">
        <div class="section__block-left">
       <div class="pict__mob">
          <picture>
           
            <source
              srcset="../assets/img/section__img2.png"
              media="(max-width:978px)"
              class="section__img33"
            />

            <img
              src="../assets/img/section_img1.webp"
              alt=""
              class="section__img"
            />
          </picture>
      </div>
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
           <div class="sectwin__mob">
             <img src="../assets/img/section-img2.webp" alt="" class="section__right-img3">
            <!-- мини картинка -->
            <img src="../assets/img/section-img1.webp" alt="" class="section__right-img-mob1"> 
             <!-- подушка -->
             <img src="../assets/img/section__img2.png" alt="" class="section__right-img-mob2">
             <!-- стул -->
            
           </div>
      </div>
   
    </section>
  </div>
</template>
<script>
export default {
  name: "sectwin",
};
</script>
<style lang="scss">
.sectwin__mob{
  display: none;
}
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
   
    order: 3;

      
  }
  .section__block_text {
    display: $f;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    order: -1;
    margin-top: 60px;
  }
  .section__h4 {
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 34px;
    letter-spacing: 0.025em;
    margin-bottom: 63px;
    text-align: center;
    padding-top: 90px;
    margin-right: 90px;
margin-left: 90px;
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
line-height: 32px;
text-align: center;
margin-right: 145px;
margin-left: 145px;
margin-bottom: 45px;
  }
  .section__p{
    font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 36px;
text-align: center;
margin-left: 145px;
margin-right: 145px;
margin-bottom: 45px;
  }
  .section__img{
   
        margin-right: 0px;
       padding-right: 0;
        padding-left: 0;
        width: 100%;
  }
  picture{
     max-width: 100%;
  }
}
@media (max-width:638px) {
  .section__h4 {
    margin-right: 30px;
    margin-left: 30px;
    line-height: 40px;
  }
    .section__h5{
    margin-right: 30px;
    margin-left: 30px;
    line-height: 40px;
  }
   .section__p {
    margin-right: 30px;
    margin-left: 30px;
   
  }
}

@media (max-width: 547px) {
.section__right-img1 {
    position: absolute;
    margin-top: 0px;
    margin-left: 180px;
    z-index: 3;
    max-width: 220px;
}
.section__right-img2{
    position: relative;
    margin-top: 0px;
    margin-left: 0px;
    z-index: 1;
    max-width: 336px;
}
.section__h4 {
    margin-right: 60px;
    margin-left: 60px;
        font-size: 25px;
    line-height: 35px;
}
.section__h5 {
    margin-right: 60px;
    margin-left: 60px;
        font-size: 25px;
    line-height: 35px;
}
  .section__p{
    font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 36px;
text-align: center;
margin-left: 60px;
margin-right: 60px;
margin-bottom: 45px;
  
}
}
// mob
@media (max-width: 400px) {
.section__h4{
  font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 162%;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.04em;
    margin-right: 17px;
    margin-left: 17px;
    padding-top: 40px;
    margin-bottom: 25px;
}
.section__h5{
 font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 162%;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.04em;
    margin-right: 5px;
    margin-left: 5px;
    padding-top: 40px;
margin-bottom: 16px;
text-align: center;
}

.section__p{
  font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 22px;
text-align: center;
margin-left: 20px;
margin-right: 20px;
margin-bottom: 36px;

}
.section__block-right{
  display: none;
}
.section__right-img3{
   position:absolute;
    margin-top: 0px;
left: 0px;
    z-index: 15;
    max-width: 30%;
}
.section__right-img-mob1{
 position:absolute ;
  margin-top: 120px;
right: 0px;
    z-index: 5;
    max-width: 50%;
}
.section__right-img-mob2{
 position: relative;
    margin-top: 0px;
 
    z-index: 3;
    max-width: 100%;
}
.pict__mob{
  display: none;
}
.sectwin__mob{
  display: block;
}
}
</style>
