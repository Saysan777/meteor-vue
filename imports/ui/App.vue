<template>
  <div>
    <Nav />
    <Header />
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
import Nav from "../../client/components/Navbar/Nav.vue";
import Header from "../../client/components/Header/Header.vue";

export default {
  components: {
    Nav,
    Header,
  },
  methods: {},
};
</script>

<style>
body {
  font-family: sans-serif;
  margin: 0;
  padding: 0;
}
</style>
