const app = Vue.createApp({

    //  template: '<h2> Welcome to my application</h2>'

    data() {
        return {
            showBooks: true,
            title: 'This is title',
            author: 'Ganesan',
            age: 25
        }

    },
    methods: {

        toggleShowBooks() {
            this.showBooks = !this.showBooks
            
        },
        changeTitle() {
            this.title = 'Changed from changeTiel()'
        }
    }
})
app.mount('#app')
