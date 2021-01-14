import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../pages/Home.vue'
import VanillaForms from '../pages/0-VanillaForms'
import VueInputs from '../pages/1-VueInputs'
import UiInputPage from '../pages/2-UiInput/Index.vue'
import UiFormFieldPage from '../pages/3-UiFormField/Index.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/vanilla-forms',
    name: 'Vanilla',
    component: VanillaForms
  },
  {
    path: '/vue-inputs',
    name: 'VueInputs',
    component: VueInputs
  },
  {
    path: '/ui',
    name: 'UiInputPage',
    component: UiInputPage
  },
  {
    path: '/ui-form-field',
    name: 'UiFormField',
    component: UiFormFieldPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
