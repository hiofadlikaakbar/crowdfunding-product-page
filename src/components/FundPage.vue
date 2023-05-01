<template>
  <div class="w-full md:max-w-3xl md:mx-auto relative -top-28 xl:-top-44 px-6">
    <div class="shadow bg-white rounded-xl">
      <div class="px-6 mt-10 py-10">
        <div class="absolute left-0 -top-7 right-0">
          <img :src="Mastercraft" alt="mastercraft" class="mx-auto" />
        </div>
        <!-- modal -->
        <div class="relative">
          <FundModal :modal-active="modalActive" @close-modal="toggleModal">
            <!-- menu 1 -->
            <div class="px-6 mb-8">
              <div
                :class="{
                  'border-darkGray/40': activeOptionIndex !== 0,
                  'border-moderateCyan': activeOptionIndex === 0,
                }"
                class="border-[1px] rounded-lg"
              >
                <div class="p-6">
                  <div class="flex gap-5 items-center">
                    <div
                      @click="activeOptionIndex = 0"
                      class="w-5 h-5 rounded-full border flex justify-center items-center cursor-pointer"
                    >
                      <!-- muncul  -->
                      <div
                        v-if="activeOptionIndex === 0"
                        class="w-3 h-3 rounded-full bg-moderateCyan"
                      ></div>
                    </div>
                    <h3
                      class="text-neutralBlack md:text-lg hover:text-moderateCyan transition duration-200 ease-in-out font-semibold text-base"
                    >
                      Pledge with no reward
                    </h3>
                  </div>
                  <div class="mt-7 lg:ml-10">
                    <p class="text-base md:text-lg text-darkGray">
                      Choose to support us without a reward if you simply
                      believe in our project. As a backer, you will be signed up
                      to receive product updates via email.
                    </p>
                  </div>
                </div>
                <!-- butt triger 1 -->
                <div
                  v-if="activeOptionIndex === 0"
                  class="border-t border-gray-300 p-6"
                >
                  <button
                    @click="firstInput"
                    class="px-5 py-3 block ml-auto hover:bg-darkCyan transition duration-200 ease-in-out bg-moderateCyan text-white rounded-full"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
            <!-- menu 2 -->
            <div class="px-6 mb-8">
              <div
                :class="{
                  'border-darkGray/40': activeOptionIndex !== 1,
                  'border-moderateCyan': activeOptionIndex === 1 && left > 0,
                  'border-darkGray/30': activeOptionIndex === 1 && left <= 0,
                }"
                class="border-[1px] rounded-lg"
              >
                <div class="p-6">
                  <div class="flex gap-5 items-center">
                    <div
                      @click="left !== 0 && (activeOptionIndex = 1)"
                      :class="{
                        'opacity-50 ': left === 0,
                        'w-5 h-5 rounded-full border flex justify-center items-center cursor-pointer': true,
                      }"
                    >
                      <!-- muncul  -->
                      <div
                        v-if="activeOptionIndex === 1 && left > 0"
                        class="w-3 h-3 rounded-full bg-moderateCyan"
                      ></div>
                    </div>
                    <div
                      class="flex-col md:flex-row md:flex md:gap-4 items-center"
                    >
                      <h4
                        :class="{
                          'hover:text-moderateCyan': left > 0,
                          'text-neutralBlack/60 ': left <= 0,
                        }"
                        class="text-neutralBlack mb-1 md:mb-0 md:text-lg transition duration-200 ease-in-out font-semibold text-base"
                      >
                        Bamboo Stand
                      </h4>
                      <p
                        :class="{
                          'text-moderateCyan/60 ': left <= 0,
                        }"
                        class="text-moderateCyan text-base md:text-lg font-medium"
                      >
                        Pledge $25 or more
                      </p>
                    </div>
                    <h2 class="text-xl ml-auto hidden md:block text-darkGray">
                      <span
                        :class="{
                          'text-neutralBlack/60': left <= 0,
                        }"
                        class="text-neutralBlack text-xl font-semibold mr-1"
                        >{{ left }}</span
                      >
                      left
                    </h2>
                  </div>
                  <div class="mt-7 lg:ml-10">
                    <p
                      :class="{
                        'text-darkGray/60': left <= 0,
                      }"
                      class="text-base md:text-lg text-darkGray mb-6"
                    >
                      You get an ergonomic stand made of natural bamboo. You've
                      helped us launch our promotional campaign, and you'll be
                      added to a special Backer member list.
                    </p>
                    <h2 class="text-xl text-darkGray md:hidden">
                      <span
                        :class="{
                          'text-neutralBlack/60': left <= 0,
                        }"
                        class="text-neutralBlack text-xl font-semibold mr-1"
                        >{{ left }}</span
                      >
                      left
                    </h2>
                  </div>
                </div>
                <!-- butt triger 2 -->
                <div
                  v-if="activeOptionIndex === 1 && left > 0"
                  class="border-t flex-col md:flex-row flex md:justify-between items-center border-gray-300 p-6"
                >
                  <h1
                    class="text-darkGray text-center mb-4 md:mb-0 text-base md:text-lg"
                  >
                    Enter your pledge
                  </h1>
                  <div>
                    <div class="flex justify-center gap-3 lg:gap-5">
                      <div
                        :class="[
                          'rounded-full border flex items-center py-2 px-4',
                          { 'border-darkCyan': isInputFocused },
                        ]"
                      >
                        <p class="text-darkGray">$</p>
                        <input
                          type="text"
                          class="ml-2 w-12 font-semibold focus:outline-none"
                          placeholder="25"
                          @focus="() => (isInputFocused = true)"
                          @blur="() => (isInputFocused = false)"
                          v-model="inputValue2"
                        />
                      </div>
                      <button
                        @click="updateValues"
                        :disabled="inputValue2 < 25"
                        class="px-5 py-3 block hover:bg-darkCyan transition duration-200 ease-in-out bg-moderateCyan text-white rounded-full"
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- menu 3 -->
            <div class="px-6 mb-8">
              <div
                :class="{
                  'border-darkGray/40': activeOptionIndex !== 2,
                  'border-moderateCyan': activeOptionIndex === 2 && left2 > 0,
                  'border-darkGray/30': activeOptionIndex === 2 && left2 <= 0,
                }"
                class="border-[1px] rounded-lg"
              >
                <div class="p-6">
                  <div class="flex gap-5 items-center">
                    <div
                      @click="left2 !== 0 && (activeOptionIndex = 2)"
                      :class="{
                        'opacity-50 ': left2 === 0,
                        'w-5 h-5 rounded-full border flex justify-center items-center cursor-pointer': true,
                      }"
                    >
                      <!-- muncul  -->
                      <div
                        v-if="activeOptionIndex === 2 && left2 > 0"
                        class="w-3 h-3 rounded-full bg-moderateCyan"
                      ></div>
                    </div>
                    <div
                      class="flex-col md:flex-row md:flex md:gap-4 items-center"
                    >
                      <h4
                        :class="{
                          'hover:text-moderateCyan': left2 > 0,
                          'text-neutralBlack/60 ': left2 <= 0,
                        }"
                        class="text-neutralBlack mb-1 md:mb-0 md:text-lg transition duration-200 ease-in-out font-semibold text-base"
                      >
                        Black Edition Stand
                      </h4>
                      <p
                        :class="{
                          'text-moderateCyan/60 ': left2 <= 0,
                        }"
                        class="text-moderateCyan text-base md:text-lg font-medium"
                      >
                        Pledge $75 or more
                      </p>
                    </div>
                    <h2
                      :class="{
                        'text-darkGray/60 ': left2 <= 0,
                      }"
                      class="text-xl ml-auto hidden md:block text-darkGray"
                    >
                      <span
                        :class="{
                          'text-neutralBlack/60 ': left2 <= 0,
                        }"
                        class="text-neutralBlack text-xl font-semibold mr-1"
                        >{{ left2 }}</span
                      >
                      left
                    </h2>
                  </div>
                  <div class="mt-7 lg:ml-10">
                    <p
                      :class="{
                        'text-darkGray/60 ': left2 <= 0,
                      }"
                      class="text-base md:text-lg text-darkGray mb-6"
                    >
                      You get a Black Special Edition computer stand and a
                      personal thank you. You'll be added to our Backer member
                      list. Shipping is included.
                    </p>
                    <h2
                      :class="{
                        'text-darkGray/60 ': left2 <= 0,
                      }"
                      class="text-xl md:hidden text-darkGray"
                    >
                      <span
                        :class="{
                          'text-neutralBlack/60 ': left2 <= 0,
                        }"
                        class="text-neutralBlack text-xl font-semibold mr-1"
                        >{{ left2 }}</span
                      >
                      left
                    </h2>
                  </div>
                </div>
                <!-- butt triger 3 -->
                <div
                  v-if="activeOptionIndex === 2 && left2 > 0"
                  class="border-t flex-col md:flex-row flex items-center md:justify-between border-gray-300 p-6"
                >
                  <h1
                    class="text-darkGray text-center mb-4 md:mb-0 text-base md:text-lg"
                  >
                    Enter your pledge
                  </h1>
                  <div class="flex justify-center gap-3 lg:gap-5">
                    <div
                      :class="[
                        'rounded-full border flex items-center py-2 px-4',
                        { 'border-darkCyan': isInputFocused },
                      ]"
                    >
                      <p class="text-darkGray">$</p>
                      <input
                        type="text"
                        class="ml-2 w-12 font-semibold focus:outline-none"
                        placeholder="75"
                        @focus="() => (isInputFocused = true)"
                        @blur="() => (isInputFocused = false)"
                        v-model="inputValue3"
                      />
                    </div>
                    <button
                      @click="updateValues"
                      :disabled="inputValue3 < 75"
                      class="px-5 py-3 block hover:bg-darkCyan transition duration-200 ease-in-out bg-moderateCyan text-white rounded-full"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- menu 4 -->
            <div class="px-6 mb-8">
              <div class="border-[1px] border-darkGray/30 rounded-lg">
                <div class="p-6">
                  <div class="flex gap-5 items-center">
                    <div
                      class="w-5 h-5 rounded-full border flex justify-center items-center cursor-pointer"
                    ></div>
                    <div
                      class="flex-col items-center md:flex md:flex-row md:gap-4"
                    >
                      <h4
                        class="text-neutralBlack/60 mb-1 md:mb-0 font-semibold text-base md:text-lg"
                      >
                        Mahogany Special Edition
                      </h4>
                      <p
                        class="text-moderateCyan/60 text-base md:text-lg font-medium"
                      >
                        Pledge $200 or more
                      </p>
                    </div>
                    <h2
                      class="text-xl hidden md:block ml-auto text-darkGray/60"
                    >
                      <span
                        class="text-neutralBlack/60 text-xl font-semibold mr-1"
                        >0</span
                      >
                      left
                    </h2>
                  </div>
                  <div class="mt-7 lg:ml-10">
                    <p class="text-base text-darkGray/60 mb-6">
                      You get two Special Edition Mahogany stands, a Backer
                      T-Shirt, and a personal thank you. You'll be added to our
                      Backer member list. Shipping is included.
                    </p>
                    <h2 class="text-xl md:hidden text-darkGray/60">
                      <span
                        class="text-neutralBlack/60 text-xl font-semibold mr-1"
                        >0</span
                      >
                      left
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </FundModal>
        </div>
        <div class="mt-6">
          <div class="text-center">
            <h1
              class="text-neutralBlack font-bold capitalize md:text-3xl text-2xl mb-4"
            >
              mastercraft bamboo monitor riser
            </h1>
            <p class="text-darkGray text-base md:text-lg">
              A Beautifully handcrafted monitor stand to reduce neck and eye
              strain.
            </p>
          </div>
        </div>
        <div
          class="flex justify-center sm:justify-around md:justify-between md:px-5 gap-2 mt-5 md:mt-8"
        >
          <button
            @click="
              activeOptionIndex = 0;
              toggleModal();
            "
            class="py-4 rounded-full px-9 whitespace-nowrap hover:bg-darkCyan transition duration-200 ease-in-out bg-moderateCyan text-white"
          >
            Back this project
          </button>
          <div
            class="flex cursor-pointer hover:opacity-60 transition duration-300 ease-in-out"
          >
            <button
              class="py-4 rounded-full md:translate-x-14 px-6"
              :class="{
                'bg-moderateCyan': isBookmarked,
                'bg-[#2F2F2F]': !isBookmarked,
              }"
              @click="toggleBookmark"
            >
              <i class="fa-solid fa-bookmark text-base text-white"></i>
            </button>
            <span
              :class="{ 'text-moderateCyan': isBookmarked }"
              class="font-bold px-5 hidden md:block bg-slate-50 text-darkGray pl-[4.4rem] py-4 rounded-full"
              >{{ bookmarkText }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    class="w-full md:max-w-3xl md:mx-auto px-6 -translate-y-16 xl:-translate-y-36"
  >
    <div class="shadow bg-white rounded-xl py-8 pb-12">
      <div class="md:flex justify-between items-center">
        <div class="px-6 md:px-9 py-6 text-center md:text-left md:w-1/3">
          <div class="md:border-r-2 md:border-gray-300">
            <div class="overflow-hidden">
              <h1 class="text-neutralBlack text-3xl font-bold mb-2">
                {{ money }}
              </h1>
              <p class="text-sm text-darkGray mb-5">of $100,000 backed</p>
            </div>
            <div class="h-[1px] w-[90px] md:hidden bg-gray-300 mx-auto"></div>
          </div>
        </div>

        <div class="px-6 md:px-9 py-6 text-center md:text-left md:w-1/3">
          <div class="md:border-r-2 md:border-gray-300">
            <div class="overflow-hidden">
              <h1 class="text-neutralBlack text-3xl font-bold mb-2">
                {{ backers }}
              </h1>
              <p class="text-sm text-darkGray mb-5">total backers</p>
            </div>
            <div class="h-[1px] w-[90px] md:hidden bg-gray-300 mx-auto"></div>
          </div>
        </div>

        <div class="px-6 md:px-9 py-6 text-center md:text-left md:w-1/3">
          <div class="overflow-hidden">
            <h1 class="text-neutralBlack text-3xl font-bold mb-2">56</h1>
            <p class="text-sm text-darkGray mb-5">days left</p>
          </div>
        </div>
      </div>
      <div class="px-6 md:px-9">
        <div class="w-full h-4 bg-slate-50 overflow-hidden rounded-full">
          <div
            class="h-full bg-moderateCyan rounded-full"
            :style="{ width: `${progress}%` }"
          ></div>
        </div>
      </div>
    </div>
  </div>

  <AboutPage>
    <div class="border-[1px] border-darkGray/40 p-8 rounded-lg mb-7">
      <div
        class="flex-col md:flex justify-between md:flex-row mb-6 items-center"
      >
        <h2
          :class="{
            'hover:text-moderateCyan': left > 0,
            'text-neutralBlack/60 ': left <= 0,
          }"
          class="text-base md:text-lg transition duration-200 ease-in-out capitalize text-neutralBlack mb-1 md:mb-0 font-semibold"
        >
          bamboo stand
        </h2>
        <p
          :class="{
            'text-moderateCyan/60 ': left <= 0,
            'transition duration-200 ease-in-out': true,
          }"
          class="text-moderateCyan text-base md:text-lg font-medium"
        >
          Pledge $25 or more
        </p>
      </div>

      <p
        :class="{
          'text-darkGray/60': left <= 0,
        }"
        class="max-w-2xl text-base md:text-lg text-darkGray mb-5 md:mb-8"
      >
        You get an ergonomic stand made of natural bamboo. You've helped us
        launch our promotional campaign, and you'll be added to a special Backer
        member list.
      </p>

      <div class="flex-col md:flex justify-between items-center md:flex-row">
        <h2
          :class="{
            'text-darkGray/60 ': left <= 0,
          }"
          class="text-base md:text-lg text-darkGray mb-4 md:mb-0"
        >
          <span
            ref="spanLeft"
            :class="{
              'text-neutralBlack/60 ': left <= 0,
            }"
            class="text-neutralBlack font-semibold text-2xl md:text-4xl mr-1"
            >{{ left }}</span
          >
          left
        </h2>
        <button
          @click="
            activeOptionIndex = 1;
            toggleModal();
          "
          :disabled="left <= 0"
          :class="{
            'bg-darkGray/60 text-neutralBlack/60': left <= 0,
            'hover:bg-darkCyan text-white bg-moderateCyan': left > 0,
            'transition duration-200 ease-in-out px-6  py-3 block rounded-full': true,
          }"
        >
          {{ left <= 0 ? "Out Of Stock" : "Select Reward" }}
        </button>
      </div>
    </div>

    <div class="border-[1px] border-darkGray/40 p-8 rounded-lg mb-7">
      <div
        class="flex-col md:flex justify-between md:flex-row items-center mb-6"
      >
        <h2
          :class="{
            'hover:text-moderateCyan': left2 > 0,
            'text-neutralBlack/60 ': left2 <= 0,
          }"
          class="text-base md:text-lg capitalize transition duration-200 ease-in-out text-neutralBlack mb-1 md:mb-0 font-semibold"
        >
          black edition stand
        </h2>
        <p
          :class="{
            'text-moderateCyan/60 ': left2 <= 0,
          }"
          class="text-moderateCyan text-base md:text-lg font-medium"
        >
          Pledge $75 or more
        </p>
      </div>

      <p
        :class="{
          'text-darkGray/60 ': left2 <= 0,
        }"
        class="max-w-2xl text-base md:text-lg text-darkGray mb-5 md:mb-8"
      >
        You get a Black Special Edition computer stand and a personal thank you.
        You'll be added to our Backer member list. Shipping is included.
      </p>

      <div class="flex-col md:flex justify-between items-center md:flex-row">
        <h2 class="text-base text-darkGray mb-4 md:mb-0">
          <span
            :class="{
              'text-neutralBlack/60 ': left2 <= 0,
            }"
            class="text-neutralBlack font-semibold text-2xl md:text-4xl mr-1"
            >{{ left2 }}</span
          >
          left
        </h2>
        <button
          @click="
            activeOptionIndex = 2;
            toggleModal();
          "
          :disabled="left2 <= 0"
          :class="{
            'bg-darkGray/60 text-neutralBlack/60': left2 <= 0,
            'hover:bg-darkCyan text-white bg-moderateCyan': left2 > 0,
            'transition duration-200 ease-in-out px-6 py-3 block rounded-full': true,
          }"
        >
          {{ left2 <= 0 ? "Out Of Stock" : "Select Reward" }}
        </button>
      </div>
    </div>

    <div class="border-[1px] border-darkGray/30 p-8 rounded-lg">
      <div
        class="flex-col md:flex justify-between md:flex-row items-center mb-6"
      >
        <h2
          class="text-base md:text-lg capitalize text-neutralBlack/60 mb-1 md:mb-0 font-semibold"
        >
          mahogany special edition
        </h2>
        <p class="text-moderateCyan/60 text-base md:text-lg font-medium">
          Pledge $200 or more
        </p>
      </div>

      <p class="max-w-2xl text-base md:text-lg text-darkGray/60 mb-5 md:mb-8">
        You get two Special Edition Mahogany stands, a Backer T-Shirt, and a
        personal thank you. You'll be added to our Backer member list. Shipping
        is included.
      </p>

      <div class="flex-col md:flex justify-between items-center md:flex-row">
        <h2 class="text-base text-darkGray/60 mb-4 md:mb-0">
          <span
            class="text-neutralBlack/60 font-semibold text-2xl md:text-4xl mr-1"
            >0</span
          >
          left
        </h2>
        <button
          href="#"
          class="py-3 rounded-full capitalize px-6 bg-darkGray/60 text-white font-medium"
        >
          out of stock
        </button>
      </div>
    </div>
  </AboutPage>
  <ThanksModal v-if="showModal" @close="showModal = false" />
