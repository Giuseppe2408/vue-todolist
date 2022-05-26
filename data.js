const li = document.querySelectorAll('li');
// istanza di vue
const myApp = new Vue({
    el: '#app',
    data: {
        newTodo : "",
        todos : [
            {
                text : 'fare i compiti',
                done :  true
            },
            {
                text : 'fare il bucato',
                done :  false
            },
            {
                text : 'fare lezione',
                done :  false
            },
            {
                text : 'uscire il cane',
                done :  true
            },
        ]
    },
    methods : {
        // far decorare il testo
        // decorationText(){
        //     if (this.done === false) {
        //         li.classList.add('');
        //         console.log(li);
        //     }
        // },

        arrayPush(){
            if (this.newTodo !== "") {
                this.text.push(this.newTodo)
                this.newTodo = "";
            }        
        },
        // togliere un todo dalla lista
        arrayRemove(index){
            this.todos.splice(index,1);
            console.log(index);
        }
    }
});