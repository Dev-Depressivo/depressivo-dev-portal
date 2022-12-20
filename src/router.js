import {createRouter, createWebHistory}  from 'vue-router'

import Home from './views/Home.vue'
import Extractor from './views/Extractor.vue'
import Inconstruction from './views/Inconstruction.vue'
import SingleMessage from './components/SingleMessage.vue';
import StepList from './components/StepList.vue';
import FormCopy from './components/FormCopy.vue'

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
        path:'/thanks-for-being-fired',
        component: FormCopy,
        props: {
            msg: 
            `Gostaria de contar contigo para encontrar uma nova oportunidade, de preferência boa e para ontem.

A. Reagindo a este post;
B. Comentando o post e marcando empresas e Recrutadores Tech que conheça,
C. Já trabalhou comigo? Você pode fazer uma recomendação do meu trabalho, isso ajuda muito;
D. No meu perfil, você pode recomendar as minhas habilidades em “skills”;
E. Se sua empresa tem alguma oportunidade, entre em contato comigo;
F. Compartilhe esse post para que sua rede veja – talvez alguma conexão possa me ajudar.

#OpenToWork #recolocaçãoprofissional #layoffmeansfired

<iframe src="https://giphy.com/embed/BY8ORoRpnJDXeBNwxg" width="480" height="400" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/theoffice-BY8ORoRpnJDXeBNwxg">via GIPHY</a></p>
`
        }
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router