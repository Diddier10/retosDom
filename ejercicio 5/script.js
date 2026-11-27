const input = document.getElementById('task-input');
const result = document.getElementById('task-result');

input.addEventListener('keydown', function(event){
    if (event.key === 'Enter'){
        const task = input.value.trim();
        if(task!==''){
            result.textContent = `Nueva tarea: ${task}`;
            input.value = '';
        }
    }
});






