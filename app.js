const app = Vue.createApp({
    // data, functions that can react to events
    // template: '<h2>I am the template.</h2>'

    data() {
        return {
            url: 'https://www.google.com',
            showBooks: true,
            books: [
                {title: 'Name of the Wind', author: 'Patrick Rothfuss', img: '/assets/1.jpeg', isFav: true},
                {title: 'The Way of Kings', author: 'Brandon Sanderson', img: '/assets/2.jpeg', isFav: false},
                {title: 'The Final Empire', author: 'Brandon Sanderson', img: '/assets/3.jpeg', isFav: true},
            ],
            x: 0,
            y: 0
        }
    },

    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav )
        }
    },

    methods: {
        changeTitle(new_title) {
            this.title = new_title
        },

        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },

        toggleFavorite(book){
            console.log('TOGGLE FAVORITE', book)
            book.isFav = !book.isFav

            console.log('Data:', this.books)
        },

        handleEvent(e){
            console.log(e)
            console.log(e.type)
        },

        handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
})

app.mount('#app')