<template>
  <div>
    <div class="level is-mobile"></div>
    <div class="level is-mobile"></div>
    <div class="columns">
      <div class="column">
        <nav class="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li>
              <a href="#">Admin</a>
            </li>
            <li>
              <a href="#">Teachers</a>
            </li>
          </ul>
        </nav>
      </div>

      <div class="column">
        <div class="buttons is-pulled-right">
          <nuxt-link
            class="button is-primary"
            :to="{name:'teachers'}"
            exact-active-class="is-active"
          >Back</nuxt-link>
        </div>
      </div>
    </div>
    <app-form></app-form>
  </div>
</template>

<script>
import Form from "~/components/Form";

export default {
  name: "add_teacher",

  components: {
    "appForm":Form
  }
};
</script>
