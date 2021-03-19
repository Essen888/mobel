<template>
  <footer id="footer">
    <div class="footer__wr">
      <div class="footer__wr_logo foot__ordn foot__ordn-bott">
        <div class="logo">LOGO</div>
        <p class="logo__text">
          <span>Logo</span>macht das Zuhause <br />
          gemütlich
        </p>
        <address>
          Munsterschtrasse 34<br />
          Essen 34533
        </address>
        <p class="tel">
          Tel:<a href="tel:4848 940 123 23 33 0" class="tel"
            >4848 940 123 23 33 0</a
          >
        </p>
        <div class="wrap__icons">
          <img class="wrap__icon" src="../assets/img/Facebook.svg" alt="" />
          <img class="wrap__icon" src="../assets/img/Twitter.svg" alt="" />
          <img class="wrap__icon" src="../assets/img/Google.svg" alt="" />
        </div>
      </div>
      <div class="wrap__titl_but foot__ordn foot__ordn-bott">
        <div class="titel titel-m">Lezte News</div>

        <div class="wrap_but">
          <button type="button"></button>
          <p class="button_text">
            Sie können uns in Düsseldorf <br />
            kontaktieren
          </p>
        </div>
        <div class="wrap_but">
          <button type="button"></button>
          <p class="button_text">
            Sie können uns in Düsseldorf <br />
            kontaktieren
          </p>
        </div>
      </div>
      
      <div class="footer__list__wrap foot__ordn foot__ordn-list">
        <div class="titel">Seitennavigation</div>
        <ul class="footer__list">
          <li><a href="">Neu</a></li>
          <li><a href="">Westwing Collection</a></li>
          <li><a href="">Möbel</a></li>
          <li><a href="">Deko</a></li>
          <li><a href="">Leuchten</a></li>
        </ul>
      </div>
      <div class="footer__list__wrap foot__ordn ">
        <div class="titel">Seitennavigation</div>
        <ul class="footer__list">
          <li><a href="">Leuchten</a></li>
          <li><a href="">maecenas</a></li>
          <li><a href="">Tisch & Bar</a></li>
          <li><a href="">Kinderzimmer</a></li>
          <li><a href="">Gutscheine</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>
<script>
</script>
<style lang="scss">
.logo {
  color: #076550;
  text-transform: uppercase;
  font-weight: 900;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  margin-bottom: 16px;
  &__text span {
    color: #076550;
    text-transform: uppercase;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 13px;
    font-weight: 900;
  }
  &__text {
    margin-bottom: 18px;
    line-height: 1.3;
  }
}
address {
  margin-bottom: 18px;
  line-height: 1.2;
}
.footer__wr {
  background-color: #f4dedf;
  display: flex;
  justify-content: center;
  align-items: flex-start;
 margin-right: -45px;
  margin-left: -45px;
  color: #181717;
  padding: 60px 100px;

}
.wrap__titl_but {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
}
.wrap_but {
  display: flex;
}
.footer__list__wrap {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
}
.titel {
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;

  display: flex;
  align-items: center;
  text-transform: uppercase;
  margin-bottom: 16px;
  color: #000000;
}
.wrap_but button {
  background-color: #076550;
  width: 48px;
  height: 32px;
  border-radius: 6px;
  margin-right: 16px;
}
.wrap_but {
  margin-bottom: 18px;
  line-height: 1.4;
}
.footer__list {
  list-style: none;
  line-height: 1.9;
}
.footer__list a {
  color: #181717;
  text-decoration: none;
}
.tel {
  margin-bottom: 17px;
}
.wrap__icons {
  display: flex;
  justify-content: start;
  align-items: flex-start;
  margin: 0 -6px;
}
.wrap__icon {
  margin: 0 6px;
}
.foot__ordn{
  margin-right: 45px;
  margin-left: 45px;
  width: calc( 25% - 45px);
}
@media (max-width: 988px) {
  .footer__wr {
flex-wrap: wrap;
 margin-right: -5px;
  margin-left: -5px;
padding:70px 100px;
  }
  .foot__ordn{
  margin-right: 5px;
  margin-left: 5px;
  width: calc(50% - 10px);

}
.foot__ordn-bott{
  margin-bottom: 64px;
}
.titel-m{
  margin-bottom: 24px;
}
}
@media (max-width: 718px) {
    .footer__wr {

padding:50px 30px;
  }
}
@media (max-width: 582px) {
    .footer__wr {

padding:50px 30px;
  }
    .footer__wr {
flex-wrap: wrap;
 margin-right: -5px;
  margin-left: -5px;
padding:70px 100px;
  }
  .foot__ordn{
  margin-right: 5px;
  margin-left: 5px;
  width: calc(100% - 10px);

}
.foot__ordn-list{
  margin-bottom: 34px;
}
.foot__ordn-bott {
    margin-bottom: 34px;
}
}
@media (max-width: 480px) {
    .footer__wr {
flex-wrap: wrap;
 margin-right: -5px;
  margin-left: -5px;
padding:37px 40px;
  }
}
</style>
