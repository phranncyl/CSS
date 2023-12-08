let cartItemCount = 0;

function addToCart() {
    // Update the cart count
    cartItemCount++;
    
    // Update the display
    updateCartDisplay();
}
 
function updateCartDisplay() {
    // Update the cart count in the HTML
    const cartItemCountElement = document.getElementById('cartItemCount');
    cartItemCountElement.textContent = cartItemCount;
}

