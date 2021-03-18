<template>
  <footer id="footer">
    <div class="footer__wr">
      <div class="footer__wr_logo">
    <div class="logo">LOGO</div>
    <p class="logo__text"><span>Logo</span>macht das Zuhause <br> gemütlich</p>
    <address>Munsterschtrasse 34<br> Essen 34533</address>
    <p class="tel">
      Tel:<a href="tel:4848 940 123 23 33 0" class="tel"
        >4848 940 123 23 33 0</a
      >
    </p>
    <div class="wrap__ciz">
      <img src="" alt="" />
      <img src="" alt="" />
      <img src="" alt="" />
    </div>
      </div>
     <div class="wrap__titl_but">
    <div class="titel">Lezte News</div>

    <div class="wrap_but">
      <button type="button"></button>
      <p class="button_text">Sie können uns in Düsseldorf <br>
      kontaktieren</p>
    </div>
    <div class="wrap_but">
      <button type="button"></button>
      <p class="button_text">Sie können uns in Düsseldorf <br>
      kontaktieren</p>
    </div>
    </div>
    <div class="footer__list__wrap">
    <div class="titel">Seitennavigation</div>
    <ul class="footer__list">
      <li><a href="">Neu</a></li>
      <li><a href="">Westwing Collection</a></li>
      <li><a href="">Möbel</a></li>
      <li><a href="">Deko</a></li>
      <li><a href="">Leuchten</a></li>
    </ul>
    </div>
     <div class="footer__list__wrap">
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
.logo{
  color: #076550;
  text-transform: uppercase;
  font-weight: 900;
  font-family:Arial, Helvetica, sans-serif;
  font-size: 18px;
  margin-bottom: 16px;
  &__text span{
color: #076550;
  text-transform: uppercase;
    font-family:Arial, Helvetica, sans-serif;
  font-size: 13px;
   font-weight: 900;
  }
    &__text {
      margin-bottom: 18px;
    }
    
}
address{
  margin-bottom: 18px;
}
.footer__wr{
  background-color: #F4DEDF;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding-top: 60px;
   padding-bottom: 60px;
}
.wrap__titl_but{
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
}
.wrap_but{
  display: flex;
}
.footer__list__wrap{
    display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
}
.titel{font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 16px;

display: flex;
align-items: center;
text-transform: uppercase;
margin-bottom: 16px;
color: #000000;
}
.wrap_but button{
  background-color: #076550;
  width: 48px;
  height: 32px;
  border-radius: 6px;
  margin-right: 16px;
}.wrap_but{
  margin-bottom: 18px;
}
</style>
