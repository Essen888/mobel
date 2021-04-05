<template>
  <div
    class="nav__menu-item"
    @click="isOpen = !isOpen"
    @mouseleave="isOpen = !isOpen"

  >
    <a href="#" >{{ title }}</a>
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      
    >
      <path
        d="M3.5 5.93782L15.6244 5.93782L9.56218 16.4378L3.5 5.93782Z"
        fill="#F4DEDF"
      />
    </svg>
    <transition
      name="fade"
      appear
    >
      <div
        v-if="isOpen"
        class="nav__sub__menu"
      >
        <div
          v-for="(item, i) in items"
          :key="i"
          class="nav__menu-item"
        >
          <a :href="item.link">{{ item.title }}</a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Dropdown',
  props: ['title', 'items', 'isOpen']

}
</script>

<style lang="scss" scoped>
.nav__menu-item svg {
  width: 10px;
  margin-left: 3px;
}

.nav__sub__menu {
  position: absolute;
  background-color: #076551fa;
  top: calc(100% + 3px);
  left: 90%;
  transform: translate(-50%);
  width: max-content;
  border-radius: 0 0 16px 16px;
  padding-left: 25px;
  padding-right: 25px;
  color: aliceblue;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
a{display: block;}
</style>
