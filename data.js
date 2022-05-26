
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
    

        arrayPush(){
            const NewTask = {
                text : this.newTodo,
                done : false,
            };
            if (this.newTodo !== "") {
                this.todos.push(NewTask);
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