<template>
  <div>
<nav class="navbar is-primary" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
    </a>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
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
         <a class="button">
    <span class="icon">
      <i class="fab fa-github"></i>
    </span>
    <span>GitHub</span>
  </a>
      </div>
    </div>
  </div>
</nav>

    <section class="main-content columns">
      <aside class="column is-2 section">
      
    <b-menu>
        <b-menu-list label="Menu">
            <b-menu-item icon="information-outline" label="Info"></b-menu-item>
            <b-menu-item icon="settings" active expanded>
                <template slot="label" slot-scope="props">
                    Administrator
                    <b-icon
                        class="is-pulled-right"
                        :icon="props.expanded ? 'menu-down' : 'menu-up'">
                    </b-icon>
                </template>
                <b-menu-item   v-for="(item, key) of items"
            :key="key" :icon="item.icon" :label="item.to.name" :to="item.to" tag="nuxt-link"></b-menu-item>
                <b-menu-item icon="cellphone-link" label="Devices"></b-menu-item>
                <b-menu-item icon="cash-multiple" label="Payments" disabled></b-menu-item>
            </b-menu-item>
            <b-menu-item icon="account" label="My Account">
                <b-menu-item label="Account data"></b-menu-item>
                <b-menu-item label="Addresses"></b-menu-item>
            </b-menu-item>
        </b-menu-list>
        <b-menu-list>
            <b-menu-item  v-for="(item, key) of items"
            :key="key"
                :label="item.to.name"
                :icon="item.icon"
                tag="nuxt-link"
                :to="item.to">
            </b-menu-item>
        </b-menu-list>
        <b-menu-list label="Actions">
            <b-menu-item  v-for="(item, key) of items"
            :key="key"
                :label="item.to.name"
                :icon="item.icon"
                tag="nuxt-link"
                :to="item.to">
            </b-menu-item>
        </b-menu-list>
    </b-menu>


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
              <b-icon :icon="item.icon" /> {{ item.title }}
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
  data () {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        },
        {
          title: 'Inspire',
          icon: 'lightbulb',
          to: { name: 'inspire' }
        },
        {
          title:'nitesh',
          icon:'lightbulb',
          to:{name:'nitesh'}
        }
      ]
    }
  }
}
</script>
