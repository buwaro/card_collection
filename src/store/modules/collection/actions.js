export default {
  add(context, collection) {
    context.commit("add", collection);
  },
  remove(context, collection) {
    context.commit("remove", collection);
  }
};
