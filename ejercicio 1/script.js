const input = document.getElementById('name-input');
const button = document.getElementById('greet-button');
const output = document.getElementById('greeting-output');

button.addEventListener('click', function(){
    const name = input.value.trim();
    
    if(name === ''){
        output.textContent = 'Primero escribe tu nombre y luego saludar. ';
        output.dataset.state = 'error';
        input.setAttribute('aria-invalid', 'true');
        input.focus();
    }else{
        output.textContent = `Hola, ${name}. Te damos la bienvenida.`;
        output.dataset.state = 'success';
        input.removeAttribute('aria-invalid');
    }

});