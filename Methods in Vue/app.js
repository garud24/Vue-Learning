const app = Vue.createApp({
    data: function(){
        return {
            courseGoal: 'Finish the course and learn Vue',
            vueLink: 'https://vuejs.org/guide/quick-start',
        };
    },
    methods: {
        outputGoal(){
            const randomNumber = Math.random();

            if(randomNumber < 0.5){
                return 'Learn Vue';
            } else{
                return 'Master Vue!!';
            }
        }
    }
});

app.mount('#user-goal');