</template>

<script setup>
import Mastercraft from "../assets/logo-mastercraft.svg";
import FundModal from "./FundModal.vue";
import AboutPage from "./AboutPage.vue";
import ThanksModal from "./ThanksModal.vue";
import { ref, computed } from "vue";
const showModal = ref(false);
const money = ref("$89,914");
const backers = ref("5,007");
const inputValue2 = ref("");
const inputValue3 = ref("");
const left = ref(101);
const left2 = ref(64);
const progress = ref(80);
const isInputFocused = ref(false);

function firstInput() {
  showModal.value = true;
  backers.value = (
    parseInt(backers.value.replace(/\D/g, "")) + 1
  ).toLocaleString();
}

function updateValues() {
  const input2 = parseInt(inputValue2.value);
  const input3 = parseInt(inputValue3.value);

  if (!isNaN(input2)) {
    const newMoney = parseInt(money.value.replace(/\D/g, "")) + input2;
    money.value = "$" + newMoney.toLocaleString();
    backers.value = (
      parseInt(backers.value.replace(/\D/g, "")) + 1
    ).toLocaleString();
    inputValue2.value = "";
    left.value -= 1;
    if (progress.value < 100) {
      progress.value += 3;
    } else {
      showModal.value = true;
    }

    showModal.value = true;
  }

  if (!isNaN(input3)) {
    const newMoney = parseInt(money.value.replace(/\D/g, "")) + input3;
    money.value = "$" + newMoney.toLocaleString();
    backers.value = (
      parseInt(backers.value.replace(/\D/g, "")) + 1
    ).toLocaleString();
    inputValue3.value = "";
    left2.value -= 1;
    if (progress.value < 100) {
      progress.value += 7;
    } else {
      showModal.value = true;
    }
    showModal.value = true;
  }
}

const activeOptionIndex = ref(-1);
const isBookmarked = ref(false);
const modalActive = ref(null);
const toggleModal = () => {
  modalActive.value = !modalActive.value;
  modalActive.value
    ? (document.body.style.overflowY = "hidden")
    : (document.body.style.overflowY = "");
};
const bookmarkText = computed(() => {
  return isBookmarked.value ? "Bookmarked" : "Bookmark";
});
const toggleBookmark = () => {
  isBookmarked.value = !isBookmarked.value;
};
</script>
