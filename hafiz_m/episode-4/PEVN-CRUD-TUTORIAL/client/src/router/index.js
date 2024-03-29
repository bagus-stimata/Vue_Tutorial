import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import EmployeeDetail from '../views/EmployeeDetail.vue'
// import EmployeeRegistration from '../views/EmployeeRegistration.vue'
import EmployeeEdit from '../views/EmployeeEdit.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/register-new-employee',
        name: 'Registration',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/EmployeeRegistration.vue')
    },
    {
        path: '/details/:id/:name',
        component: EmployeeDetail
    },
    {
        path: '/edit/:id/:name',
        component: EmployeeEdit
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router