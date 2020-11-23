import Vue from 'vue';
import VueRouter from 'vue-router';
import homepage from '../views/homepage.vue';
import survivalDynmap from '../views/dynmap/survival.vue';
import creativeDynmap from '../views/dynmap/creative.vue';
import mc01netdata from '../views/netdata/mc01.vue';
import survivalGrafana from '../views/grafana/survival.vue';
import creativeGrafana from '../views/grafana/creative.vue';
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
        path: '/dynmap/server/creative',
        name: 'Creative Dynmap',
        component: creativeDynmap,
        meta: {
            title: 'Creative Dynmap',
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
      path: '/grafana/server/creative',
      name: 'Creative Server Stats',
      component: creativeGrafana,
      meta: {
          title: 'Creative Server Stats',
          visible: true
      },
    },
    {
      path: '/netdata/server/mc01',
      name: 'MC01 Server Stats',
      component: mc01netdata,
      meta: {
          title: 'MC01 Server Stats',
          visible: true
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