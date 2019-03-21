const app = new Vue ({
    el: '#app',
    data: {
        title: 'Get this shit done!',
        // v-model is bound up with newTodo on our data
        newTodo: '',
        todos: []
    },
    methods: {
        addTodo(){
            // this is how you log the information that the user inputs, this is bound to newTodo
            this.todos.push({
                title: this.newTodo,
                done: false
            });
            this.newTodo="";
        },
        removeTodo(todo){
            const todoIndex = this.todos.indexOf(todo);
            this.todos.splice(todoIndex, 1);
        },
        allDone(){
            this.todos.forEach(todo => {
                todo.done = true;
            });
        }
    }
});