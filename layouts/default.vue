<template>
  <div>
<nav class="navbar is-primary" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
    </a>

    <a role="button" class="navbar-burger burger" onclick="document.querySelector('.navbar-menu').classList.toggle('is-active');" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        Home
      </a>

      <a class="navbar-item">
        Dashboard
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            About
          </a>
          <a class="navbar-item">
            Jobs
          </a>
          <a class="navbar-item">
            Contact
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <b-button @click="logout">
          <font-awesome-icon :icon="['fas', 'user']"/>
                Logout
            </b-button>
      </div>
    </div>
  </div>
</nav>

    <section class="main-content columns">
      <aside class="column is-2 section">
        <p class="menu-label is-hidden-touch">
          General
        </p>
        <ul class="menu-list">
          <li
            v-for="(item, key) of items"
            :key="key"
          >
            <nuxt-link
              :to="item.to"
              exact-active-class="is-active"
            >
           <font-awesome-icon :icon="item.icon"/>
               &nbsp;&nbsp;{{ item.title }}
            </nuxt-link>
          </li>
        </ul>
      </aside>

      <div class="container column is-10">
        <nuxt />
      </div>
    </section>
  </div>
</template>

<script>
export default {
    middleware:'auth',
  data () {
    return {
      items: [
        {
          title: 'Dashboard',
          icon: ['fas', 'tachometer-alt'],
          to: { name: 'dashboard' }
        },
        {
          title:'Students',
          icon:['fas', 'user-graduate'],
          to:{name:'students'}
        },
        {
          title:'Teachers',
          icon:['fas', 'chalkboard-teacher'],
          to:{name:'teachers'}
        }
      ]
    }
  },
  methods:{
    logout(){
      this.$store.commit('setLoginStatus',false)
      this.$router.push('/')
    }
  }
}
</script>
