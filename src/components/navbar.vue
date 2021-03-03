<template>
  <div id="navbar">
    <nav class="nav">
      <ul class="nav__ul">
        <li
          class="nav__li"
          @mouseover="(upHere = false), (upKids = false)"
        >
          <dropdown
            title="neu"
            :items="neus"
            class="nav__menu-item"
          />
        </li>
        <li
          class="nav__li"
          @mouseover="(upHere = false), (upKids = false)"
        >
          <dropdown
            title="Westwing Collection"
            :items="Westwing__Collections"
            class="nav__menu-item"
          />
        </li>
        <li
          class="nav__li "
          @mouseover="(upHere = true), (upKids = false)"
        >
          <a
            href=""
            class="nav__menu-item"
            @click.prevent
          >Shop the Look</a>
        </li>
        <li
          class="nav__li"
          @mouseover="(upHere = false), (upKids = false)"
        >
          <dropdown
            title="Mobel"
            :items="Mobel"
            class="nav__menu-item"
            :is-open="dropdownIsOpen"
          />
        </li>
        <li
          class="nav__li"
          @mouseover="(upHere = false), (upKids = false)"
        >
          <dropdown
            title="Deko"
            :items="Deko"
            class="nav__menu-item"
            :is-open="dropdownIsOpen"
          />
        </li>
        <li
          class="nav__li"
          @mouseover="(upHere = false), (upKids = false)"
        >
          <dropdown
            title="Leuchten"
            :items="Leuchten"
            class="nav__menu-item"
            :is-open="dropdownIsOpen"
          />
        </li>
        <li
          class="nav__li"
          @mouseover="(upHere = false), (upKids = false)"
        >
          <dropdown
            title="Textilien & TeppicheShop the Look"
            :items="TextilienTeppicheShoptheLook"
            class="Textilien & TeppicheShop the Look"
            :is-open="dropdownIsOpen"
          />
        </li>
        <li
          class="nav__li"
          @mouseover="(upHere = false), (upKids = false)"
        >
          <dropdown
            title="Tisch & Bar"
            :items="TischAndBar"
            class="nav__menu-item"
            :is-open="dropdownIsOpen"
          />
        </li>
        <li
          class="nav__li "
          @mouseover="(upHere = false), (upKids = true)"
        >
          <a
            href=""
            class="nav__menu-item"
            @click.prevent
          >Kinderzimmer</a>
        </li>
        <li
          class="nav__li"
          @mouseover="(upHere = false), (upKids = false)"
        >
          <a
            href=""
            class="nav__menu-item"
            @click.prevent
          >Gutscheine</a>
        </li>
      </ul>
    </nav>
    <div
      v-show="upHere"
      class="nav__produckt__cart"
      @click="upHere = false"
    >
      <schop-look
        v-for="schopLook in schopLooks"
        :key="schopLook.article"
        :schop-look-data="schopLook"
        :class="schopLook.classes"
      />
    </div>
    <div
      v-show="upKids"
      class="nav__produckt__cart nav__produckt--cart"
      @click="upKids = false"
    >
      <kinderzimmer
        v-for="kindCart in kindCarts"
        :key="kindCart.article"
        :cart_data="kindCart"
        :class="kindCart.classes"
      />
    </div>
  </div>
</template>
<script>
import dropdown from './dropdown'
import Kinderzimmer from './kinderzimmer'
import schopLook from './schop-look'

