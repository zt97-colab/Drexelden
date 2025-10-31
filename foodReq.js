

// Function to fetch nearby restaurants based on location and food type
async function fetchNearbyRestaurants(location, foodType) {
    const mockData = [
        { name: "Wawa", type: "Coffee", location: "Drexel Library", distance: "427 ft", priceRange: "$2-5; Dragon Dollar" },
        { name: "Starbucks: Gerri C lebow Hall", type: "Coffee", location: "Drexel Library", distance: "469 ft", priceRange: "$7-10" },
        { name: "Saxbys: Drexel PISB", type: "Coffee", location: "Drexel Library", distance: "0.1 miles", priceRange: "$4-7" },
        { name: "Halal Taste Food Cart", type: "Halal", location: "Drexel Library", distance: "82 ft", priceRange: "$9-10 (comes with soda)" },
        { name: "Nanu's Hot Chicken", type: "Halal", location: "Drexel Library", distance: "197 ft", priceRange: "$9-10 (comes with soda)" },
        { name: "Halal Cart", type: "Halal", location: "Drexel Library", distance: "20 ft", priceRange: "$9-10 (comes with soda)" },
        { name: "ZamZam Halal", type: "Halal", location: "Drexel Library", distance: "318 ft", priceRange: "$9-10 (comes with soda)" },
        { name: "Heirloom", type: "Sushi", location: "Drexel Library", distance: "0.2 miles 5 min walk", priceRange: "$8-15" },
        { name: "Landmark", type: "American", location: "Drexel Library", distance: "407 ft; 2 minute walk", priceRange: "$20-40" },

        { name: "Halal Taste", type: "Halal", location: "Main Building", distance: "0.8 miles", priceRange: "$8-11" },
        { name: "Shake Shack", type: "Burgers", location: "Main Building", distance: "1.0 miles", priceRange: "$7-20" },
        { name: "CM Chicken", type: "Chicken", location: "Main Building", distance: "243 ft", priceRange: "$15-25" },
        { name: "Handschumacher Dining Center", type: "Dining", location: "Main Building", distance: "0.1 miles", priceRange: "$Dragon Dollar" },

        { name: "ELIXR Coffee", type: "Coffee", location: "CCI Building", distance: "Downstairs (1st Floor)", priceRange: "$15-25" },
        { name: "Dunkin'", type: "Coffee", location: "CCI Building", distance: "417 ft; 1 min walk", priceRange: "$1-10" },
        { name: "Pace & Blossom", type: "Sushi", location: "CCI Building", distance: "299 ft; 1 min walk", priceRange: "$20-30" },
        { name: "Switch Cafe", type: "Snacks", location: "CCI Building", distance: "354 ft; 2 min walk", priceRange: "$1-10" },
        { name: "Urban Eatery", type: "Dining", location: "CCI Building", distance: "0.2 miles; 5 min walk", priceRange: "$1-10 (Dragon Dollar)" },
        { name: "Savas Brick Oven Pizza", type: "Pizza", location: "CCI Building", distance: "0.3 miles; 6 min walk", priceRange: "$10-20" },
        { name: "Tataki Ramen & Sushi", type: "Sushi", location: "CCI Building", distance: "0.3 miles; 7 min walk", priceRange: "$10-20" },
        { name: "Insomnia Cookies", type: "Snacks", location: "CCI Building", distance: "0.3 miles; 6 min walk", priceRange: "$4-12" },
        { name: "Madis Coffee Roasters", type: "Coffee", location: "CCI Building", distance: "0.2 miles; 6 min walk", priceRange: "$1-10" },

        { name: "CM Chicken", type: "Chicken", location: "Drexel Plaza", distance: "0.3 miles; 6 min walk", priceRange: "$15-25" },
        { name: "Starbucks: Gerri C lebow Hall", type: "Coffee", location: "Drexel Plaza", distance: "0.1 miles; 3 min walk", priceRange: "$7-10" },
        { name: "Handschumacher Dining Center", type: "Dining", location: "Drexel Plaza", distance: "0.3 miles; 8 minutes", priceRange: "$1-10; Dragon Dollar" },
        { name: "Food Company", type: "Snacks", location: "Drexel Plaza", distance: "0.1 miles; 2 minutes", priceRange: "$1-10; Dragon Dollar" },

        { name: "Wawa", type: "Coffee", location: "Drexel Recreation Center", distance: "374 ft; 2 min walk", priceRange: "$2-5; Dragon Dollar" },
        { name: "Starbucks: Gerri C lebow Hall", type: "Coffee", location: "Drexel Recreation Center", distance: "0.1 miles; 3 min walk", priceRange: "$7-10" },
        { name: "Saxbys: Drexel PISB", type: "Coffee", location: "Drexel Recreation Center", distance: "0.1 miles; 3 min walk", priceRange: "$4-7" },
        { name: "Halal Taste Food Cart", type: "Halal", location: "Drexel Recreation Center", distance: "148 ft; 1 min walk; right outside the building", priceRange: "$9-10 (comes with soda)" },
        { name: "Nanu's Hot Chicken", type: "Halal", location: "Drexel Recreation Center", distance: "150 ft; 1 min walk; right outside the building", priceRange: "$9-10 (comes with soda)" },
        { name: "Halal Cart", type: "Halal", location: "Drexel Recreation Center", distance: "171 ft; 1 min walk", priceRange: "$9-10 (comes with soda)" },
        { name: "ZamZam Halal", type: "Halal", location: "Drexel Recreation Center", distance: "375 ft; 1 min walk", priceRange: "$9-10 (comes with soda)" },
        { name: "Heirloom", type: "Sushi", location: "Drexel Recreation Center", distance: "0.1 miles; 3 min walk", priceRange: "$8-15" },
        { name: "Landmark", type: "American", location: "Drexel Recreation Center", distance: "85ft; 1 min walk; right outside", priceRange: "$20-40; Happy Hours on Thurdays; $7 Fries Tuesdays and Thursdays" },
        { name: "Urban Eatery", type: "Dining", location: "Drexel Recreation Center", distance: "0.1 miles; 3 min walk", priceRange: "$1-10 (Dragon Dollar)" },

        { name: "Saxbys: Drexel PISB", type: "Coffee", location: "PISB", distance: "First floor", priceRange: "$4-7" },

        { name: "Chick-Fill-A", type: "Chicken", location: "Kelly Hall", distance: "1 min; First floor", priceRange: "$10-20" },
        { name: "Chick-Fill-A", type: "Burger", location: "Kelly Hall", distance: "1 min; First floor", priceRange: "$10-20" },
        { name: "Sabrina's Cafe", type: "American", location: "Kelly Hall", distance: "331 miles; 1 min", priceRange: "$10-20" },
        { name: "The Market", type: "Snacks", location: "Kelly Hall", distance: "First floor", priceRange: "$10-20; Dragon Dollar" },

    ];

    // Filter mock data based on location and food type
    return mockData.filter(
        (restaurant) =>
            restaurant.location.toLowerCase().includes(location.toLowerCase()) &&
            restaurant.type.toLowerCase().includes(foodType.toLowerCase())
    );
}

// Function to handle location and food type input
async function getUserLocationAndFoodType() {
    const locationInput = document.getElementById('location').value;
    const foodTypeInput = document.getElementById('food-type').value;
    const recommendationList = document.getElementById('recommendation-list');

    if (locationInput && foodTypeInput) {
        recommendationList.innerHTML = '<p>Loading...</p>';
        const restaurants = await fetchNearbyRestaurants(locationInput, foodTypeInput);

        // Display the restaurants
        if (restaurants.length > 0) {
            recommendationList.innerHTML = restaurants
                .map(
                    (restaurant) =>
                        `<p>
                            <strong>${restaurant.name}</strong> (${restaurant.type}) - ${restaurant.distance} - 
                            <span>Price Range: ${restaurant.priceRange}</span>
                        </p>`
                )
                .join('');
        } else {
            recommendationList.innerHTML = '<p>No restaurants found matching your criteria.</p>';
        }
    } else {
        alert('Please select your location and the type of food you are looking for.');
    }
}

// Add event listener to the form
document.getElementById('food-form').addEventListener('submit', function (event) {
    event.preventDefault();
    getUserLocationAndFoodType();
});

/* Remove styles for #map-overlay and .dot */

