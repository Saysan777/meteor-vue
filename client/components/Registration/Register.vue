<template>
  <div class="Register">
    <form class="Register-content" @submit.prevent="saveMe">
      <h3>Register</h3>
      <label for="">Username</label>
      <input type="text" v-model="Username" value="Username" id="" required />
      <label for="">Email</label>
      <input type="text" v-model="Email" value="Email" id="" required />

      <label for="">Password</label>
      <input type="password" v-model="Password" id="" required />

      <button class="register-btn">Sign up</button>
    </form>
  </div>
</template>

<script>
import { Accounts } from "meteor/accounts-base";
export default {
  data() {
    return {
      Username: "",
      Email: "",
      Password: "",
    };
  },

  methods: {
    saveMe() {
      console.log("submitted");
      const data = {
        username: this.Username,
        email: this.Email,
        password: this.Password,
      };
      this.Username = "";
      this.Email = "";
      this.Password = "";
      Accounts.createUser(data); //creates the user and insert the data into db(locally) and saves it.
      this.$router.push("/user"); //redirect to next page
    },
  },
};
</script>

<style>
.Register {
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 90.5vh;
  background: rgba(0, 0, 23, 20);
}

.Register .Register-content {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  color: black;
  width: 400px;
  height: 480px;
  border: 2px solid gray;
  border-radius: 12px;
  padding: 10px;
  background: white;
  margin-top: 6rem;
}
.Register .Register-content h3 {
  margin: 0 17rem 0 0;
}

.Register-content input {
  padding: 10px;
  width: 240px;
  margin-top: 5px;
  border-radius: 12px;
  border: 2px solid gainsboro;
  outline: none;
  margin-left: 4rem;
}
.Register-content input:hover {
  border: 2px solid lightblue;
}
.Register .Register-content label {
  margin: 1.8rem 0 0 4rem;
}

.Register-content .register-btn {
  padding: 12px 10px;
  border-radius: 12px;
  border: none;
  width: 250px;
  margin: 2.7rem 0 0 4rem;
}

.Register-content .register-btn:hover {
  background: rgb(0, 167, 0);
}
</style>
