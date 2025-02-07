import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import BookView from '../views/BookView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/book/:id', component: BookView, props: true }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
