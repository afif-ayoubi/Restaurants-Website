const restaurantName = document.getElementById("restaurantName");
const restaurantAddress = document.getElementById("restaurantAddress");
const restaurantPhone = document.getElementById("restaurantPhone");
const restaurantHours = document.getElementById("restaurantHours");
const restaurantImage = document.getElementById("restaurantImage");
const restaurantCuisine = document.getElementById("restaurantCuisine");
const restaurantRating = document.getElementById("restaurantRating");
const restaurantDescription = document.getElementById("restaurantDescription");

const AddRestaurantData = () => {
  const restaurant = {
    restaurantName: restaurantName.value,
    restaurantAddress: restaurantAddress.value,
    restaurantPhone: restaurantPhone.value,
    restaurantHours: restaurantHours.value,
    restaurantImage: restaurantImage.value,
    restaurantCuisine: restaurantCuisine.value,
    restaurantRating: restaurantRating.value,
    restaurantDescription: restaurantDescription.value,
  };
  if (validateRestaurant(restaurant)) {
    addRestaurant(restaurant);
    updateRestaurantView();
    resetRestaurantForm();
  }
};
const deleteRestaurantData = (index) => {
  const restaurants = getRestaurants();
  const restaurantId = restaurants[index].id;
  deleteRestaurant(restaurantId);
  updateRestaurantView();
};

const editRestaurantData = (index) => {
  document.getElementById("submitRestaurant").style.display = "none";
  document.getElementById("updateRestaurant").style.display = "block";
  restaurants = getRestaurants();
  restaurantName.value = restaurants[index].restaurantName;
  restaurantAddress.value = restaurants[index].restaurantAddress;
  restaurantPhone.value = restaurants[index].restaurantPhone;
  restaurantHours.value = restaurants[index].restaurantHours;
  restaurantImage.value = restaurants[index].restaurantImage;
  restaurantCuisine.value = restaurants[index].restaurantCuisine;
  restaurantRating.value = restaurants[index].restaurantRating;
  restaurantDescription.value = restaurants[index].restaurantDescription;
  document.getElementById("updateRestaurant").onclick = () => {
    restaurants[index].restaurantName = restaurantName.value;
    restaurants[index].restaurantAddress = restaurantAddress.value;
    restaurants[index].restaurantPhone = restaurantPhone.value;
    restaurants[index].restaurantHours = restaurantHours.value;
    restaurants[index].restaurantImage = restaurantImage.value;
    restaurants[index].restaurantCuisine = restaurantCuisine.value;
    restaurants[index].restaurantRating = restaurantRating.value;
    restaurants[index].restaurantDescription = restaurantDescription.value;
    if (validateRestaurant(restaurants[index])) {
      updateRestaurant(restaurants[index]);
      resetRestaurantForm();
      updateRestaurantView();
      document.getElementById("submitRestaurant").style.display = "block";
      document.getElementById("updateRestaurant").style.display = "none";
    } else {
      resetRestaurantForm();
      updateRestaurantView();
      document.getElementById("submitRestaurant").style.display = "block";
      document.getElementById("updateRestaurant").style.display = "none";
    }
  };
};
const updateRestaurantView = () => {
  const restaurants = getRestaurants();
  const tableRestaurantBody = document.querySelector(
    "#crudTableOfrestaurant tbody"
  );
  tableRestaurantBody.innerHTML = generateRestaurantIntoHtml(restaurants);
};
const resetRestaurantForm = () => {
  restaurantName.value = "";
  restaurantDescription.value = "";
  restaurantAddress.value = "";
  restaurantPhone.value = "";
  restaurantHours.value = "";
  restaurantImage.value = "";
  restaurantCuisine.value = "";
  restaurantRating.value = "";
  restaurantDescription.value = "";
};
const validateRestaurant = (restaurant) => {
  if (
    restaurant.restaurantName === "" ||
    restaurant.restaurantAddress === "" ||
    restaurant.restaurantPhone === "" ||
    restaurant.restaurantHours === "" ||
    restaurant.restaurantImage === "" ||
    restaurant.restaurantCuisine === "" ||
    restaurant.restaurantRating === "" ||
    restaurant.restaurantDescription === ""
  ) {
    alert("All fields are required");
    return false;
  }
  return true;
};
const generateRestaurantIntoHtml = (restaurants) => {
  let html = "";
  restaurants.forEach((restaurant, index) => {
    html += `
      <tr>
        <td>${restaurant.restaurantName}</td>
        <td>${restaurant.restaurantDescription}</td>

        <td>${restaurant.restaurantAddress}</td>
        <td>${restaurant.restaurantPhone}</td>
        <td>${restaurant.restaurantHours}</td>
        <td>${restaurant.restaurantCuisine}</td>
        <td>${restaurant.restaurantImage}</td>

        <td>${restaurant.restaurantRating}</td>
        <td>
          <button onclick="deleteRestaurantData(${index})"  class="btn btn-danger">Delete</button>
          <button onclick="editRestaurantData(${index})" class="btn btn-warning">Edit</button>
        </td>
      </tr>
    `;
  });
  return html;
};
document.addEventListener("DOMContentLoaded", () => updateRestaurantView());
