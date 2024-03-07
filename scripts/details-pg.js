function getUrlParameter(name) {
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(window.location.href);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}


var restoId = parseInt(getUrlParameter('restoId'));


const restaurant = getRestaurants().find(restaurant => restaurant.id === restoId);

const restaurantsContainer = document.getElementById("main-restaurant-section");



const generateRestaurantDetails = (restaurant) => {
  let html = "";
  html += `<section class="restaurant-details black-2 bg-white">
      <h2>Restaurant Details</h2>
      <div class="details-row flx jstfy-cntnt-sb">
          <span class="details-label">Address:</span>
          <span>${restaurant.restaurantAddress}</span>
      </div>
      <div class="details-row flx jstfy-cntnt-sb">
          <span class="details-label">Phone:</span>
          <span>${restaurant.restaurantPhone}</span>
      </div>
      <div class="details-row flx jstfy-cntnt-sb">
          <span class="details-label">Hours:</span>
          <span>${restaurant.restaurantHours}</span>
      </div>
      <div class="details-row flx jstfy-cntnt-sb">
          <span class="details-label">Cuisine:</span>
          <span>${restaurant.restaurantCuisine}</span>
      </div>
      <div class="details-row flx jstfy-cntnt-sb">
          <span class="details-label">Rating:</span>
          <span>${restaurant.restaurantRating}</span>
      </div>
  </section>
          `;
  return html;
};

const doll = generateRestaurantDetails(restaurant);
restaurantsContainer.innerHTML += doll;