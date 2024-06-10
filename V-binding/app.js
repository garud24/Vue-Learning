const app = Vue.createApp({
    data: function(){
        return {
            courseGoal: 'Finish the course and learn Vue',
            vueLink: 'https://vuejs.org/guide/quick-start',
        };
    }
});

app.mount('#user-goal');

