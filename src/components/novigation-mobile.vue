<template>
  <nav>
    <div class="nav__mobile1">
      <ul class="nav__mob1">
        <li class="nav__mob1__list1">
          <a>New</a>
        </li>
        <li class="nav__mob1__list1">
          <a>West Collection</a>
        </li>
        <li class="nav__mob1__list1">
          Shop the look
        </li>
        <li class="nav__mob1__list1">
          Mobel
        </li>
        <li class="nav__mob1__list1">
          Deko
        </li>
        <li class="nav__mob1__list1">
          Leuchten
        </li>
        <li class="nav__mob1__list1">
          kcjkddkdkdkdkdkkdk
        </li>
        <li class="nav__mob1__list1">
          Tisch & BAR
        </li>
        <li class="nav__mob1__list1">
          Kinderzimmer
        </li>
      </ul>
    </div>
  </nav>
</template>
<script></script>
<style lang="scss">
.nav__mobile1 {
  padding: 0px;
  position: relative;

}
.nav__mob1 {
  position: absolute;
  top: 0px;
  width: 100%;
  z-index: 7;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  background-color: #076550;

    height: 100vh;

  &__list1 {
    list-style: none;
    color: rgb(255, 255, 255);
    font-size: 18px;
    padding-bottom: 10px;
    padding-top: 10px;
    padding-left: 136px;

  }
}

@media (max-width: 768px) {
  .nav__mob1__list1 {
    padding-left: 70px;
  }
}
@media (max-width: 400px) {
  .nav__mob1__list1 {
    padding-left: 30px;
  }
}
</style>
