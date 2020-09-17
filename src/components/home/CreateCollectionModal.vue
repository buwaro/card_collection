<template>
  <modal ref="modal" title="Add a collection">
    <template v-slot:body>
      <form class="w-full max-w-sm mx-auto" @submit="addcollection">
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              full name
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
    </template>
    <template v-slot:buttons>
      <button
        class="px-4 bg-indigo-500 p-3 rounded-lg text-white hover:bg-indigo-400"
        @click="addCollection"
      >
        Add
      </button>
    </template>
  </modal>
</template>

<script>
import Modal from "@/components/shared/Modal";

export default {
  name: "CreateCollectionModal",
  components: {
    Modal
  },

  data: function() {
    return {
      name: ""
    };
  },

  methods: {
    toggleModal() {
      this.$refs.modal.toggleModal();
    },
    addCollection(e) {
      e.preventDefault();
      this.$store.dispatch("collection/add", { name: this.name });
      this.name = "";
      this.toggleModal();
    }
  }
};
</script>
