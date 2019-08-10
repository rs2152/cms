<template >
  <div class="back">
    <div class="container">
      <div class="columns">
        <div class="column is-4"></div>
        <div class="column is-4">
          <div class="card">
            <template v-if="!forgot">
              <div class="card-content mt">
                <b-field
                  label="Username"
                  :type="username_error?'is-danger':''"
                  :message="username_error?'please enter username to continue':''"
                >
                  <b-input
                    type="text"
                    placeholder="Enter Username"
                    v-model="username"
                    maxlength="30"
                  ></b-input>
                </b-field>
                <b-field label="Password" type message>
                  <b-input
                    type="password"
                    placeholder="Enter Password"
                    v-model="password"
                    maxlength="30"
                  ></b-input>
                </b-field>
                <div class="field is-grouped is-grouped-right">
                  <p class="control">
                    <a class="button is-primary" @click="applogin">Login</a>
                  </p>
                  <p class="control">
                    <a class="button is-light" @click="forgot_password">Forgot Password</a>
                  </p>
                </div>
              </div>
            </template>
            <template v-else>
              <div class="card-content mt2">
                <b-field label="Username" type message>
                  <b-input
                    type="text"
                    placeholder="Enter Username"
                    v-model="username"
                    maxlength="30"
                  ></b-input>
                </b-field>

                <b-field label="New Password" type message>
                  <b-input
                    type="password"
                    placeholder="Enter new password"
                    v-model="newPassword"
                    maxlength="30"
                  ></b-input>
                </b-field>
                <b-field
                  label="Confirm Password"
                  :type="error?'is-danger':''"
                  :message="error?'passwords don\'t match':''"
                >
                  <b-input
                    @input="confirm_password"
                    type="password"
                    placeholder="Re-enter new password"
                    v-model="confirmPassword"
                    maxlength="30"
                  ></b-input>
                </b-field>
                <b-field label="Code" type message>
                  <b-input
                    type="number"
                    placeholder="Enter code sent by email"
                    v-model.number="code"
                    maxlength="30"
                  ></b-input>
                </b-field>
                <div class="field is-grouped is-grouped-right">
                  <p class="control">
                    <a class="button is-primary" @click="reset">Reset Password</a>
                  </p>
                  <p class="control">
                    <a class="button is-primary" @click="forgot=false">Go to Login</a>
                  </p>
                </div>
              </div>
            </template>
          </div>
        </div>
        <div class="column is-4"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "login",
  data() {
    return {
      forgot: false,
      username: "",
      password: "",
      userToken: "",
      code: null,
      newPassword: "",
      confirmPassword: "",
      error: false,
      username_error: false
    };
  },
  methods: {
    confirm_password() {
      if (this.newPassword != this.confirmPassword) this.error = true;
      else this.error = false;
    },
    applogin() {
      let fd = new FormData();
      fd.append("username", this.username);
      fd.append("password", this.password);
      this.$axios
        .post(`${this.$store.state.baseApiUrl}`+"/login", fd)
        .then(response => {
          if (response.data.status == 200) {
            this.$store.commit('setUserInfo',response.data.data)
            this.$store.commit('setLoginStatus',true)
            // localStorage.setItem("user", JSON.stringify(this.user));
            this.$router.push("dashboard");
            this.$toast.open({
              duration: 3000,
              message: "Login Successfully",
              type: "is-success"
            });
          } else {
            this.$toast.open({
              duration: 5000,
              message: `Please Enter Correct Username and Password`,
              type: "is-danger"
            });
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    forgot_password() {
      if (this.username != "") {
        this.forgot = true;
        let fd = new FormData();
        fd.append("userId", this.username);
        this.$axios
          .post(`${this.$store.state.baseApiUrl}`+"/cms/admin/forgotPassword", fd)
          .then(response => {
            this.userToken = response.data.data;
            this.$toast.open({
              message: "Temporary Password has been sent to your email !",
              duration: 7000,
              type: "is-primary"
            });
          });
      } else {
        this.username_error = true;
      }
    },
    reset() {
      this.$axios.defaults.headers.common["X-Auth-Token"] = `${this.userToken}`;
      this.$axios
        .get(
          `${this.$store.state.baseApiUrl}`+"/cms/admin/changePassword?" +
            "code=" +
            `${this.code}` +
            "&password=" +
            `${this.newPassword}`
        )
        .then(response => {
          this.$toast.open({
            message:
              "Password have been reset please go to login page to continue",
            duration: 5000,
            type: "is-primary"
          });
        });
    }
  }
};
</script>

<style>
.mt {
  margin-top: 350px;
  margin-bottom: 350px;
}
.mt2 {
  margin-top: 222px;
  margin-bottom: 222px;
}
.back {
  background-image: url("~assets/background.jpg");
  background-size: cover;
}
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .mt {
    margin-top: 200px;
    margin-bottom: 200px;
  }
  .mt2 {
    margin-top: 150px;
    margin-bottom: 150px;
  }
}
</style>
