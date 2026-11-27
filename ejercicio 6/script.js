const weightInput = document.getElementById('weight-input');
const heightInput = document.getElementById('height-input');
const button = document.getElementById('calculate-button');
const result = document.getElementById('result-output');

button.addEventListener('click', function(){
    const weight = Number(weightInput.value)
    const height = Number(heightInput.value)

    if(weightInput.value.trim()=== ''){
        result.textContent = 'Por favor, ingresa tu estatura. ';
        result.className = 'error';
        heightInput.focus();
        return;
    }
    if(heightInput.value.trim() === ''){
        result.textContent = 'Por favor, ingresa tu peso. ';
        result.className = 'error';
        heightInput.focus();
        return;
    }
    if(!Number.isFinite(weight)|| weight <=0){
        result.textContent = 'Ingrese un peso valido mayor que cero. ';
        result.className = 'error';
        weightInput.focus();
        return;
    }
    if(!Number.isFinite(height)|| height <=0){
        result.textContent = 'Ingrese una estatura valida mayor que cero. ';
        result.className = 'error';
        heightInput.focus();
        return;
    }
    const imc = weight / (height*height);

    result.textContent = `Tu IMC es ${imc.toFixed(2)}`;
    result.className = 'success';
});