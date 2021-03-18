<template>
  <footer id="footer">
    <div class="footer__wr">
      <div class="footer__wr_logo">
    <div class="logo">LOGO</div>
    <p class="logo__text"><span>Logo</span>macht das Zuhause gemütlich</p>
    <address>Munsterschtrasse 34 Essen 34533</address>
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
      <button type="button">click</button>
      <p class="button_text">Sie können uns in Düsseldorf kontaktieren</p>
    </div>
    <div class="wrap_but">
      <button type="button">click</button>
      <p class="button_text">Sie können uns in Düsseldorf kontaktieren</p>
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
  
}
.footer__wr{
  background-color: #F4DEDF;
  display: flex;
  justify-content: space-around;
  align-items: center;
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
</style>
