<template>
  <div class="tabs1">
    <div class="tabs">
      <div class="tabs__sol">
        <ul class="tabs__list">
          <li
            class="tabs__list_li"
            @click="
              (see1 = true), (see = false), (see2 = false), (see3 = false),(see4 = false), (see5 = false), (see6 = false), (see7 = false)
            "
          >
            <span>voluptate</span>
          </li>
          <li
            class="tabs__list_li"
            @click="
              (see1 = false), (see = true), (see2 = false), (see3 = false),(see4 = false), (see5 = false), (see6 = false), (see7 = false)
            "
          >
            <span><a>reprehenderit</a></span>
          </li>
          <li
            class="tabs__list_li"
            @click="
              (see = false), (see1 = false), (see2 = true), (see3 = false),(see4 = false), (see5 = false), (see6 = false), (see7 = false)
            "
          >
            <span>veniam</span>
          </li>
          <li
            class="tabs__list_li"
            @click="
              (see = false), (see1 = false), (see2 = false), (see3 = true),(see4 = false), (see5 = false), (see6 = false), (see7 = false)
            "
          >
            <span><a>proident</a></span>
          </li>
          <li class="tabs__list_li" @click="
              (see = false), (see1 = false), (see2 = false), (see3 = false),(see4 = true), (see5 = false), (see6 = false), (see7 = false)
            "><span>voluptate</span></li>
          <li class="tabs__list_li"  @click="
              (see = false), (see1 = false), (see2 = false), (see3 = false),(see4 = false), (see5 = true), (see6 = false), (see7 = false)
            "><span>reprehenderit</span></li>
          <li class="tabs__list_li" @click="
              (see = false), (see1 = false), (see2 = false), (see3 = false),(see4 = false), (see5 = false), (see6 = true), (see7 = false)
            "  ><span>veniam</span></li>
          <li class="tabs__list_li" @click="
              (see = false), (see1 = false), (see2 = false), (see3 = false),(see4 = false), (see5 = false), (see6 = false), (see7 = true)
            "><span>proident</span></li>
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
  </div>
</template>
<script>
export default {
  name: "tabs1",
  data: () => {
    return {
      see: false,
      see1: true,
      see2: false,
      see3: false,
      see4: false,
      see5: false,
      see6: false,
      see7: false
    };
  },
  
};
</script>
<style lang="scss">
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

  &__list {
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
      margin-right: 10px;
      line-height: 1.9;
      width: 0px;
      background-color: #f4dedf00;
      transition: all 1s ease-in-out 0s;
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
      top: 3px;
      left: -25px;
    }
    &_li span:hover {
      display: inline-block;
      width: 213px;
      color: rgb(36, 35, 35);
      background-color: #f8f2f281;
    }
  }
}
</style>