<template>
  <teleport to="body">
    <div>
      <div class="bg-neutralBlack/50 fixed z-[200] inset-0">
        <div class="items-center justify-center px-8 h-screen flex">
          <div class="p-5 md:p-8 lg:p-11 rounded-lg bg-white">
            <img :src="iconCheck" alt="check" class="mx-auto mb-7" />
            <h3
              class="text-center text-xl md:text-2xl text-neutralBlack font-semibold mb-7"
            >
              Thanks for your support
            </h3>
            <p
              class="text-center text-darkGray text-base md:text-lg leading-relaxed md:max-w-sm mb-7"
            >
              Your pledge brings us one step closer to sharing Mastercraft
              Bamboo Monitor Riser worldwide. You will get an email once our
              campaign is completed.
            </p>

            <button
              @click="$emit('close')"
              class="text-base hover:bg-darkCyan transition duration-200 ease-in-out py-3 px-7 block mx-auto rounded-full bg-moderateCyan text-white"
            >
              Got it
            </button>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup>
import iconCheck from "../assets/icon-check.svg";
</script>
