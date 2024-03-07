localStorage.clear();
addUser({firstName: "youssof", lastName: "hammoud", email: "yh@example.com", password: "fsw"})
addUser({firstName: "admin", lastName: "admin", email: "admin@example.com", password: "admin", isAdmin: true})
addUser({firstName: "afif", lastName: "ayoubi", email: "afif@example.com", password: "fsw"})

addRestaurant({
    id:1,
    restaurantName: "Tasty Bites Restaurant",
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
