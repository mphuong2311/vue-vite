import { createStore } from "vuex";

import order from "./modules/order";
import language from "./modules/language";

const store = createStore({
  modules: {
    order,
    language,
  },
});

export default store;
