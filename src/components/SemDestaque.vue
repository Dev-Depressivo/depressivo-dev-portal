<script>
   export default {
    data(){
        return {
            listSemDestaque:[
                {
                    title: "Você já pensou viver de renda?",
                    description: "5 passos para viver de renda",
                    complement: "#liberdadefinanceira",
                    path: "/free-money"
                },
                {
                    title: "Como aprender inglês em 1 passo",
                    description: "Ja pensou entender tudo que seus ídolos internacionais falam?",
                    complement: "#formulamagica",
                    path: "/how-improve-your-english"
                },
                {
                    path: "/chat-gwt",
                    title: "ChatGWT (Chat Generative Without-trained Transformer)",
                    description: "Responda suas dúvidas (Ou não)",
                    complement: "0_0"
                }
            ]
        }
    }
   }
</script>

<template>
    <h2>[SERVICES]</h2>
    <div class="list-group">
        <div v-for="semDestaque in listSemDestaque">
            <a v-bind:href="semDestaque.path" class="list-group-item list-group-item-action" aria-current="true">
                <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">{{semDestaque.title}}</h5>
                <small>{{semDestaque.date}}</small>
                </div>
                <p class="mb-1">{{semDestaque.description}}</p>
                <small>{{semDestaque.complement}}</small>
            </a>
        </div>
    </div>
</template>