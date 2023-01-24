const app = Vue.createApp({
    data(){
        return{
            count: 0,
        }
    },
    methods:{
        increment(){
            this.count++;
        },
        decrement(){
            this.count--;
        },
        reset(){
            this.count = 0;
        }
    }
}).mount("#app");