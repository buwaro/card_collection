import { createStore } from "vuex";
import VuexPersistence from "vuex-persist";
import state from "./global/state";
import mutations from "./global/mutations";
import actions from "./global/actions";
import getters from "./global/getters";
import modules from "./modules";

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
});

export default createStore({
  state,
  mutations,
  actions,
  getters,
  modules,
  plugins: [vuexLocal.plugin]
});
