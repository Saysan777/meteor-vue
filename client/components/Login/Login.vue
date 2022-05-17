<template>
  <div class="Login">
    <form class="Login-content" @submit.prevent="Login">
      <h1>Log in</h1>

      <label for="">Username/Email</label><br />
      <input type="text" id="" v-model="email" required /><br /><br />

      <label for="">Password</label><br />
      <input type="password" v-model="password" id="" required />

      <button class="btn-login">Log in</button><br />

      <a
        href=""
        @click="
          () => {
            this.$router.push('/register');
          }
        "
        >Sign up / Register?</a
      >
    </form>
  </div>
</template>

<script>
import { Meteor } from "meteor/meteor";

export default {
  name: "Login",

  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },

  methods: {
    Login() {
      Meteor.loginWithPassword(this.email, this.password, () => {
        if (Meteor.user()) {
          this.$router.push("/user");
        } else {
          alert("Incorrect username or password ");
        }
      });
    },
  },
};
</script>

<style>
.Login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 90.5vh;
  background: rgba(0, 0, 23, 20);
}

.Login .Login-content {
  color: black;
  width: 400px;
  height: 400px;
  border: 2px solid gray;
  border-radius: 12px;
  padding: 10px;
  background: white;
}

.Login-content h1 {
  margin-left: 3.4rem;
}

.Login-content input {
  padding: 10px;
  width: 240px;
  margin-left: 3.6rem;
  border-radius: 12px;
  border: 2px solid gainsboro;
  outline: none;
}

.Login-content input:focus {
  border: 2px solid lightblue;
}

.Login-content label {
  margin: 0.6rem 0 0.4rem 3.6rem;
}

.Login-content a {
  position: absolute;
  text-decoration: none;
  font-weight: bold;
  color: black;
  margin: 1.7rem 0 0 7rem;
}

.Login-content a:hover {
  color: rgb(0, 167, 0);
  font-weight: bold;
}

.Login-content .btn-login {
  padding: 10px 10px;
  border-radius: 12px;
  border: none;
  margin: 1.7rem 0 0 3.6rem;
  width: 250px;
}

.Login-content .btn-login:hover {
  background: rgb(0, 167, 0);
}
</style>
