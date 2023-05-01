<template>
  <header>
    <nav
      :class="{
        'bg-neutralBlack/75': isScrolled,
        'bg-transparent': !isScrolled,
      }"
      class="p-8 xl:px-20 w-full fixed z-50"
      style="transition: background-color 0.4s ease-in-out"
    >
      <div class="flex items-center container mx-auto justify-between">
        <div>
          <a :href="url">
            <img :src="logo" alt="logo" />
          </a>
        </div>
        <div>
          <ul class="lg:flex hidden items-center space-x-11">
            <li
              v-for="link in links"
              :key="link.text"
              class="text-white font-medium transition duration-200 ease-in-out hover:text-gray-300"
            >
              <a :href="link.url">{{ link.text }}</a>
            </li>
          </ul>
        </div>

        <button
          @click="toggleNav"
          class="block z-50 lg:hidden focus-outline-none"
        >
          <img
            :src="burgerMenu"
            ref="burger"
            alt="burger"
            :class="{ 'animate-burger': showMenu }"
          />
        </button>
      </div>
      <transition name="fade">
        <div :class="showMenu ? 'flex' : 'hidden'" class="w-full h-full">
          <div class="inset-0 lg:hidden fixed bg-neutralBlack/50"></div>
          <ul
            class="lg:hidden absolute flex-col py-8 mt-6 space-y-6 tracking-widest bg-white left-6 rounded-lg right-6 shadow-black drop-shadow-2xl z-50"
          >
            <!-- dropdown -->
            <li class="text-neutralBlack font-medium text-xl px-7">
              <a :href="url">About</a>
            </li>
            <li
              class="text-neutralBlack font-medium border-t pt-5 border-gray-300 text-xl px-7"
            >
              <a :href="url">Discover</a>
            </li>
            <li
              class="text-neutralBlack font-medium border-t pt-5 border-gray-300 text-xl px-7"
            >
              <a :href="url">Get Started</a>
            </li>
          </ul>
        </div>
      </transition>
    </nav>
  </header>
</template>

<script setup>
import close from "../assets/icon-close-menu.svg";
import burgerMenu from "../assets/icon-hamburger.svg";
import logo from "../assets/logo.svg";
import { ref, onMounted, onUnmounted } from "vue";
const burger = ref(null);
const showMenu = ref(false);
const toggleNav = () => {
  showMenu.value = !showMenu.value;
  if (showMenu.value) {
    burger.value.src = close;
  } else {
    burger.value.src = burgerMenu;
  }
};

const url = "/";
const links = [
  { url: "/", text: "About" },
  { url: "/", text: "Discover" },
  { url: "/", text: "Get Started" },
];
const isScrolled = ref(false);
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.animate-burger {
  animation: rotate 0.5s forwards;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(90deg);
  }
}
</style>
