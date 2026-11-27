const select = document.getElementById('color-select');
const card = document.getElementById('color-card');

select.addEventListener('change', function(){
    const selectedColor = select.value;

    card.style.backgroundColor = selectedColor;
});