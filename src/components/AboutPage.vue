<template>
  <div
    class="w-full md:max-w-3xl md:mx-auto px-6 -translate-y-5 xl:-translate-y-28"
  >
    <div class="shadow bg-white rounded-xl">
      <div class="py-10 px-8">
        <h1
          class="text-xl md:text-2xl text-neutralBlack mb-5 md:mb-7 font-semibold"
        >
          About this project
        </h1>
        <div class="mb-6">
          <p class="text-darkGray text-base mb-6 md:text-lg">
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
            platform that elevates your screen to a more comfortable viewing
            height. Placing your monitor at eye level has the potential to
            improve your posture and make you more comfortable while at work,
            helping you stay focused on the task at hand.
          </p>

          <p class="text-darkGray text-base md:text-lg">
            Featuring artisan craftsmanship, the simplicity of design creates
            extra desk space below your computer to allow notepads, pens, and
            USB sticks to be stored under the stand.
          </p>
        </div>

        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup></script>
