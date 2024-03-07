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







const goHome = document.querySelectorAll('.gohome');

goHome.forEach(function (icon) {
    icon.addEventListener('click', function () {
        window.location.href = "./index.html";
    });
});





const generateRestaurantDesserts = (dessert) => {
    let html = "";
    html += `
    <div class="details-row flx jstfy-cntnt-sb">
        <span>
            <h4>${dessert.name}</h4>
            <p>Ingredients: ${dessert.ingredients}</p>
        </span>
        <span><h4>$${dessert.price}</h4></span>
    </div>
            `;
    return html;
};

const desserts = getProducts().filter(product => product.type === "Dessert");
const menuContainerDesserts = document.getElementById("menu-container-desserts");
desserts.forEach(dessert => {
    const dessertDetails = generateRestaurantDesserts(dessert);
    menuContainerDesserts.innerHTML += dessertDetails;
});







const generateRestaurantMainCourses = (mainCourse) => {
    let html = "";
    html += `
    <div class="details-row flx jstfy-cntnt-sb">
        <span>
            <h4>${mainCourse.name}</h4>
            <p>Ingredients: ${mainCourse.ingredients}</p>
        </span>
        <span><h4>$${mainCourse.price}</h4></span>
    </div>
            `;
    return html;
};

const mainCourses = getProducts().filter(product => product.type === "Main Course");
const menuContainerMainCourse = document.getElementById("menu-container-main-course");
mainCourses.forEach(mainCourse => {
    const mainCourseDetails = generateRestaurantMainCourses(mainCourse);
    menuContainerMainCourse.innerHTML += mainCourseDetails;
});








const generateRestaurantAppetizers = (appetizer) => {
    let html = "";
    html += `
    <div class="details-row flx jstfy-cntnt-sb">
        <span>
            <h4>${appetizer.name}</h4>
            <p>Ingredients: ${appetizer.ingredients}</p>
        </span>
        <span><h4>$${appetizer.price}</h4></span>
    </div>
            `;
    return html;
};



const appetizers = getProducts().filter(product => product.type === "Appetizer");
const menuContainerAppetizer = document.getElementById("menu-container-appetizer");
appetizers.forEach(appetizer => {
    const appetizerDetails = generateRestaurantAppetizers(appetizer);
    menuContainerAppetizer.innerHTML += appetizerDetails;
});





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