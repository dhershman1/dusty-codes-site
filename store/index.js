export const state = () => ({
  methodStyle: 'one',
  currDisplay: 'readme',
  drawer: false
})

export const mutations = {
  switchMethodStyle (state) {
    if (state.methodStyle === 'one') {
      state.methodStyle = 'all'
    } else {
      state.methodStyle = 'one'
    }
  },

  switchDisplay (state, val) {
    state.currDisplay = val
  },

  toggleDrawer (state) {
    state.drawer = !state.drawer
  },

  closeDrawer (state) {
    state.drawer = false
  }
}
