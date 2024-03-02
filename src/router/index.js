import { createRouter, createWebHashHistory } from "vue-router";
import Registro from './../views/Registro.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'registro',
      component: Registro
    }
  ]
})

export default router
