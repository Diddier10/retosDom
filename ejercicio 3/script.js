const input = document.getElementById('text-input');
const preview = document.getElementById('text-preview');

input.addEventListener('input', function(){
    preview.textContent = input.value;

});

console.log(input);
console.log(preview);