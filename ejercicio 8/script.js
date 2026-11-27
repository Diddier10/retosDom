const productInput = document.getElementById('product-input');
const addButton = document.getElementById('add-button');
const productList = document.getElementById('product-list');
const message = document.getElementById('message');

addButton.addEventListener('click', function(){
    const product = productInput.value.trim();
    if(product === ''){
        message.textContent = 'Por favor, añade un producto';
        message.className = 'error';
        productInput.focus ();
        return;
    }
    const newProduct = document.createElement ('li');
    newProduct.textContent = product;
    productList.appendChild(newProduct);
    message.textContent = 'Producto agregado correctamente';
    message.className = 'success';

    productInput.value = '';
    productInput.focus();
});