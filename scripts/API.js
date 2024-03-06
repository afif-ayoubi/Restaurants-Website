// Common function to add data to local storage
const addToLocalStorage = (key, newData) => {
    const existingData = JSON.parse(localStorage.getItem(key)) || [];
    const lastId = existingData.length > 0 ? existingData[existingData.length - 1].id : 0;
    newData.id = lastId + 1;
    existingData.push(newData);
    localStorage.setItem(key, JSON.stringify(existingData));
    console.log("Auto-incremented ID:", newData.id);

  };

// Common function to get data from local storage
const getFromLocalStorage = (key) =>
  JSON.parse(localStorage.getItem(key)) || [];

// Common function to delete data from local storage
const deleteFromLocalStorage = (key, id) => {
  const existingData = JSON.parse(localStorage.getItem(key)) || [];
  const updatedData = existingData.filter((item) => item.id !== id);
  localStorage.setItem(key, JSON.stringify(updatedData));
};

// Add a new user
const addUser = (user) => {
  addToLocalStorage("users", user);
}

// Get all users
const getUsers = () => getFromLocalStorage("users");


// Delete a user by ID
const deleteUser = (userId) => deleteFromLocalStorage("users", userId);

// Add a new admin
const addAdmin = (admin) => addToLocalStorage("admins", admin);

// Get all admins
const getAdmins = () => getFromLocalStorage("admins");

// Delete an admin by user ID
const deleteAdmin = (userId) => deleteFromLocalStorage("admins", userId);

// Add a new restaurant
const addRestaurant = (restaurant) =>
  addToLocalStorage("restaurants", restaurant);

// Get all restaurants
const getRestaurants = () => getFromLocalStorage("restaurants");

// Delete a restaurant by ID
const deleteRestaurant = (restaurantId) =>
  deleteFromLocalStorage("restaurants", restaurantId);

// Add a new product
const addProduct = (product) => addToLocalStorage("products", product);

// Get all products
const getProducts = () => getFromLocalStorage("products");

// Delete a product by ID
const deleteProduct = (productId) =>
  deleteFromLocalStorage("products", productId);

// Add a new favorite product
const addFavoriteProduct = (favoriteProduct) =>
  addToLocalStorage("favoriteProducts", favoriteProduct);

// Get all favorite products
const getFavoriteProducts = () => getFromLocalStorage("favoriteProducts");

// Delete a favorite product by user ID and product ID
const deleteFavoriteProduct = (userId, productId) => {
  const favoriteProduct = getFavoriteProducts().find(
    (fp) => fp.userId === userId && fp.productId === productId
  );
  if (favoriteProduct) {
    deleteFromLocalStorage("favoriteProducts", favoriteProduct.id);
  }
};

// Add a new restaurant review
const addRestaurantReview = (review) =>
  addToLocalStorage("restaurantReviews", review);

// Get all restaurant reviews
const getRestaurantReviews = () => getFromLocalStorage("restaurantReviews");

// Delete a restaurant review by ID
const deleteRestaurantReview = (reviewId) =>
  deleteFromLocalStorage("restaurantReviews", reviewId);

