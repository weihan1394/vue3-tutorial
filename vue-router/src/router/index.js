import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
// import AboutView from '../views/AboutView.vue';
import JobsView from '../views/jobs/JobsView.vue';
import JobsDetailsView from '../views/jobs/JobsDetailsView.vue';
import NotFoundView from '../views/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView'),
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: JobsView,
  },
  {
    path: '/jobs/:id',
    name: 'jobs-details',
    component: JobsDetailsView,
    props: true,
  },
  // redirect
  {
    path: '/all-jobs',
    redirect: '/jobs',
  },
  // capture 404
  {
    path: '/:catchAll(.*)',
    name: 'not-found',
    component: NotFoundView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
