import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import coachesModules from './modules/coaches/index.js';
import requestsModules from './modules/requests/index.js';
import authModules from './modules/auth/index.js';

const store = createStore({
  modules: {
    coaches: coachesModules,
    requests: requestsModules,
    auth: authModules,
  },
  plugins: [createPersistedState({
    paths: ['coaches']
  })],

});


export default store; 