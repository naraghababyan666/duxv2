import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from "@/views/Home";
import Contact from "@/views/Contact";
import Careers from "@/views/Careers";
import Operation from "@/views/Operation";
import Ventures from "@/views/Ventures";
Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    component: Home
  },
  {
    path: '/',
    name: 'default',
    component: Home
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/careers',
    name: 'careers',
    component: Careers
  },
  {
    path: '/ventures',
    name: 'ventures',
    component: Ventures
  },
  {
    path: '/operation',
    name: 'operation',
    component: Operation
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
