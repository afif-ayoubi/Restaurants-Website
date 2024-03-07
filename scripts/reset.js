localStorage.clear();
addUser({firstName: "youssof", lastName: "hammoud", email: "yh@example.com", password: "fsw"})
addUser({firstName: "admin", lastName: "admin", email: "admin@example.com", password: "admin", isAdmin: true})
addUser({firstName: "afif", lastName: "ayoubi", email: "afif@example.com", password: "fsw"})

addRestaurant({
    id:1,
    restaurantName: "tasty Bites Restaurant",
    restaurantAddress: "123 Main Street, Cityville",
    restaurantPhone: "123-456-7890",
    restaurantHours: "Mon-Sat: 9am-10pm, Sun: 11am-8pm",
    restaurantImage: "https://images.adsttc.com/media/images/5e4c/1025/6ee6/7e0b/9d00/0877/large_jpg/feature_-_Main_hall_1.jpg?1582043123",
    restaurantCuisine: "Italian",
    restaurantRating: "4.5",
    restaurantDescription: "Tasty Bites Restaurant offers delicious Italian cuisine in a cozy atmosphere. Come dine with us and experience culinary delights!"
});


addRestaurant({
    id:2,
    restaurantName: "Spicy Sushi House",
    restaurantAddress: "789 Maple Street, Villagetown",
    restaurantPhone: "567-890-1234",
    restaurantHours: "Mon-Sun: 11:30am-9pm",
    restaurantImage: "https://scdn.aro.ie/Sites/50/imperialhotels2022/uploads/images/PanelImages/General/156757283_Bedford_Hotel__F_B__Botanica_Restaurant_and_Bar__General_View._4500x3000.jpg",
    restaurantCuisine: "Japanese",
    restaurantRating: "4.3",
    restaurantDescription: "Spicy Sushi House serves a wide variety of authentic Japanese dishes, including fresh sushi and sashimi. Come and indulge in our flavorful creations!"
});


addRestaurant({
    id:3,
    restaurantName: "Sizzling Steaks Grill",
    restaurantAddress: "456 Oak Avenue, Townsville",
    restaurantPhone: "987-654-3210",
    restaurantHours: "Mon-Fri: 11am-10pm, Sat-Sun: 12pm-11pm",
    restaurantImage: "https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg",
    restaurantCuisine: "Steakhouse",
    restaurantRating: "4.7",
    restaurantDescription: "Sizzling Steaks Grill offers the finest quality steaks cooked to perfection. Join us for an unforgettable dining experience!"
});

addProduct(
    {
        type:"Appetizer",
        name: "octopus carpacciao",
        price: "9",
        ingredients: "raw octopus, lime zest, greens on top"
    }
);

addProduct({
    type: "Appetizer",
    name: "Garlic Bread",
    price: "6",
    ingredients: "Bread, garlic, butter, parsley"
});

addProduct({
    type: "Main Course",
    name: "Beef Burger",
    price: "12",
    ingredients: "Beef patty, lettuce, tomato, onion, cheese, bun"
});

addProduct({
    type: "Dessert",
    name: "Cheesecake",
    price: "8",
    ingredients: "Cream cheese, sugar, eggs, graham cracker crust"
});

addProduct({
    type: "Appetizer",
    name: "Mozzarella Sticks",
    price: "9",
    ingredients: "Mozzarella cheese, breadcrumbs, marinara sauce"
});

addProduct({
    type: "Main Course",
    name: "Chicken Alfredo",
    price: "15",
    ingredients: "Chicken breast, fettuccine pasta, Alfredo sauce"
});

addProduct({
    type: "Dessert",
    name: "Apple Pie",
    price: "10",
    ingredients: "Apples, cinnamon, sugar, pastry crust"
});

addProduct({
    type: "Appetizer",
    name: "Shrimp Cocktail",
    price: "11",
    ingredients: "Shrimp, cocktail sauce, lemon wedge"
});

addProduct({
    type: "Main Course",
    name: "Vegetarian Pizza",
    price: "14",
    ingredients: "Pizza dough, tomato sauce, mozzarella cheese, vegetables"
});

addProduct({
    type: "Dessert",
    name: "Chocolate Brownie",
    price: "7",
    ingredients: "Chocolate, butter, sugar, flour, eggs"
});

addProduct({
    type: "Appetizer",
    name: "Spinach Artichoke Dip",
    price: "8",
    ingredients: "Spinach, artichokes, cream cheese, sour cream"
});

addProduct({
    type: "Main Course",
    name: "Salmon Fillet",
    price: "18",
    ingredients: "Salmon fillet, lemon, herbs"
});

addProduct({
    type: "Dessert",
    name: "Strawberry Shortcake",
    price: "9",
    ingredients: "Strawberries, whipped cream, shortcake biscuit"
});

addProduct({
    type: "Appetizer",
    name: "Stuffed Mushrooms",
    price: "10",
    ingredients: "Mushrooms, breadcrumbs, garlic, Parmesan cheese"
});

addProduct({
    type: "Main Course",
    name: "Pasta Primavera",
    price: "13",
    ingredients: "Pasta, mixed vegetables, olive oil, garlic"
});

addProduct({
    type: "Dessert",
    name: "Lemon Tart",
    price: "11",
    ingredients: "Lemon curd, pastry crust, powdered sugar"
});
