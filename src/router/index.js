import Vue from 'vue';
import VueRouter from 'vue-router';
import homepage from '../views/homepage.vue';
import survivalDynmap from '../views/dynmap/survival.vue';
import mc01Grafana from '../views/grafana/mc01.vue';
import survivalGrafana from '../views/grafana/survival.vue';
import pageNotFound from '../views/pageNotFound.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: homepage,
        meta: {
            title: 'Home',
            visible: true
        },
    },
    {
        path: '/dynmap/server/survival',
        name: 'Survival Dynmap',
        component: survivalDynmap,
        meta: {
            title: 'Survival Dynmap',
            visible: true
        },
    },
    {
      path: '/grafana/server/survival',
      name: 'Survival Server Stats',
      component: survivalGrafana,
      meta: {
          title: 'Survival Server Stats',
          visible: true
      },
    },
    {
      path: '/grafana/server/mc01',
      name: 'MC01 Server Stats',
      component: mc01Grafana,
      meta: {
          title: 'MC01 Server Stats',
          visible: true
      },
    },
    {
      path: '*',
      name: '404 Not Found',
      component: pageNotFound,
      meta: {
          title: '404 Not Found',
          visible: false
      },
    }, 
];

const router = new VueRouter({
    mode: 'history',
    routes,
});
router.beforeEach((to, from, next) => {
    const nearestWithTitle = to.matched
      .slice()
      .reverse()
      .find((r) => r.meta && r.meta.title);
  
    const nearestWithMeta = to.matched
      .slice()
      .reverse()
      .find((r) => r.meta && r.meta.metaTags);
  
    if (nearestWithTitle) document.title = `${nearestWithTitle.meta.title} | Asspoop Network`;
  
    Array.from(
      document.querySelectorAll('[data-vue-router-controlled]'),
    ).map((el) => el.parentNode.removeChild(el));
  
    if (!nearestWithMeta) return next();
  
    nearestWithMeta.meta.metaTags
      .map((tagDef) => {
        const tag = document.createElement('meta');
  
        Object.keys(tagDef).forEach((key) => {
          tag.setAttribute(key, tagDef[key]);
        });
  
        tag.setAttribute('data-vue-router-controlled', '');
  
        return tag;
      })
      .forEach((tag) => document.head.appendChild(tag));
  
    next();
  });
  
export default router;