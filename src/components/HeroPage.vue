<template>
  <div>
    <img
      :src="mobileHero"
      alt="mobile hero"
      class="sm:hidden w-full z-10 brightness-75"
    />
    <img
      :src="desktopHero"
      alt="desktop hero"
      class="hidden sm:block w-full z-10 brightness-75"
    />
  </div>
  <FundPage />
</template>

<script setup>
import mobileHero from "../assets/image-hero-mobile.jpg";
import desktopHero from "../assets/image-hero-desktop.jpg";
import FundPage from "./FundPage.vue";
</script>
