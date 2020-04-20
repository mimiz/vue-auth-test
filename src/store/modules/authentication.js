const state = {
  user: null,
  keycloak: null
};
const ADMIN_ROLE_NAME = "Administrator";
export default {
  namespaced: true,
  state,
  getters: {
    isLogged(state) {
      return state.user ? state.user.authenticated : false;
    },
    isAdmin(state) {
      if (state.user) {
        if (
          state.user.hasRealmRole &&
          typeof state.user.hasRealmRole === "function"
        ) {
          return state.user.hasRealmRole(ADMIN_ROLE_NAME);
        }
      }
      return false;
    }
  },
  actions: {
    login({ commit }, { keycloak, user }) {
      commit("setUser", user);
      commit("setKeycloak", keycloak);
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setKeycloak(state, keycloak) {
      state.keycloak = keycloak;
    }
  }
};
