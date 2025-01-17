import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import './style.css'
import App from './App.vue'

const pinia = createPinia()

// pinia.use((ctx) => {
//   ctx.store.$subscribe((r) => {
//     console.log(r)
//   })
//   ctx.store.$onAction(({ after, name, args }) => {
//     console.log('2', name, args)
//     after((result) => {
//       console.log('result', result)
//     })
//   })
// })
const app = createApp(App)

const routes = [
  { path: '/', component: Home, name: 'home', alias: '/index' },
  {
    path: '/about',
    component: About,
    children: [
      { path: '/about/:id', component: About },
    ],
  },
  // { path: '/:articleName', component: About },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

app.use(router)
app.use(pinia)
app.mount('#app')

// const a = app._instance
