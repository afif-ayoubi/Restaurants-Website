const addToLocalStorage = (key, newData) => {
  const existingData = JSON.parse(localStorage.getItem(key)) || [];
  const lastId =
    existingData.length > 0 ? existingData[existingData.length - 1].id : 0;
  newData.id = lastId + 1;
  existingData.push(newData);
  localStorage.setItem(key, JSON.stringify(existingData));
};

const getFromLocalStorage = (key) =>
  JSON.parse(localStorage.getItem(key)) || [];

const deleteFromLocalStorage = (key, id) => {
  const existingData = JSON.parse(localStorage.getItem(key)) || [];

  const updatedData = existingData.filter((item) => item.id !== id);
  localStorage.setItem(key, JSON.stringify(updatedData));
};

const addUser = (user) => {
  addToLocalStorage("users", user);
};

const getUsers = () => getFromLocalStorage("users");

const deleteUser = (userId) => deleteFromLocalStorage("users", userId);

const addRestaurant = (restaurant) =>
  addToLocalStorage("restaurants", restaurant);

const getRestaurants = () => getFromLocalStorage("restaurants");

const deleteRestaurant = (restaurantId) =>
  deleteFromLocalStorage("restaurants", restaurantId);

const addProduct = (product) => addToLocalStorage("products", product);

const getProducts = () => getFromLocalStorage("products");

const deleteProduct = (productId) =>
  deleteFromLocalStorage("products", productId);

const addFavoriteProduct = (favoriteProduct) =>
  addToLocalStorage("favoriteProducts", favoriteProduct);

const getFavoriteProducts = () => getFromLocalStorage("favoriteProducts");

const deleteFavoriteProduct = (userId, productId) => {
  const favoriteProduct = getFavoriteProducts().find(
    (fp) => fp.userId === userId && fp.productId === productId
  );
  if (favoriteProduct) {
    deleteFromLocalStorage("favoriteProducts", favoriteProduct.id);
  }
};

const addRestaurantReview = (review) =>
  addToLocalStorage("restaurantReviews", review);

const getRestaurantReviews = () => getFromLocalStorage("restaurantReviews");

const deleteRestaurantReview = (reviewId) =>
  deleteFromLocalStorage("restaurantReviews", reviewId);
