const pizzaOrder = () => {
    // get the name input from the user
    let customerName = document.querySelector('#customerName').value;

    // error message will be shown here
    let errorMessage = document.querySelector('#errorMessage');

    // thank you message will be shown here
    let message = document.querySelector('#message');
    let text;

    if (customerName === '') {
        text = `Please, fill in your first and last name!`;
    } else {
        text = `Thank you for your order ${customerName}! Enjoy your meal!`;
    }
    message.textContent = text;
    message.style.display = 'block';
}

const getSizePrice = () => {
    let value = parseFloat(document.querySelector('input[type="radio"]:checked').value);
    showSizePrice.textContent = value;
    totalPrice();
}

const getToppingsPrice = () => {
    let checked = parseInt(document.querySelectorAll('input[type="checkbox"]:checked').length);
    let price = 0;
    if (checked > 4) {
        price = 0.5 * (checked - 4);
    }
    showToppingsPrice.textContent = price;
    totalPrice();
}

const getDeliveryPrice = () => {
    let value = parseInt(document.querySelector('#deliveryOptions').value);
    showDeliveryPrice.textContent = value;
    totalPrice();
}

const totalPrice = () => {
    const size = parseFloat(document.querySelector('#showSizePrice').innerHTML);
    const toppings = parseFloat(document.querySelector('#showToppingsPrice').innerHTML);
    const delivery = parseFloat(document.querySelector('#showDeliveryPrice').innerHTML);
    const total = size + toppings + delivery;
    document.querySelector('#totalPrice').textContent = total.toFixed(2);
}
