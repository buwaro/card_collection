<template>
  <div class="mx-2">
    <div class="flex">
      <div class="flex-auto"></div>
      <button
        class="modal-open bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-2"
        @click="toggleModal"
      >
        Add Collection
      </button>
    </div>
    <div class="flex flex-wrap">
      <div
        class="w-1/2 md:w-1/3"
        v-for="(collection, index) in collections"
        v-bind:key="collection.id"
      >
        <div class="flex flex-wrap">
          <div class="flex-full m-1">
            <img src="../assets/images/mtg_card_back.jpg" />
          </div>
          <div class="flex-auto self-center">
            {{ collection.name }}
          </div>
          <div class="m-1">
            <button
              class="modal-open bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              @click="removeCollection(index)"
            >
              remove
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->

    <!--Modal-->
    <div
      class="opacity-0 pointer-events-none fixed w-full h-full top-0 left-0 flex items-center justify-center"
      ref="modal"
      @keydown.esc="toggleModal"
    >
      <div
        class="absolute w-full h-full bg-gray-900 opacity-50"
        ref="modalOverlay"
      ></div>

      <div
        class="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto"
      >
        <div
          class="absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50"
          @click="toggleModal"
        >
          <svg
            class="fill-current text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path
              d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
            ></path>
          </svg>
          <span class="text-sm">(Esc)</span>
        </div>

        <!-- Add margin if you want to see some of the overlay behind the modal-->
        <div class="modal-content py-4 text-left px-6">
          <!--Title-->
          <div class="flex justify-between items-center pb-3">
            <p class="text-2xl font-bold">Add a collection</p>
            <div class="cursor-pointer z-50" @click="toggleModal">
              <svg
                class="fill-current text-black"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path
                  d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                ></path>
              </svg>
            </div>
          </div>

          <!--Body-->
          <form class="w-full max-w-sm mx-auto" @submit="addCollection">
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label
                  class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="inline-full-name"
                >
                  Full Name
                </label>
              </div>
              <div class="md:w-2/3">
                <input
                  v-model="name"
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-full-name"
                  type="text"
                />
              </div>
            </div>
          </form>

          <!--Footer-->
          <div class="flex justify-end pt-2">
            <button
              class="px-4 bg-transparent p-3 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2"
              @click="toggleModal"
            >
              Close
            </button>
            <button
              class="px-4 bg-indigo-500 p-3 rounded-lg text-white hover:bg-indigo-400"
              @click="addCollection"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    //HelloWorld
  },
  data: function() {
    return {
      name: "",
      collections: []
    };
  },

  mounted() {
    // close modal
    document.body.addEventListener("keydown", e => {
      if (
        e.keyCode === 27 &&
        document.body.classList.contains("modal-active")
      ) {
        this.toggleModal();
      }
    });
  },

  methods: {
    toggleModal() {
      const body = document.querySelector("body");
      const modal = this.$refs.modal;
      modal.classList.toggle("opacity-0");
      modal.classList.toggle("pointer-events-none");
      body.classList.toggle("modal-active");
    },

    addCollection(e) {
      e.preventDefault();
      this.collections.push({ name: this.name });
      this.name = "";
      this.toggleModal();
    },

    removeCollection(id) {
      this.collections.splice(id, 1);
    }
  }
};
</script>

<style lang="scss">
.modal {
  transition: opacity 0.25s ease;
}
body.modal-active {
  overflow-x: hidden;
  overflow-y: visible !important;
}
</style>
