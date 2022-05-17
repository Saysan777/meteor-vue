<template>
  <div class="Error">
    <div class="Error-content">
      Sorry , we were unable to locate the page.
      <i class="fa-solid fa-face-pensive"></i>
      <a
        href=""
        @click="
          () => {
            this.$router.push('/login');
          }
        "
        >Go Back</a
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.Error {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 91vh;
}

.Error .Error-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid gainsboro;
  border-radius: 12px;
  height: 300px;
  width: 500px;
  color: crimson;
  font-size: 1.5rem;
}

.Error-content a {
  text-decoration: none;
  background: lightblue;
  margin: 1rem;
  font-size: 1rem;
  padding: 10px;
  border-radius: 12px;
  color: black;
}
.Error-content a:hover {
  background: rgb(0, 167, 0);
}
</style>
