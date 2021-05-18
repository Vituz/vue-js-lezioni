// Predisponiamo due input, in cui inseriremo Nome e Cognome.
// In un paragrafo utilizzare Nome e Cognome per salutare l’utente

const app = new Vue({

    el: '#root',
    data: {
        nome: '',
        cognome: '',
        classtitle: 'lead'
    },

    methods: {
        // ES5
        saluta: function () {
            return 'Hi!'
        },

        // ES6
        greetings() {
            alert(this.nome);
        }
    }
});

// V-ON (scatenare eventi)

// v-on:click (versione estesa)
// @click (versione abbreviata)