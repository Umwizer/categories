const todolist=[
    {workdays: 'Go toWork',
    saturday:'washing clothes and resting',
    sunday:'going to church and do same projects',
    },
    {
        workdays:'Go to school',
        saturday:'sport and washing clothes',
        sunday:'going to church and attend movement'
    }
];
const addtasks=(workdays,saturday,sunday) =>{
    console.log(todolist.length);
    todolist.push(workdays,saturday,sunday);
    console.log(todolist)

};
addtasks(
    {workdays:'go to school',
    saturday:'attend weeding',
    sunday:'go to the gym'
} );