import Vue from 'vue'
import hljs from 'highlight.js'

Vue.directive('highlightjs', {
  deep: true,
  bind: (el, binding) => {
    // On first bind, highlight all targets
    const targets = el.querySelectorAll('code')

    targets.forEach(target => {
      // If a value is directly assigned to the directive, use this
      // Instead of the element content.
      if (binding.value) {
        target.textContent = binding.value
      }
      hljs.highlightBlock(target)
    })
  },
  componentUpdated: (el, binding) => {
    // After an update, re-fill the content and then highlight
    const targets = el.querySelectorAll('code')

    targets.forEach(target => {
      if (binding.value) {
        target.textContent = binding.value
        hljs.highlightBlock(target)
      }
    })
  }
})
