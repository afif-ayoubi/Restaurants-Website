
const showUserDashboard = () => {
  document.getElementById("userDashboard").style.display = "block";
  document.getElementById("restaurantDashboard").style.display = "none";
  document.getElementById("userDashboardLink").classList.add("active");
  document.getElementById("restaurantDashboardLink").classList.remove("active");
};

const showRestaurantDashboard = () => {
  document.getElementById("userDashboard").style.display = "none";
  document.getElementById("restaurantDashboard").style.display = "block";
  document.getElementById("userDashboardLink").classList.remove("active");
  document.getElementById("restaurantDashboardLink").classList.add("active");
};
function previewImage(input) {
  var reader = new FileReader();
  reader.onload = function(e) {
    document.getElementById('uploadedImage').src = e.target.result;
  };
  reader.readAsDataURL(input.files[0]);
}