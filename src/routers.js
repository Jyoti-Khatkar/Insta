import {createRouter,createWebHistory} from 'vue-router'
import Profile from './components/Profile.vue'
import ViewPost from './components/ViewPost.vue'


const routes=[
    {
        path: '/',
        component: Profile,
        name: 'User-Profile'
    },
    {
        path: '/post/:postid',
        component: ViewPost,
        name: 'View-Post'
    },

]
const router=createRouter({
    history:createWebHistory(),
    routes

})

export default router