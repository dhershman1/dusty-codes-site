const store = {
  state: () => ({
    sidebar: false
  }),
  mutations: {
    toggleSidebar(state) {
      state.sidebar = !state.sidebar;
    }
  }
};

export default store;
