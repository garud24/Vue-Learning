const app = Vue.createApp({
    data() {
        return {
            message: "Hello from Vue :)",
        }
    },
    methods: {
        clickMe() {
            console.log("The button is clicked");
            this.message = " The message has been updated :)"
        },
    },
});

app.mount('#app')