<template>
  <teleport to="body">
    <transition name="fade-in">
      <div
        v-if="modalActive"
        class="fixed inset-0 z-[100] py-12 px-4 flex justify-center items-center"
      >
        <div class="bg-neutralBlack/50 absolute inset-0"></div>
        <div class="h-full z-[100] mx-auto overflow-y-scroll rounded-lg">
          <div
            class="bg-white py-4 rounded-lg w-full md:max-w-2xl xl:max-w-4xl z-[10] pb-5"
          >
            <div class="flex justify-between p-6 items-center">
              <h1
                class="text-lg md:text-2xl ml-5 text-neutralBlack font-semibold"
              >
                Back this project
              </h1>
              <button @click="$emit('close-modal')">
                <i
                  class="fa-solid fa-xmark text-lg md:text-2xl text-darkGray hover:text-neutralBlack"
                ></i>
              </button>
            </div>
            <div class="px-6 mb-7">
              <h4 class="text-darkGray ml-5 md:text-lg text-base">
                Want to support us in bringing Mastercraft Bamboo Monitor Riser
                out in the world?
              </h4>
            </div>
            <slot></slot>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup>
defineEmits("close-modal");

defineProps({
  modalActive: {
    type: Boolean,
    default: false,
  },
});
</script>
<style scoped>
.fade-in-enter-active,
.fade-in-leave-active {
  transition: opacity 0.4s cubic-bezier(0.52, 0.04, 0.18, 0.9);
}

.fade-in-enter-from,
.fade-in-leave-to {
  opacity: 0;
}
</style>
