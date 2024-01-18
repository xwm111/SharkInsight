import { createRouter, createWebHashHistory } from 'vue-router';
import Records from '../views/Records.vue';
import Analysis from '../views/Analysis.vue';
import Favorites from '../views/Favorites.vue';
import Settings from '../views/Settings.vue';
import Landing from '../Landing.vue';

const routes = [
  { path: '/', component:Landing },
  { path: '/records', component: Records },
  { path: '/analysis', component: Analysis },
  { path: '/favorites', component: Favorites },
  { path: '/settings', component: Settings },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
