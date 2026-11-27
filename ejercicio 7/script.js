const passwordInput = document.getElementById('password-input');
const passwordMessage = document.getElementById("password-message");

passwordInput.addEventListener('input', function(){
    const password = passwordInput.value ;
    const length = password.length;

    if (length === 0){
        passwordMessage.textContent = 'Escribe una contraseña para verificar'
        passwordMessage.className = '';
    }
    else if(length < 6){
        passwordMessage.textContent = 'Constraseña muy corta'
        passwordMessage.className = 'short';

    }
    else if(length <= 9){
        passwordMessage.textContent = 'Constraseña aceptable'
        passwordMessage.className = 'acceptable';
    }
    else{
        passwordMessage.textContent = 'Constraseña fuerte'
        passwordMessage.className = 'strong';
    }
});