export default {
  name: 'Navbar',
  components: {
    dropdown,
    Kinderzimmer,
    schopLook
  },
  data: () => {
    return {
      upHere: false,
      dropdownIsOpen: false,
      upKids: false,
      dropdownIsOpen: false,

      schopLooks: [
        {
          imag: 'header-cart1.webp',
          article: 'A1',
          classes: ['cart__h']
        },
        {
          imag: 'header-cart2.webp',
          article: 'A2',
          classes: ['cart__h cart2']
        },
        {
          imag: 'header-cart3.webp',
          article: 'A3',
          classes: ['cart__h']
        }
      ],

      kindCarts: [
        {
          imag: 'kids1.webp',
          article: 'B1',
          classes: ['cart__h']
        },
        {
          imag: 'kids2.webp',
          article: 'B2',
          classes: ['cart__h cart2']
        },
        {
          imag: 'kids3.webp',
          article: 'B3',
          classes: ['cart__h']
        }
      ],
      neus: [
        {
          title: 'Möbel',
          link: '#'
        },
        {
          title: 'Deko',
          link: '#'
        },
        {
          title: 'Leuchten',
          link: '#'
        },
        {
          title: 'Textilien & Teppiche',
          link: '#'
        },
        {
          title: 'Tisch & Bar',
          link: '#'
        },
        {
          title: 'Kinderzimmer',
          link: '#'
        }
      ],
      Westwing__Collections: [
        {
          title: 'Möbel',
          link: '#'
        },
        {
          title: 'Deko',
          link: '#'
        },
        {
          title: 'Leuchten',
          link: '#'
        },
        {
          title: 'Textilien & Teppiche',
          link: '#'
        },
        {
          title: 'Tisch & Bar',
          link: '#'
        },
        {
          title: 'Westwing Collection',
          link: '#'
        }
      ],
      Deko: [
        {
          title: 'Möbel',
          link: '#'
        },
        {
          title: 'Deko',
          link: '#'
        },
        {
          title: 'Leuchten',
          link: '#'
        },
        {
          title: 'Textilien & Teppiche',
          link: '#'
        },
        {
          title: 'Tisch & Bar',
          link: '#'
        },
        {
          title: 'Westwing Collection',
          link: '#'
        }
      ],
      Mobel: [
        {
          title: 'Möbel',
          link: '#'
        },
        {
          title: 'Deko',
          link: '#'
        },
        {
          title: 'Leuchten',
          link: '#'
        },
        {
          title: 'Textilien & Teppiche',
          link: '#'
        },
        {
          title: 'Tisch & Bar',
          link: '#'
        },
        {
          title: 'Westwing Collection',
          link: '#'
        }
      ],
      Leuchten: [
        {
          title: 'Möbel',
          link: '#'
        },
        {
          title: 'Deko',
          link: '#'
        },
        {
          title: 'Leuchten',
          link: '#'
        },
        {
          title: 'Textilien & Teppiche',
          link: '#'
        },
        {
          title: 'Tisch & Bar',
          link: '#'
        },
        {
          title: 'Westwing Collection',
          link: '#'
        }
      ],
      TextilienTeppicheShoptheLook: [
        {
          title: 'Möbel',
          link: '#'
        },
        {
          title: 'Deko',
          link: '#'
        },
        {
          title: 'Leuchten',
          link: '#'
        },
        {
          title: 'Textilien & Teppiche',
          link: '#'
        },
        {
          title: 'Tisch & Bar',
          link: '#'
        },
        {
          title: 'Westwing Collection',
          link: '#'
        }
      ],
      TischAndBar: [
        {
          title: 'Möbel',
          link: '#'
        },
        {
          title: 'Deko',
          link: '#'
        },
        {
          title: 'Leuchten',
          link: '#'
        },
        {
          title: 'Textilien & Teppiche',
          link: '#'
        },
        {
          title: 'Tisch & Bar',
          link: '#'
        },
        {
          title: 'Westwing Collection',
          link: '#'
        }
      ]
    }
  }
}
</script>
<style lang="scss">
.nav {
  display: $f;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  position: relative;
  z-index: 5;
  //  margin-left: 220px;
  //   margin-right: 220px;

  &__menu-item {
    text-decoration: none;
    padding-top: 22px;
    padding-bottom: 22px;
    padding-left: 15px;
    padding-right: 5px;
    position: relative;
    text-align: center;
    border-bottom: 3px solid transparent;
    font-size: 12px;
    flex-wrap: nowrap;
    margin: 0 2px;
    transition: 0.6s;
    color: #fff;

    text-transform: uppercase;
    font-weight: 300;
    display: $f;
  }
  &__menu-item:active,
  &__menu-item:hover {
    background-color: #f4dedf21;
    padding: 15px;
    border-bottom-color: #f4dedf;
    color: #000;
  }

  &__menu-item a {
    color: inherit;

    text-decoration: none;
    list-style: none;
    text-transform: uppercase;
    font-weight: 300;
    display: $f;
    display: block;
  }

  &__li:active a,
  &__menu-item:hover a {
    transform: 0.4s;
    white-space: nowrap;
  }
  &__li {
    text-decoration: none;
    list-style: none;
    white-space: nowrap;
    font-size: 15px;
  }
  &__ul {
    display: $f;
  }
  &__produckt__cart {
    width: 100%;
    height: 70vh;
    background: rgba(255, 252, 252, 0.82);
    z-index: 2;
    position: absolute;
    display: $f;
    justify-content: center;
    align-items: center;
  }
  &__produckt--cart {
    background: rgba(254, 240, 241, 0.86);
  }
}
.cart__h {
  position: relative;
  transition: all 0.5s ease-in-out 0s;
}
.cart2 {
  margin: 0 48px;
  position: relative;
}

.cart__h:hover {
  transform: translateY(-20px);
}
.bg {
  background-image: url("../assets/img/bg.webp");
  background-repeat: no-repeat;
  background-position: top right;
  width: 100%;
  height: 100vh;
  background-size: cover;
  position: relative;
  display: $f;
  justify-content: center;
  align-items: center;
  padding-left: 200px;
  padding-right: 200px;
  z-index: 1;

}

@media(max-width:768px){
  .bg{
    background-image: url("../assets/img/pl-header__bg.png");
  }
}
@media(max-width:360px){
  .bg{
    background-image: url("../assets/img/mb-header__bg.png");
  }
}
@media(max-width:783px){
  .bg{
     padding-left: 80px;
  padding-right: 80px;
  }
}
@media(max-width:773px){
  .bg{
     padding-left: 90px;
  padding-right: 90px;
  }
}

@media(max-width:557px){
  .bg{
     padding-left: 50px;
  padding-right: 50px;
  }
}
@media(max-width:429px){
  .bg{
     padding-left: 40px;
  padding-right: 40px;
  }
}
@media(max-width:361px){
  .bg{
     padding-left: 30px;
  padding-right: 30px;
  }
}
</style>
