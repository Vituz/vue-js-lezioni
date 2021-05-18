// Creiamo una pagina con all’interno un titolo di colore rosso. 
// Al click di un bottone il titolo diventerà blu.

const app = new Vue({
    el: '#root',

    data: {
        colorClass: 'red',
    },

    methods: {
        changeColor: function () {

            if (this.colorClass === 'red') {
                this.colorClass = 'blue';
            } else {
                this.colorClass = 'red';
            }

        }
    }

});