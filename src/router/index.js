import { createMemoryHistory, createRouter } from 'vue-router'

import ProductPage from '../components/products-page.vue';
import DietPage from '../components/diet-page.vue';
import RationPage from '../components/ration-page.vue';
import StatisticPage from '../components/statistic-page.vue';
import ActivityPage from '../components/activity-page.vue';
import ProfilePage from '../components/profile-page.vue';
import Log_in from '../components/log-in.vue';
import Signup from '../components/signup.vue';

const routes = [
    { path: '/', component: ProductPage },
    { path: '/diet', component: DietPage },
    { path: '/ration', component: RationPage },
    { path: '/statistic', component: StatisticPage },
    { path: '/activity', component: ActivityPage },
    { path: '/profile', component: ProfilePage },
    { path: '/log-in', component: Log_in },
    { path: '/signup', component: Signup },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router