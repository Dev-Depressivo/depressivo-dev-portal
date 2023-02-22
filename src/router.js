import {createRouter, createWebHistory}  from 'vue-router'

import Home from './views/Home.vue'
import Extractor from './views/Extractor.vue'
import Inconstruction from './views/Inconstruction.vue'
import SingleMessage from './components/SingleMessage.vue';
import StepList from './components/StepList.vue';
import ChatGWT from './components/ChatGWT.vue'

const routes = [
    {
        path:'/',
        component: Home
    }
    ,
    {
        path:'/extractor',
        component: Extractor
    }
    ,
    {
        path:'/free-money',
        component: StepList,
        props: {
            steps: [
                "Trabalhe",
                "Gaste menos do que você ganha",
                "Guarde o dinheiro que sobrou",
                "Espere por 45 anos",
                "Utilize o dinheiro guardado por 45 anos"
            ]
        }
    }
    ,
    {
        path:'/how-improve-your-english',
        component: SingleMessage,
        props: {
            msg: "Study English!"
        }
    }
    ,
    {
        path:'/chat-gwt',
        component: ChatGWT
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router