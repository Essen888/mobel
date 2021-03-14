<template>
  <div class="tabs1">
    <div class="tabs" v-if="!mobSlid">
      <div class="tabs__sol">
        <ul class="tabs__list">
          <li
            class="tabs__list_li"
            @click="
              (see1 = true),
                (see = false),
                (see2 = false),
                (see3 = false),
                (see4 = false),
                (see5 = false),
                (see6 = false),
                (see7 = false)
            "
          >
            <span><a>voluptate</a></span>
          </li>
          <li
            class="tabs__list_li"
            @click="
              (see1 = false),
                (see = true),
                (see2 = false),
                (see3 = false),
                (see4 = false),
                (see5 = false),
                (see6 = false),
                (see7 = false)
            "
          >
            <span><a>reprehenderit</a></span>
          </li>
          <li
            class="tabs__list_li"
            @click="
              (see = false),
                (see1 = false),
                (see2 = true),
                (see3 = false),
                (see4 = false),
                (see5 = false),
                (see6 = false),
                (see7 = false)
            "
          >
            <span>veniam</span>
          </li>
          <li
            class="tabs__list_li"
            @click="
              (see = false),
                (see1 = false),
                (see2 = false),
                (see3 = true),
                (see4 = false),
                (see5 = false),
                (see6 = false),
                (see7 = false)
            "
          >
            <span><a>proident</a></span>
          </li>
          <li
            class="tabs__list_li"
            @click="
              (see = false),
                (see1 = false),
                (see2 = false),
                (see3 = false),
                (see4 = true),
                (see5 = false),
                (see6 = false),
                (see7 = false)
            "
          >
            <span>voluptate</span>
          </li>
          <li
            class="tabs__list_li"
            @click="
              (see = false),
                (see1 = false),
                (see2 = false),
                (see3 = false),
                (see4 = false),
                (see5 = true),
                (see6 = false),
                (see7 = false)
            "
          >
            <span>reprehenderit</span>
          </li>
          <li
            class="tabs__list_li"
            @click="
              (see = false),
                (see1 = false),
                (see2 = false),
                (see3 = false),
                (see4 = false),
                (see5 = false),
                (see6 = true),
                (see7 = false)
            "
          >
            <span>veniam</span>
          </li>
          <li
            class="tabs__list_li"
            @click="
              (see = false),
                (see1 = false),
                (see2 = false),
                (see3 = false),
                (see4 = false),
                (see5 = false),
                (see6 = false),
                (see7 = true)
            "
          >
            <span>proident</span>
          </li>
        </ul>
        <!-- lept -->
        <ul class="tabs__list-1">
          <li
            class="tabs__list_li"
            @click="
              (see1 = true),
                (see = false),
                (see2 = false),
                (see3 = false),
                (see4 = false),
                (see5 = false),
                (see6 = false),
                (see7 = false)
            "
          >
            <span><a>voluptate</a></span>
          </li>
          <li
            class="tabs__list_li"
            @click="
              (see1 = false),
                (see = true),
                (see2 = false),
                (see3 = false),
                (see4 = false),
                (see5 = false),
                (see6 = false),
                (see7 = false)
            "
          >
            <span><a>reprehenderit</a></span>
          </li>
          <li
            class="tabs__list_li"
            @click="
              (see = false),
                (see1 = false),
                (see2 = true),
                (see3 = false),
                (see4 = false),
                (see5 = false),
                (see6 = false),
                (see7 = false)
            "
          >
            <span>veniam</span>
          </li>
          <li
            class="tabs__list_li"
            @click="
              (see = false),
                (see1 = false),
                (see2 = false),
                (see3 = true),
                (see4 = false),
                (see5 = false),
                (see6 = false),
                (see7 = false)
            "
          >
            <span><a>proident</a></span>
          </li>
        </ul>
        <ul class="tabs__list-1">
          <li
            class="tabs__list_li"
            @click="
              (see = false),
                (see1 = false),
                (see2 = false),
                (see3 = false),
                (see4 = true),
                (see5 = false),
                (see6 = false),
                (see7 = false)
            "
          >
            <span>voluptate</span>
          </li>
          <li
            class="tabs__list_li"
            @click="
              (see = false),
                (see1 = false),
                (see2 = false),
                (see3 = false),
                (see4 = false),
                (see5 = true),
                (see6 = false),
                (see7 = false)
            "
          >
            <span>reprehenderit</span>
          </li>
          <li
            class="tabs__list_li"
            @click="
              (see = false),
                (see1 = false),
                (see2 = false),
                (see3 = false),
                (see4 = false),
                (see5 = false),
                (see6 = true),
                (see7 = false)
            "
          >
            <span>veniam</span>
          </li>
          <li
            class="tabs__list_li"
            @click="
              (see = false),
                (see1 = false),
                (see2 = false),
                (see3 = false),
                (see4 = false),
                (see5 = false),
                (see6 = false),
                (see7 = true)
            "
          >
            <span>proident</span>
          </li>
        </ul>
      </div>
      <div class="tabs__img_col">
        <img
          src="../assets/img/img7.webp"
          alt=""
          class="tabs__img"
          v-show="see7"
        />
        <img
          src="../assets/img/img6.webp"
          alt=""
          class="tabs__img"
          v-show="see6"
        />
        <img
          src="../assets/img/img5.webp"
          alt=""
          class="tabs__img"
          v-show="see5"
        />
        <img
          src="../assets/img/img4.webp"
          alt=""
          class="tabs__img"
          v-show="see4"
        />
        <img
          src="../assets/img/img3.webp"
          alt=""
          class="tabs__img"
          v-show="see3"
        />
        <img
          src="../assets/img/img2.webp"
          alt=""
          class="tabs__img"
          v-show="see2"
        />
        <img
          src="../assets/img/img1.webp"
          alt=""
          class="tabs__img"
          v-show="see1"
        />
        <img
          src="../assets/img/img.webp"
          alt=""
          class="tabs__img"
          v-show="see"
        />
      </div>
    </div>

    <swiper
      :slides-per-view="1"
      :space-between="10"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      v-else
      :autoplay="{  delay: 1000 }"
    >
      <swiper-slide class="img-wrapp-sw">    <span><a class="text-sl">voluptate</a></span><img src="../assets/img/img7.webp" alt="" class="img-swip"/></swiper-slide>
      <swiper-slide> <img src="../assets/img/img6.webp" alt="" class="img-swip"/></swiper-slide>

      <swiper-slide class="img-wrapp-sw"> <img src="../assets/img/img5.webp" alt="" class="img-swip" /></swiper-slide>
      <swiper-slide class="img-wrapp-sw"> <img src="../assets/img/img4.webp" alt="" class="img-swip"/></swiper-slide>
       <swiper-slide class="img-wrapp-sw"> <img src="../assets/img/img3.webp" alt="" class="img-swip"/></swiper-slide>
      <swiper-slide class="img-wrapp-sw"> <img src="../assets/img/img2.webp" alt="" class="img-swip"/></swiper-slide>
      <swiper-slide class="img-wrapp-sw"> <img src="../assets/img/img1.webp" alt="" class="img-swip"/></swiper-slide>
      <swiper-slide class="img-wrapp-sw"> <img src="../assets/img/img.webp" alt="" class="img-swip"/></swiper-slide>
    </swiper>
  </div>
