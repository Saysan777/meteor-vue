<template>
  <nav class="navbar navbar-dark bg-dark justify-content-space-around">
    <h1 class="navbar-brand" href="#"><b> User Account System</b></h1>

    <div class="dropdown">
      <button
        class="btn btn-secondary"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <i class="fa-solid fa-user"></i>
      </button>

      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a href="" @click.prevent="logOut" v-if="user">Log out</a>
        <a href="" @click.prevent="log" v-else>Log in</a> <br />
        <a href="" @click.prevent="register">Register</a>
        <a href="" v-if="user" @click.prevent="changePass"> Change Password</a>
        <!--when logged in-->
      </div>
    </div>
  </nav>
</template>

<script>
import { Meteor } from "meteor/meteor";
import { Tracker } from "meteor/tracker";

export default {
  data() {
    return {
      user: null,
    };
  },
  components: {},
  created() {
    Tracker.autorun(() => {
      //gets the user instantly after being registered (also autoruns it )
      this.user = Meteor.user();
      console.log(this.user);
    });
  },
  methods: {
    logOut() {
      Meteor.logout();
      this.$router.push("/login");
    },

    register() {
      this.logOut();
      this.$router.push("/register");
    },
    changePass() {
      this.$router.push("/changePass");
    },
    log() {
      this.logOut();
      this.$router.push("/login");
    },
  },
};
</script>

<style>
.nav {
  margin: auto;
}
.dropdown-menu {
  left: -120px;
}
.dropdown a {
  display: inline-block;
  text-decoration: none;
  color: black;
  border-bottom: 2px solid gainsboro;
  margin: 10px;
  width: max-content;
}

.dropdown a:hover {
  color: darkorange;
  font-weight: bold;
  border: none;
}
</style>
