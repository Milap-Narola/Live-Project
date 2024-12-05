const productId = 'PRODUCT_ID_HERE'; // Replace with actual product ID

// Fetch product details and ratings
async function fetchProductDetails() {
    const response = await fetch(`/api/products/${productId}`);
    const product = await response.json();
    
    document.getElementById('productName').innerText = product.name;
    document.getElementById('productDescription').innerText = product.description;

    fetchRatings();
}

// Fetch ratings for the product
async function fetchRatings() {
    const response = await fetch(`/api/ratings/${productId}`);
    const ratings = await response.json();
    
    const ratingsContainer = document.getElementById('ratingsContainer');
    ratingsContainer.innerHTML = '';

    ratings.forEach(rating => {
        const ratingDiv = document.createElement('div');
        ratingDiv.className = 'rating';
        ratingDiv.innerHTML = `<strong>${rating.user.name}</strong>: ${rating.ratingValue} Stars<br>${rating.text}`;
        ratingsContainer.appendChild(ratingDiv);
    });
}

// Submit a new rating
document.getElementById('ratingForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const ratingValue = document.getElementById('ratingValue').value;
    const text = document.getElementById('text').value;

    const response = await fetch('/api/ratings', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${yourAuthToken}` 
        },
        body: JSON.stringify({
            product: productId,
            ratingValue,
            text
        })
    });

    if (response.ok) {
        // Clear form and refresh ratings
        document.getElementById('ratingForm').reset();
        fetchRatings();
    } else {
        console.error('Error submitting rating:', response.statusText);
    }
});

// Initialize the page
fetchProductDetails();