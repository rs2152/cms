<template>
  <div class="columns">
    <section class="section column is-10">
      <b-field horizontal label="Name" type="is-danger" message="Please enter a subject">
        <b-input name="subject" expanded></b-input>
      </b-field>
      <b-field horizontal label="Father's Name" type="is-danger" message="Please enter a subject">
        <b-input name="subject" expanded></b-input>
      </b-field>
      <b-field horizontal label="Mother's Name" type="is-danger" message="Please enter a subject">
        <b-input name="subject" expanded></b-input>
      </b-field>
      <b-field horizontal label="class" type="is-danger" message="Please enter a subject">
        <b-input name="subject" expanded></b-input>
      </b-field>
      <b-field horizontal label="Roll No." type="is-success" message="Please enter a subject">
        <b-input name="subject" expanded></b-input>
      </b-field>
      <b-field horizontal label="Subject" type="is-danger" message="Please enter a subject">
        <b-input name="subject" expanded></b-input>
      </b-field>

      <b-field horizontal label="From">
        <b-input name="name" placeholder="Name" expanded></b-input>
        <b-input name="email" type="email" placeholder="nobody@nowhere.com" expanded></b-input>
      </b-field>

      <b-field horizontal label="Topic">
        <b-select placeholder="Select a topic">
          <option value="1">Bulma</option>
          <option value="2">Vue.js</option>
          <option value="3">Buefy</option>
        </b-select>
      </b-field>

      <b-field horizontal label="Message">
        <b-input type="textarea"></b-input>
      </b-field>

      <b-field horizontal>
        <!-- Label left empty for spacing -->
        <p class="control">
          <button class="button is-primary">Submit</button>
        </p>
      </b-field>
    </section>
  </div>
</template>
