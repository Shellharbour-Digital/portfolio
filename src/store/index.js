import { createStore } from 'vuex';
import header from './modules/header';
import one from './modules/one';

export default createStore({
  modules: {
    header,
    one,
  },
});
