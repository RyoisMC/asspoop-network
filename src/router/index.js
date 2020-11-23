import Vue from 'vue';
import VueRouter from 'vue-router';
import playerBackground from '../views/playerBackground.vue';
import survivalDynmap from '../views/survivalDynmap.vue';
import creativeDynmap from '../views/creativeDynmap.vue';
import mc01netdata from '../views/mc01netdata.vue';
import survivalGrafana from '../views/survivalGrafana.vue';
import creativeGrafana from '../views/creativeGrafana.vue';
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: playerBackground,
        meta: {
            title: 'Home',
            visible: true
        },
    },
    {
        path: '/dynmap/survival',
        name: 'Survival Dynmap',
        component: survivalDynmap,
        meta: {
            title: 'Survival Dynmap',
            visible: true
        },
    },
    {
        path: '/dynmap/creative',
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
      path: '/netdata/mc01',
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
    // This goes through the matched routes from last to first, finding the closest route with a title.
    // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
    const nearestWithTitle = to.matched
      .slice()
      .reverse()
      .find((r) => r.meta && r.meta.title);
  
    // Find the nearest route element with meta tags.
    const nearestWithMeta = to.matched
      .slice()
      .reverse()
      .find((r) => r.meta && r.meta.metaTags);
  
    // If a route with a title was found, set the document (page) title to that value.
    if (nearestWithTitle) document.title = `${nearestWithTitle.meta.title} | Asspoop Network`;
  
    // Remove any stale meta tags from the document using the key attribute we set below.
    Array.from(
      document.querySelectorAll('[data-vue-router-controlled]'),
    ).map((el) => el.parentNode.removeChild(el));
  
    // Skip rendering meta tags if there are none.
    if (!nearestWithMeta) return next();
  
    // Turn the meta tag definitions into actual elements in the head.
    nearestWithMeta.meta.metaTags
      .map((tagDef) => {
        const tag = document.createElement('meta');
  
        Object.keys(tagDef).forEach((key) => {
          tag.setAttribute(key, tagDef[key]);
        });
  
        // We use this to track which meta tags we create, so we don't interfere with other ones.
        tag.setAttribute('data-vue-router-controlled', '');
  
        return tag;
      })
      // Add the meta tags to the document head.
      .forEach((tag) => document.head.appendChild(tag));
  
    next();
  });
  
  export default router;