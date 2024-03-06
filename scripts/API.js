// note: use destructuring for object for better rendering html
// example: const {name,age,password} = user
// html <p>Welcome: ${name} </p>


// Common function to add data to local storage
function addToLocalStorage(key, newData) {
    const existingData = JSON.parse(localStorage.getItem(key)) || [];
    existingData.push(newData);
    localStorage.setItem(key, JSON.stringify(existingData));
}

// Common function to get data from local storage
function getFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
}

// Common function to delete data from local storage
function deleteFromLocalStorage(key, id) {
    const existingData = JSON.parse(localStorage.getItem(key)) || [];
    const updatedData = existingData.filter(item => item.id !== id);
    localStorage.setItem(key, JSON.stringify(updatedData));
}

// Add a new user
function addUser(user) {
    addToLocalStorage('users', user);
}

// Get all users
function getUsers() {
    return getFromLocalStorage('users');
}

// Delete a user by ID
function deleteUser(userId) {
    deleteFromLocalStorage('users', userId);
}

// Add a new admin
function addAdmin(admin) {
    addToLocalStorage('admins', admin);
}

// Get all admins
function getAdmins() {
    return getFromLocalStorage('admins');
}

// Delete an admin by user ID
function deleteAdmin(userId) {
    deleteFromLocalStorage('admins', userId);
}

// Add a new restaurant
function addRestaurant(restaurant) {
    addToLocalStorage('restaurants', restaurant);
}

// Get all restaurants
function getRestaurants() {
    return getFromLocalStorage('restaurants');
}

// Delete a restaurant by ID
function deleteRestaurant(restaurantId) {
    deleteFromLocalStorage('restaurants', restaurantId);
}

// Add a new product
function addProduct(product) {
    addToLocalStorage('products', product);
}

// Get all products
function getProducts() {
    return getFromLocalStorage('products');
}

// Delete a product by ID
function deleteProduct(productId) {
    deleteFromLocalStorage('products', productId);
}

// Add a new favorite product
function addFavoriteProduct(favoriteProduct) {
    addToLocalStorage('favoriteProducts', favoriteProduct);
}

// Get all favorite products
function getFavoriteProducts() {
    return getFromLocalStorage('favoriteProducts');
}

// Delete a favorite product by user ID and product ID
function deleteFavoriteProduct(userId, productId) {
    const favoriteProduct = getFavoriteProducts().find(fp => fp.userId === userId && fp.productId === productId);
    if (favoriteProduct) {
        deleteFromLocalStorage('favoriteProducts', favoriteProduct.id);
    }
}

// Add a new restaurant review
function addRestaurantReview(review) {
    addToLocalStorage('restaurantReviews', review);
}

// Get all restaurant reviews
function getRestaurantReviews() {
    return getFromLocalStorage('restaurantReviews');
}

// Delete a restaurant review by ID
function deleteRestaurantReview(reviewId) {
    deleteFromLocalStorage('restaurantReviews', reviewId);
}