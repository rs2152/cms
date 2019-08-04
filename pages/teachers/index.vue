<template>
  <section>
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

        <div class="column ">
          <div class="buttons is-pulled-right">
           <nuxt-link
           class="button is-primary"
              :to="{name:'teachers-add_teacher'}"
              exact-active-class="is-active"
            >
            <font-awesome-icon :icon="['fas','plus-circle']"/>&nbsp; Add A Teacher
            </nuxt-link>
           </div>
        </div>
      </div>

    <b-table
      :data="data"
      ref="table"
      paginated
      per-page="12"
      aria-next-label="Next page"
      aria-previous-label="Previous page"
      aria-page-label="Page"
      aria-current-label="Current page"
    >
      <template slot-scope="props">
        <b-table-column field="id" label="ID" width="40" numeric>{{ props.row.id }}</b-table-column>
        <b-table-column
          field="user.last_name"
          label="Last Name"
          sortable
        >{{ props.row.user.last_name }}</b-table-column>

        <b-table-column field="date" label="Date" sortable centered>
          <span class="tag is-success">{{ new Date(props.row.date).toLocaleDateString() }}</span>
        </b-table-column>

        <b-table-column label="Gender">
          <b-icon pack="fa" :icon="props.row.gender === 'Male' ? 'mars' : 'venus'"></b-icon>
          {{ props.row.gender }}
        </b-table-column>
        <b-table-column field="Action" label="Action" width="40" numeric><div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
        </a>

        <div class="navbar-dropdown">
          <nuxt-link :to="'teachers/'+`${props.row.id}`" class="navbar-item">
            Edit
          </nuxt-link>
          <a class="navbar-item">
            Delete
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
  </b-table-column>
      </template>
    </b-table>
  </section>
</template>

<script>
const data = [
  {
    id: 1,
    user: { first_name: "Jesse", last_name: "Simmons" },
    date: "2016/10/15 13:43:27",
    gender: "Male"
  },
  {
    id: 2,
    user: { first_name: "John", last_name: "Jacobs" },
    date: "2016/12/15 06:00:53",
    gender: "Male"
  },
  {
    id: 3,
    user: { first_name: "Tina", last_name: "Gilbert" },
    date: "2016/04/26 06:26:28",
    gender: "Female"
  },
  {
    id: 4,
    user: { first_name: "Clarence", last_name: "Flores" },
    date: "2016/04/10 10:28:46",
    gender: "Male"
  },
  {
    id: 5,
    user: { first_name: "Anne", last_name: "Lee" },
    date: "2016/12/06 14:38:38",
    gender: "Female"
  },
  {
    id: 6,
    user: { first_name: "Sara", last_name: "Armstrong" },
    date: "2016/09/23 18:50:04",
    gender: "Female"
  },
  {
    id: 7,
    user: { first_name: "Anthony", last_name: "Webb" },
    date: "2016/08/30 23:49:38",
    gender: "Male"
  },
  {
    id: 8,
    user: { first_name: "Andrew", last_name: "Greene" },
    date: "2016/11/20 14:57:47",
    gender: "Male"
  },
  {
    id: 9,
    user: { first_name: "Russell", last_name: "White" },
    date: "2016/07/13 09:29:49",
    gender: "Male"
  },
  {
    id: 10,
    user: { first_name: "Lori", last_name: "Hunter" },
    date: "2016/12/09 01:44:05",
    gender: "Female"
  },
  {
    id: 11,
    user: { first_name: "Ronald", last_name: "Wood" },
    date: "2016/12/04 02:23:48",
    gender: "Male"
  },
  {
    id: 12,
    user: { first_name: "Michael", last_name: "Harper" },
    date: "2016/07/27 13:28:15",
    gender: "Male"
  },
  {
    id: 13,
    user: { first_name: "George", last_name: "Dunn" },
    date: "2017/03/07 12:26:52",
    gender: "Male"
  },
  {
    id: 14,
    user: { first_name: "Eric", last_name: "Rogers" },
    date: "2016/06/07 05:41:52",
    gender: "Male"
  },
  {
    id: 15,
    user: { first_name: "Juan", last_name: "Meyer" },
    date: "2017/02/01 04:56:34",
    gender: "Male"
  }
];

export default {
  data() {
    return {
      data,
    };
  }
};
</script>

