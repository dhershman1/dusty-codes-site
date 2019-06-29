<template>
  <div class="grid">
    <header>
      <h2>Dusty Codes</h2>
    </header>
    <aside class="nav">
      <a-menu
      @click="navigate"
      mode="inline"
      class="nav__menu">
        <a-menu-item class="nav__item" key="home">Home</a-menu-item>
        <a-menu-item class="nav__item" key="exp">Experience</a-menu-item>
      </a-menu>
    </aside>
    <main class="wrapper">
      <nuxt />
    </main>
    <footer>
      <span class="pl-3">Dustin Hershman &copy; 2019 Built using
        <a href="https://nuxtjs.org/" target="_blank">Nuxt</a> and
        <a href="https://vue.ant.design/docs/vue/introduce/" target="_blank">Ant Design</a>
      </span>
    </footer>
  </div>
</template>

<script>

export default {
  data () {
    return {
      fab: false,
      title: 'Dusty Codes',
      navDrawer: false,
      navItems: [
        {
          icon: 'pages',
          title: 'Portfolio',
          items: [
            {
              to: '/portfolio',
              icon: 'pages',
              title: 'Portal'
            },
            {
              title: 'Experience',
              to: '/portfolio/experience',
              icon: 'done_all'
            },
            {
              title: 'Projects',
              to: '/portfolio/projects',
              icon: 'donut_large'
            },
            {
              title: 'Skills',
              to: '/portfolio/skills',
              icon: 'assessment'
            }
          ]
        },
        {
          icon: 'assignment',
          title: 'Documentation',
          items: [
            {
              title: 'Portal',
              to: '/documentation',
              icon: 'assignment'
            },
            {
              title: 'Simply Valid',
              href: 'http://simply_valid.dusty.codes',
              icon: 'question_answer'
            },
            {
              title: 'Phone Fns',
              href: 'https://phone-fns.dusty.codes',
              icon: 'contact_phone'
            },
            {
              title: 'Kyanite',
              href: 'https://kyanite.dusty.codes',
              icon: 'extension'
            },
            {
              title: 'Simple Card',
              to: '/documentation/simple-card',
              icon: 'credit_card'
            }
          ]
        }
      ]
    }
  },
  methods: {
    onScroll () { // eslint-disable-line complexity
      if (typeof window === 'undefined') {
        return false
      }

      const top = window.pageYOffset || document.documentElement.offsetTop || 0

      this.fab = top > 300

      return false
    },
    toTop () {
      this.$router.push({ hash: '' })
      window.scrollTo(0, 0)
    },
    openNav () {
      this.navDrawer = !this.navDrawer
      this.toTop()
    },
    navigate (e) {
      console.log(e)
    }
  }
}
</script>

<style>

.container {
  height: 100%
}

.nav-fixed {
  position: 'fixed';
}

.title-btn {
  font-size: 20px;
  height: 100%;
  margin: 0;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
