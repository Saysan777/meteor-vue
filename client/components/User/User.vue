<template>
  <div class="user">
    <div class="user-content">
      <h1>Welcome, we're glad you're here</h1>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
body {
  background-color: lightblue;
}
.user {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 91vh;
  background: rgba(0, 0, 0, 0.5);
}

.user .user-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid gainsboro;
  border-radius: 12px;
  height: 300px;
  width: 600px;
  background: white;
  font-size: 1rem;
}
.user-content h1 {
  margin-top: 7rem;
}
</style>