</template>
<script>
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper.scss";

SwiperCore.use([Autoplay]);
export default {
  components: {
    Swiper,
    SwiperSlide,
    SwiperCore
  },
  name: "tabs1",
  data: () => {
    return {
      mobSlid: true,
      tabsPL: false,
      see: false,
      see1: true,
      see2: false,
      see3: false,
      see4: false,
      see5: false,
      see6: false,
      see7: false,
    };
  },
  created() {
    this.sliderMob();
    window.addEventListener("resize", this.sliderMob);
  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log("slide change");
    },
    sliderMob() {
      this.mobSlid = window.innerWidth <= 800;
    },
  },
};
</script>
<style lang="scss">
.text-sl{
  color:black;
  display:block;
 
}
.img-swip{
   width: 100%;
}
.img-wrapp-sw{
  width: 100%;
 display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: column;
}
.tabs {
  display: $f;
  justify-content: space-between;
  align-items: stretch;
  background-color: #f4dedf;

  &__img {
    max-width: 667px;
    flex: 1 0 auto;

    &_col {
      display: flex;
      justify-content: $c;
      align-items: $c;
      padding-right: 111px;
    }
  }
  &__sol {
    background-color: #076550;
    display: $f;
    align-items: stretch;
    justify-content: $c;
    padding: 127px 111px;
  }
  &__list-1 {
    display: none;
  }
  &__list {
    display: block;
    color: aliceblue;
    list-style: none;
    display: $f;
    flex-direction: column;
    justify-content: $c;

    text-align: start;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 1.9;
    text-transform: uppercase;
    color: #fffafa;

    &_li span {
      position: relative;

      line-height: 1.9;
      width: 210px;
      background-color: #f4dedf00;
      transition: all 1s ease-in-out 0s;
      background-color: transparent;
    }

    &_li span::after {
      content: "";
      display: block;
      position: absolute;
      display: flex;
      margin-top: 5px;
      background-color: #fffafa;
      width: 10px;
      height: 10px;
      transform: rotate(45deg);
      top: 8px;
      left: -25px;
    }

    &_li span {
      padding: 6px;
    }

    &_li span:hover {
      display: block;
      width: 220px;
      color: rgb(36, 35, 35);
      background-color: #f8f2f281;
      padding: 6px;
    }
  }
}
@media (max-width: 1248px) {
  .tabs {
    flex-direction: column;

    &__img_col {
      margin-right: -111px;

      display: flex;
      align-items: center;
    }
    &__img {
      max-width: 100%;
    }
    &__sol {
      flex-wrap: wrap;
      padding: 90px 68px;
      align-items: center;
      position: relative;
      justify-content: space-around;
    }
    &__list {
      display: none;
    }

    &__list-1 {
      display: block;

      border: 310px;
    }

    &__list-1 {
      display: block;
      color: aliceblue;
      list-style: none;
      display: $f;
      flex-direction: column;
      justify-content: $c;

      text-align: start;
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 1.5;
      text-transform: uppercase;
      color: #fffafa;
      border: 210px;
      background-color: transparent;
    }
  }
}
@media (max-width: 740px) {
  .tabs__sol {
    display: none;
  }
}
</style>





