const addToLocalStorage = (key, newData) => {
  const existingData = JSON.parse(localStorage.getItem(key)) || [];
  const lastId =
    existingData.length > 0 ? existingData[existingData.length - 1].id : 0;
  newData.id = lastId + 1;
  existingData.push(newData);
  localStorage.setItem(key, JSON.stringify(existingData));
  console.log("Auto-incremented ID:", newData.id);
};

const getFromLocalStorage = (key) =>
  JSON.parse(localStorage.getItem(key)) || [];

const deleteFromLocalStorage = (key, id) => {
  const existingData = JSON.parse(localStorage.getItem(key)) || [];
  const updatedData = existingData.filter((item) => item.id !== id);
  localStorage.setItem(key, JSON.stringify(updatedData));
};
const updateDataInLocalStorage = (key, id, updatedData) => {
  const existingData = getFromLocalStorage(key);
  const updatedItems = existingData.map((item) => {
    if (item.id === id) {
      return { ...item, ...updatedData };
    }
    return item;
  });
  localStorage.setItem(key, JSON.stringify(updatedItems));
};

const addUser = (user) => 
  addToLocalStorage("users", user);


const getUsers = () => getFromLocalStorage("users");

const deleteUser = (userId) => deleteFromLocalStorage("users", userId);

const updateUser = (updatedUser) =>
  updateDataInLocalStorage("users", updatedUser.id, updatedUser);


const addRestaurant = (restaurant) =>
  addToLocalStorage("restaurants", restaurant);

const getRestaurants = () => getFromLocalStorage("restaurants");

const deleteRestaurant = (restaurantId) =>
  deleteFromLocalStorage("restaurants", restaurantId);

const addProduct = (product) => addToLocalStorage("products", product);

const getProducts = () => getFromLocalStorage("products");

const deleteProduct = (productId) =>
  deleteFromLocalStorage("products", productId);

const addFavoriteRestaurant = (favoriteRestaurant) =>
  addToLocalStorage("favoriteRestaurants", favoriteRestaurant);

const getFavoriteRestaurants = () => getFromLocalStorage("favoriteRestaurants");

const deleteFavoriteRestaurant = (userId, RestaurantId) => {
  const favoriteRestaurant = getFavoriteRestaurants().find(
    (fp) => fp.userId === userId && fp.RestaurantId === RestaurantId
  );
  if (favoriteRestaurant) {
    deleteFromLocalStorage("favoriteRestaurants", favoriteRestaurant.id);
  }
};

const addRestaurantReview = (review) =>
  addToLocalStorage("restaurantReviews", review);

const getRestaurantReviews = () => getFromLocalStorage("restaurantReviews");

const deleteRestaurantReview = (reviewId) =>
  deleteFromLocalStorage("restaurantReviews", reviewId);
