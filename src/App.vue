<template>
  <div id="app">
    <body>
      <header class="header">
        <div class="bg__burg">
          <novigationMobile :class="{ open: !showNav }" />
          <nav class="top_burger">
            <input
              id="checkbox3"
              type="checkbox"
              class="checkbox3 visuallyHidden"
            />
            <label for="checkbox3">
              <div
                v-if="mobilWive"
                class="burger__menu burger__menu3"
                @click="showNav = !showNav"
              >
                <div class="burger__line burger__line1" />
                <div class="burger__line burger__line2" />
                <div class="burger__line burger__line3" />
                <div class="burger__line burger__line4" />
              </div>
            </label>
          </nav>

          <div class="cont" :class="{ open: showNav }">
            <div class="header__wrap">
              <navbar v-if="!mobilWive" />
            </div>
          </div>
        </div>
      </header>
      <div class="bg">
        <div class="h1">Gemütlichkeit im Haus macht uns glücklicher</div>
      </div>
      <mainwin />
      <sect />
      <cartsect />
      <tabs />
      <section-firm />
      <footer-v />
    </body>
  </div>
</template>
<script>
import Navbar from "./components/navbar.vue";
import Mainwin from "./components/mainwin.vue";
import Sect from "./components/sectionwin.vue";
import Cartsect from "./components/cartsect.vue";
import Tabs from "./components/tabs.vue";
import SectionFirm from "./components/section-firm";
import NovigationMobile from "./components/novigation-mobile";
import FooterV from "./components/footer-v";

export default {
  name: "App",
  components: {
    Navbar,
    Mainwin,
    Sect,
    Tabs,
    Cartsect,
    SectionFirm,
    NovigationMobile,
    FooterV,
  },
  data: () => {
    return {
      mobilWive: true,
      showNav: false,
    };
  },
  created() {
    this.handLeView();
    window.addEventListener("resize", this.handLeView);
  },
  methods: {
    handLeView() {
      this.mobilWive = window.innerWidth <= 1272;
    },
  },
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "Noto Serif TC", serif;
  overflow-x: hidden;
}
.bg__burg {
  background-color: #076550;
}
.h1 {
  font-family: "Noto Serif TC", serif;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 1.4;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  color: #181818;
}
.header {
  width: 100vw;

  color: #ffff;

  &__wrap {
    max-height: 100%;
  }
}
.burger__menu {
  cursor: pointer;
  z-index: 55;
  margin: 0 auto;
  margin-top: 30px;
  width: 40px;
  height: 40px;
  position: relative;
}
.burger__line {
  padding: 0;
  width: 70px;
  height: 7px;
  background-color: rgb(236, 228, 228);
  display: block;
  border-radius: 4px;
  transition: all 0.4s ease-in-out;
  position: absolute;
  right: 20px;
}

.top_burger {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  padding-right: 30px;
  position: relative;
}
.burger__line1 {
  top: 0px;
}
.burger__line2,
.burger__line3 {
  top: 17px;
}
.burger__line3 {
  right: 20px;
}
.burger__line4 {
  bottom: 0px;
}
.burger__menu3 .burger__line1 {
  transform-origin: 9%;
}
.burger__menu3 .burger__line4 {
  transform-origin: 9%;
}
.checkbox3:checked + label > .burger__menu3 > .burger__line1 {
  transform: rotate(45deg);
  height: 7px;
  width: 58px;
}

.checkbox3:checked + label > .burger__menu3 > .burger__line3 {
  transform: rotate(45deg);
  height: 7px;
  background-color: transparent;
}

.checkbox3:checked + label > .burger__menu3 > .burger__line2 {
  transform: rotate(-45deg);
  height: 7px;
  background-color: transparent;
}

.checkbox3:checked + label > .burger__menu3 > .burger__line4 {
  transform: rotate(-45deg);
  height: 7px;
  width: 58px;
}
.visuallyHidden {
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
}
.cont {
  z-index: 14;
}

.open {
  transform: translateY(-900px);

  z-index: 8;
}

@media (max-width: 1272px) {
  .bg__burg {
    background-color: #076550;
    padding-bottom: 40px;
  }
}
@media (max-width: 1168px) {
  .h1 {
    font-size: 40px;
  }
}
@media (max-width: 1168px) {
  .h1 {
    font-size: 40px;
  }
}

// lap
@media (max-width: 768px) {
  .h1 {
    font-weight: 500;
    font-size: 36px;
    line-height: 54px;
    letter-spacing: 0.11em;
  }
  .burger__line {
    width: 52px;
    height: 6px;
    right: 10px;
  }
}
@media (max-width: 677px) {
  .h1 {
    font-weight: normal;
    font-size: 36px;
    line-height: 46px;
  }
}
@media (max-width: 558px) {
  .h1 {
    font-weight: normal;
    font-size: 33px;
    line-height: 46px;
  }
}
@media (max-width: 400px) {
  .h1 {
    font-weight: normal;
    font-size: 25px;
    line-height: 36px;
  }
  .burger__line {
    width: 42px;
    height: 6px;
  }
  .top_burger {
    padding-right: 10px;
  }
}
@media (max-width: 344px) {
  .h1 {
    font-size: 24px;
  }
}
@media (max-width: 330px) {
  .h1 {
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;
  }
}
</style>
