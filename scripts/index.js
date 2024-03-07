if (localStorage.getItem('signedIn')) {
  const banner = document.getElementById('login-signup-banner');
  banner.style.display = 'none';
}

const restaurants = getRestaurants()

const restaurantsContainer = document.getElementById("restaurants-container");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");


const searchOnRestaurants = () => {
  const query = searchInput.value;
  console.log(query);

  const results = searchRestaurants(query);
  const doll = generateRestaurantIntoHtml(results);
  restaurantsContainer.innerHTML = doll;
};
searchButton.addEventListener("click", searchOnRestaurants);
const generateRestaurantIntoHtml = (restaurantList) => {
  let html = "";
  restaurantList.forEach((element, index) => {
    html += `
           <div class="resto-cont-card flx flx-row jstfy-cntnt-se bg-white">
              <div class="restaurant-info flx flx-clmn jstfy-cntnt-sa align-cntnt-c">
                <img src="${element.restaurantImage}" alt="Restaurant Picture">
                <div class="info">
                  <h2>${element.restaurantName}</h2>
                  <p>Rating: <span>${element.restaurantRating}</span></p>
                </div>
              </div>
              <div class="flx flx-clmn jstfy-cntnt-se">
                <h2>Customer Reviews</h2>
                <div class="flx flx-clmn">
                  <ul>
                    <li>
                      <div class="review-info">
                        <h4>John Doe</h4>
                        <div class="info">
                          <p>Rating: <span>5</span>
                          <img class="heart-icon" src="../assets/icons/heart-59-64.png">
                          </p>
                      </div>
                      <p>"Great food and atmosphere! Highly recommended."</p>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <div class="review-info">
                        <h4>John Doe</h4>
                        <div class="info">
                          <p>Rating: <span>5</span></p>
                      </div>
                      <p>"Great food and atmosphere! Highly recommended."</p>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <div class="review-info">
                        <h4>John Doe</h4>
                        <div class="info">
                          <p>Rating: <span>5</span></p>
                      </div>
                      <p>"Great food and atmosphere! Highly recommended."</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
        `;
  });
  return html;
};

const doll = generateRestaurantIntoHtml(restaurants);
restaurantsContainer.innerHTML += doll;