// User object
const user = {
    id: 'unique_id',
    username: 'username',
    email: 'user@example.com',
    password: 'hello world!'
};

// Admin object
const admin = {
    userId: 'user_id'
}

// Restaurant object
const restaurant = {
    id: 'unique_id',
    name: 'Restaurant Name',
    rating: 4.5,
    imageURL: 'foo/bar.png',
    summary: 'This restaurant is one of the top restaurants in town',
    tags: ['ocean-view', 'green-view', 'clouds', 'mountain-view']
};

const product = {
    id: 'unique_id',
    title: 'Cheese burger',
    rating: 3.5,
    tags: ['burger', 'cheese']
}

// Favorite Product object
const favoriteProduct = {
    id: 'unique_id',
    userId: 'user_id',
    productId: 'product_id',
};

// Restaurant review
const restaurantReview = {
    id: 'unique_id',
    userId: 'user_id',
    restaurantID: 'resto_id',
    review: 'Outstanding experience'
}