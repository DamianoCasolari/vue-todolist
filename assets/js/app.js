

const { createApp } = Vue

createApp({
    data() {
        return {
            error: null,
            newTask: {
                text: "",
                done: false,
            },
            tasks : [
                { text: "Pulire la cucina", done: false },
                { text: "Fare la spesa", done: true },
                { text: "Stirare la biancheria", done: false },
                { text: "Preparare la cena", done: true },
                { text: "Passeggiare il cane", done: false },
                { text: "Scrivere una lettera", done: true },
              ],
            tasksComplete : [],
            tasksUncomplete : [],
            
        }
    },
    methods: {
        addTask() {
            // if (!this.newTask.length < 5) {
            if (this.newTask.text.length > 5) {
                this.tasks.unshift(this.newTask)
                this.tasksUncomplete.push(this.newTask)
                this.newTask= {
                    text: "",
                    done: false,
                },
                this.error = ""
            } else {
                this.error = "word too short"
            }
        },
        completeTask(index) {
            this.tasksComplete.push(this.tasks[index])
            this.tasksUncomplete.splice(index, 1)
            this.tasks.splice(index, 1)
        
        }
    },
    created() {
        this.tasksUncomplete = this.tasks.filter((object) => object.done === false);
        this.tasksComplete = this.tasks.filter((object) => object.done === true);
        
      },
}).mount('#app')


