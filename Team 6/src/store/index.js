import { getAllItems, getItem } from "@/utility/axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    items: [],
    item: {},
    editable: false,
  },
  getters: {},
  mutations: {
    setItems(state, payload) {
      state.items = payload;
    },
    setItem(state, payload) {
      state.item = payload;
    },
    setIditable(state, payload) {
      state.editable = payload;
    },
  },
  actions: {
    async fetchData({ commit }) {
      const items = await getAllItems();
      commit("setItems", items);
    },
    async fetchItem({ commit }, id) {
      if (id) {
        const item = await getItem(id);
        commit("setItem", item);
      } else {
        commit("setItem", {});
      }
    },
  },
  modules: {},
});
