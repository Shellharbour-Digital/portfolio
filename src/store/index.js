import { createStore } from 'vuex';
import header from './modules/header';
import one from './modules/one';
import two from './modules/two';
import three from './modules/three';

export default createStore({
  modules: {
    header,
    one,
    two,
    three,
  },
});
