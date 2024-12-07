import cartApi from "../api/cart.api";
import navbar from "../components/navbar";
document.getElementById("navbar").innerHTML = navbar();

const userId = '12345'; // Replace with actual user ID
document.addEventListener('DOMContentLoaded', () => {
loadCart();
document.getElementById('add-to-cart').addEventListener('click', addItemToCart);
document.getElementById('clear-cart').addEventListener('click', clearCart);
});

const loadCart = async () => {
    try {
        const cart = await cartApi.get(userId);
        displayCartItems(cart.items);
        displayCartSummary(cart.summary);
    } catch (error) {
        console.error(error);
        alert(error.message);
    }
};

const displayCartItems = (items) => {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Clear existing items

    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `Product ID: ${item.productId}, Quantity: ${item.quantity}`;

        // Add update and remove buttons
        const updateButton = document.createElement('button');
        updateButton.textContent = 'Update Quantity';
        updateButton.onclick = () => updateItemQuantity(item.productId);

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeItemFromCart(item.productId);

        li.appendChild(updateButton);
        li.appendChild(removeButton);
        cartItemsContainer.appendChild(li);
    });
};

const displayCartSummary = (summary) => {
    const summaryContainer = document.getElementById('cart-summary');
    summaryContainer.innerHTML = `Total Items: ${summary.totalItems}, Total Amount: $${summary.totalAmount}`;
};

const addItemToCart = async () => {
    const productId = document.getElementById('product-id').value;
    const quantity = document.getElementById('quantity').value;

    try {
        await cartApi.addItem({ productId, quantity });
        loadCart(); // Reload cart after adding item
    } catch (error) {
        console.error(error);
        alert(error.message);
    }
};

const updateItemQuantity = async (productId) => {
    const newQuantity = prompt("Enter new quantity:");

    if (newQuantity) {
        try {
            await cartApi.updateQuantity(userId, productId, newQuantity);
            loadCart(); // Reload cart after updating item
        } catch (error) {
            console.error(error);
            alert(error.message);
        }
    }
};

const removeItemFromCart = async (productId) => {
    try {
        await cartApi.removeItem(userId, productId);
        loadCart(); // Reload cart after removing item
    } catch (error) {
        console.error(error);
        alert(error.message);
    }
};

const clearCart = async () => {
    try {
        await cartApi.clear(userId);
        loadCart();
    } catch (error) {
        console.error(error);
        alert(error.message);
    }
};