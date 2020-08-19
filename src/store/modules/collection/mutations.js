export default {
  add(state, collection) {
    state.list.push(collection);
  },

  remove(state, id) {
    state.list.splice(id, 1);
  }
};
