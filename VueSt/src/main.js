// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    tasks: [
      { id: 1, name: "Learn Vue" },
      { id: 2, name: "Learn Npm" },
      { id: 3, name: "Learn Sass" }
    ],
    inputTask: ""
  },
  methods: {
    addTask() {
      if (this.inputTask.trim() != "") {
        this.tasks.push(
          {
            name: this.inputTask,
            id: this.tasks.length + 1
          }
        )
        this.inputTask = "";
      }
    },
    removeTask(id) {
      for (var i = this.tasks.length; i--;) {
        if (this.tasks[i].id === id) {
          this.tasks.splice(i, 1);
        }
      }
    }
  }
})
