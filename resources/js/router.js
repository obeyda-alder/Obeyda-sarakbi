import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);


// pages Project
import Home from './Sections/Pages/Home';
import About from './Sections/Pages/About';
import footer from './Sections/Pages/Footer';
import Portfolio from './Sections/Pages/Portfolio';
import sidebar from './Sections/Pages/sidebar';
import contact from './Sections/forms/contact';
import NotFound from './components/NotFound';


const routes = [

    //router project ...
    {
        path:'/',
        component: Home,
        name: 'Home'
    },
    {
        path:'/About',
        component: About,
        name: 'About'
    },
    {
        path:'/footer',
        component: footer,
        name: 'footer'
    },
    {
        path:'/Portfolio',
        component: Portfolio,
        name: 'Portfolio'
    },
    {
        path:'/sidebar',
        component: sidebar,
        name: 'sidebar'
    },
    {
        path:'/contact',
        component: contact,
        name: 'contact'
    },
    {
        path:"/:pathMatch(.*)*",
        component: NotFound,
        name: 'NotFound'
    },

]

export default new Router({
    mode: 'history',
    routes
});
