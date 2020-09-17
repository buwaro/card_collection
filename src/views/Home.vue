<template>
  <div class="mx-2">
    <div class="flex">
      <div class="flex-auto"></div>
      <Button value="Add collection" @click="toggleModal"></Button>
    </div>
    <div class="flex flex-wrap">
      <div
        class="w-1/2 md:w-1/3 lg:w-1/4"
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
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              @click="removeCollection(index)"
            >
              remove
            </button>
          </div>
        </div>
      </div>
    </div>
    <CreateCollectionModal ref="createColletionModal"> </CreateCollectionModal>
  </div>
</template>

<script>
import Button from "@/components/shared/Button";
import CreateCollectionModal from "@/components/home/CreateCollectionModal";

export default {
  name: "Home",
  components: {
    Button,
    CreateCollectionModal
  },

  computed: {
    collections() {
      return this.$store.getters["collection/list"];
    }
  },

  methods: {
    toggleModal() {
      this.$refs.createColletionModal.toggleModal();
    },
    removeCollection(id) {
      this.$store.dispatch("collection/remove", id);
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
