import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '../pages/home'
import Audio from '../pages/audio'
import Broadcast from '../pages/broadcast'
import Group from '../pages/group'
import Mine from '../pages/mine'
import Movies from '../audioPages/dianying'
import Read from '../audioPages/read'
import Tv from '../audioPages/tv'
import City from '../audioPages/Tongcheng'
import Music from '../audioPages/music'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/audio',
      name: 'Audio',
      component: Audio,
      children:[
        {
          path:'movies',
          name:'Movies',
          component:Movies
        },
        {
          path:'read',
          name:'Read',
          component:Read
        },
        {
          path:'tv',
          name:'Tv',
          component:Tv
        },
        {
          path:'city',
          name:'City',
          component:City
        },
        {
          path:'music',
          name:'Music',
          component:Music
        },
        {
          path:'/',
          redirect:'movies'
        }
      ]
    },
    {
      path: '/broadcast',
      name: 'Broadcast',
      component: Broadcast
    },
    {
      path: '/group',
      name: 'Group',
      component: Group
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    }
  ]
})
