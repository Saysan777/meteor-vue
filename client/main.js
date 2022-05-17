import Vue from 'vue'
import '../imports/ui/plugins'
import App from '../imports/ui/App.vue'
import router from './router.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'

Meteor.startup(() => {
  new Vue({
    router,
    el: '#app',
    ...App,
  })
})
