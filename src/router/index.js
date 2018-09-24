import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register.vue'
import Login from '@/components/Login.vue'
import Account from '@/components/Account.vue'
import ConversationList from '@/components/ConversationList.vue'
import Conversation from '@/components/Conversation.vue'
import Swipe from '@/components/Swipe.vue'
import DevTools from '@/components/DevTools.vue'
import Welcome from '@/components/Welcome.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/account',
      name: 'Account',
      component: Account
    },
    {
      path: '/conversations',
      name: 'ConversationList',
      component: ConversationList
    },
    {
      path: '/conversations/:other',
      name: 'Conversation',
      component: Conversation
    },
    {
      path: '/swipe',
      name: 'Swipe',
      component: Swipe
    },
    {
      path: '/dev',
      name: 'DevTools',
      component: DevTools
    }
  ]
})
