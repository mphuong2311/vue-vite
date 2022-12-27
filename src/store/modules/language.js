import Cookies from "js-cookie";
import { getLanguage } from "@/lang/index";

export default {
  state: () => ({
    language: getLanguage(),
  }),
  getters: {},
  mutations: {
    SET_LANGUAGE: (state, language) => {
      state.language = language;
      Cookies.set("language", language);
    },
  },
  actions: {
    setLanguage({ commit }, language) {
      commit("SET_LANGUAGE", language);
    },
  },
};
