import { filter, fuzzySearch, sortBy, toLower, omit } from 'kyanite'
import { get } from 'axios'
import hljs from 'highlight.js'
import marked from 'marked'

export const state = () => ({
  module: {},
  selectedMethod: {},
  readme: '',
  changelog: '',
  docs: []
})

export const getters = {
  readmeHtml (state) {
    return marked(state.readme, {
      gfm: true,
      langPrefix: 'hljs ',
      highlight (code) {
        return hljs.highlightAuto(code, ['javascript', 'html']).value
      }
    })
  },

  changelogHtml (state) {
    return marked(state.changelog)
  },

  sortedDocs (state) {
    return sortBy(x => x.title, state.docs)
  },

  filterDocs (state) {
    return val =>
      filter(({ title, category }) =>
        fuzzySearch(toLower(val), toLower(title)) ||
        fuzzySearch(toLower(val), toLower(category)), state.docs)
  }
}

export const mutations = {
  setModule (state, data) {
    state.module = data
  },

  setReadme (state, data) {
    state.readme = data
  },

  setChangelog (state, data) {
    state.changelog = data
  },

  setDocs (state, data) {
    state.docs = data
  },

  selectMethod (state, data) {
    state.selectedMethod = data
  }
}

export const actions = {
  fetchInfo ({ commit, state }, { module, cl }) {
    if (module === state.module.name) {
      return false
    }

    return Promise.all([
      get(`https://cdn.jsdelivr.net/npm/${module}@latest/README.md`),
      get(`https://cdn.jsdelivr.net/npm/${module}@latest/${cl}.md`),
      get(`https://cdn.jsdelivr.net/npm/${module}@latest/info.json`)
    ]).then(([readme, changelog, info]) => {
      commit('setModule', omit('docs', info.data))
      commit('setReadme', readme.data)
      commit('setChangelog', changelog.data)
      commit('setDocs', info.data.docs)
      commit('selectMethod', sortBy(x => x.title, info.data.docs)[0])
    }).catch(err => {
      commit('setModule', {})
      commit('setReadme', '')
      commit('setChangelog', '')
      commit('setDocs', [])

      throw err
    })
  }
}
