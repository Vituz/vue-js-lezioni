const app = new Vue({

    el: '#root',

    data:{

        counter: 0,

        images:[
            'https://www.inuovivespri.it/wp-content/uploads/2020/01/marte-1280x720.jpg',
            'https://hd2.tudocdn.net/974708?w=750&h=450',
            'http://www.castfvg.it/sistsola/marte/nasa/marte_017.jpg',
            'https://left.it/wp-content/uploads/2019/04/Acqua-su-marte.jpg'

        ]

    },

    methods:{
        prev(){
            console.log('Cliccato su prev');

            if(this.counter == 0){
                return this.counter = this.images.length -1;
            }
            console.log(this.counter);
            return this.counter -= 1;
        },

        next(){
            console.log('Cliccato su next');

            if(this.counter == this.images.length -1){
                return this.counter = 0;
            }
            console.log(this.counter);
            return this.counter += 1;
        }
    },

    mounted(){
        alert("Helllo");
        setInterval(this.prev, 3000);
    }
});