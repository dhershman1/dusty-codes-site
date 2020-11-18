import '@mdi/font/css/materialdesignicons.css'
import {
  VApp,
  VAlert,
  VBtn,
  VCard,
  VDivider,
  VFooter,
  VGrid,
  VIcon,
  VList,
  VNavigationDrawer,
  VProgressCircular,
  VTabs,
  VTextField,
  VToolbar,
  VTooltip,
  Vuetify,
  transitions
} from 'vuetify'
import {
  scroll
} from 'vuetify-directives'
import Vue from 'vue'

Vue.use(Vuetify, {
  iconfont: 'mdi',
  theme: {
    primary: '#2b5994',
    darkpurp: '#9c27b0',
    accent: '#e4fde1',
    secondary: '#114b5f',
    info: '#0D47A1',
    warning: '#ffb300',
    error: '#B71C1C',
    success: '#2E7D32'
  },
  directives: {
    scroll
  },
  components: {
    VApp,
    VAlert,
    VCard,
    VDivider,
    VNavigationDrawer,
    VProgressCircular,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VTabs,
    VToolbar,
    VTooltip,
    VTextField,
    transitions
  }
})
