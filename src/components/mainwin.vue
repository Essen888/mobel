<template>
  <div id="mainwin">
    <main class="main">
      <h2 class="main__h2">
        Beispiele unserer Projekte
      </h2>
      <div class="main__content main__content-1">
        <img
          src="../assets/img/main__block__img1.webp"
          alt=""
          class="main__img-1 main__img"
        >
        <div class="main__text">
          <h3 class="main__h3">
            Botanical dream
          </h3>
          <p class="main__text-p">
            Unsere Kundin, Andrea R., wünschte sich ein hübsches, ruhiges
            Gästezimmer für ihre Familie. Der Ausgangspunkt war die botanische
            Tapete. Diese wird mit Textilien und Dekoration in Pastelfarben
            kontrastiert.
          </p>
        </div>
      </div>
      <div class="main__content">
        <div class="main__text">
          <h3 class="main__h3">
            Ton-in-Ton Styling
          </h3>
          <p class="main__text-p">
            Ein Umstyling zu einem eleganten Look wünschte sich unsere Kundin,
            Stefanie H.. Die Statement-Leuchten definieren diesen tollen Look,
            die Samt-Stühle geben dem Raum Wärme.
          </p>
        </div>
        <img
          src="../assets/img//main__block__img2.webp"
          alt=""
          class="main__img-2 main__img"
        >
      </div>
    </main>

    <div class=" main__content-pl main__content-1-pl">
      <div class="main__text main__text-pl">
        <h3 class="main__h3">
          Botanical dream
        </h3>
        <p class=" main__tx main__text-p">
          Unsere Kundin, Andrea R., wünschte sich ein hübsches, ruhiges
          Gästezimmer für ihre Familie. Der Ausgangspunkt war die botanische
          Tapete. Diese wird mit Textilien und Dekoration in Pastelfarben
          kontrastiert.
        </p>
      </div>
      <img
        src="../assets/img/pl-main__block1.png"
        alt=""
        class="main__img-1"
      >
    </div>

    <div class="main__content-pl">
      <div class="main__text-pl main__text">
        <h3 class="main__h3">
          Ton-in-Ton Styling
        </h3>
        <p class=" main__tx main__text-p">
          Ein Umstyling zu einem eleganten Look wünschte sich unsere Kundin,
          Stefanie H.. Die Statement-Leuchten definieren diesen tollen Look, die
          Samt-Stühle geben dem Raum Wärme.
        </p>
      </div>
      <picture>
        <img
          src="../assets/img/pl-block.png"
          alt=""
          class="main__img-2"
        >
      </picture>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Mainwin'
}
</script>
<style lang="scss">
.main {
  display: $f;
  justify-content: $c;
  align-items: $c;
  flex-direction: column;
  padding-left: 272px;
  padding-right: 272px;
  padding-bottom: 127px;

  &__h2 {
    padding-top: 127px;
    padding-bottom: 42px;
    display: flex;
    align-items: $c;
    text-align: center;
    color: #000000;
    font-style: normal;
    font-weight: 600;
    font-size: 33px;
    line-height: 38px;
  }
  &__text {
    display: $f;
    flex-direction: column;
  }
  &__content {
    display: $f;
    justify-content: flex-start;
    align-items: flex-start;
  }
  &__content-1 {
    margin-bottom: 65px;
  }
  &__h3 {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 38px;
    margin-bottom: 42px;
  }
  &__img-1 {
    margin-right: 79px;
  }
  &__img-2 {
    margin-left: 79px;
  }
  &__text-p {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 36px;
  }
}
.main__content-pl {
  display: none;
}
@media (max-width: 1286px) {
 .main {

    padding-left: 200px;
    padding-right: 200px;

}
}
  @media (max-width: 1136px) {
 .main {

    padding-left: 150px;
    padding-right: 150px;

}
.main__img-1 {
    margin-right: 60px;
}
.main__img-2 {
    margin-left: 60px;
}
}
  @media (max-width: 1000px) {
 .main {

    padding-left: 100px;
    padding-right: 100px;

}

.main__img{
  max-width: 70%;

}
.main__img-1{

   margin-right: 30px;
}
.main__img-2{

   margin-left: 30px;
}
}
  @media (max-width: 960px) {
 .main {

    padding-left: 50px;
    padding-right: 50px;
 }

}
// lap
@media (max-width: 768px) {
  .main {

    padding-left: 0px;
    padding-right: 0px;
   padding-bottom: 0;

  &__content {
    display: none;
  }
  &__content-pl {
    display: block;
    display: $f;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
 &__text-pl {
    text-align: center;
  }
 &__img-1 {
    margin-right: 0px;
    padding-bottom: 63px;
        max-width: 100%;
  }
  &__img-2 {
    margin-left: 0px;
        max-width: 100%;
  }
  &__h2{
font-weight: 500;
line-height: 38px;
padding-top: 96px;
padding-bottom: 63px;

}

&__h3{
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 38px;
}
&__text-p{
  font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 36px;
max-width: 466px;
padding-bottom: 45px;
text-align: center;
}
  }
}
@media (max-width: 723px) {
  .main__h2 {
    font-size: 30px;
  }
  }
  @media (max-width:683px) {
  .main__h2 {
    font-size: 27px;
        padding-top: 66px;
    padding-bottom: 43px;
  }
   .main__h3 {
    font-size: 20px;
     margin-bottom: 33px;
  }
  .main {
    padding-left: 100px;
    padding-right: 100px;

}
  }
   @media (max-width:547px) {
     .main {
    padding-left: 50px;
    padding-right: 50px;
}
   }
    @media (max-width:500px) {
      .main__tx {
    padding-left: 30px;
    padding-right: 30px;
}
.main__h2 {
   font-style: normal;
font-weight: 500;
font-size: 19px;
line-height: 27px;
text-align: center;
letter-spacing: 0.04em;
padding-top: 37px;
padding-bottom: 22px;
  }
.main__h3 {
  font-style: normal;
font-weight: normal;
font-size: 17px;
line-height: 22px;
letter-spacing: 0.25em;
margin-bottom: 16px;
   }
   .main__text-p{
     font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 20px;
text-align: center;
   }
    }
</style>
