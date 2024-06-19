const ScranAdvisor = function(restaurants){
    this.restaurants = restaurants;
}

// Add methods to prototype






// Count the number of restaurants stored
ScranAdvisor.prototype.countRestaurants = function() {
    // use length property
    return this.restaurants.length;
  };
  
  // Find a restaurant by its name
  ScranAdvisor.prototype.findRestaurantByName = function(name) {
      return this.restaurants.find(restaurant => restaurant.name === name); 
    };
    
    // find() method to search for a restaurant with the given name
    // return the element in this.restaurants array whose name property matches the given name parameter.
    // from MDN --> The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
    // restaurant => restaurant.name === name is a callback function that find uses to determine if an element matches the condition. 
    // This callback function is what makes find a higher-order function.
    // The arrow function when replaced with a regular function would look like this 
    // return this.restaurants.find(function(restaurant) {
    //   return restaurant.name === name;
    // });
  
  // Return an array containing each restaurant's name
  ScranAdvisor.prototype.getRestaurantNames = function() {
    return this.restaurants.map(restaurant => restaurant.name);
  };

   // map() method to create a new array containing only the names of the restaurants
   // MDN --> The map() method creates a new array populated with the results of calling a provided function on every element in the calling array
   // extracts the name property of each restaurant and returns it, resulting in an array of restaurant names
   // Doesn't need to take in a parameter --> function purpose is extraction
  
  // Find all the restaurants from a given city
  ScranAdvisor.prototype.findRestaurantsByCity = function(city) {
      return this.restaurants.filter(restaurant => restaurant.location.town === city);
    };
    
    // filter() method to create a new array containing only the restaurants whose city property matches the given city parameter passed in the function.
    // MDN --> The filter() method creates a new array with all elements that pass the test implemented by the provided function




// Extension 1

// Create object to store cpunt of each cusiine type using key-value pairs
// keys of object = cuisine type
// value of object = count of appearance of each cuisine in restaraunts array
// Iterate over each restaurant in the restaurants array. 
// Can use for loop to loop through each element of the array and if its present increment its count or if not then initilise its count (if-else statement)
//  But we can use the reduce method here (similar to the lesson)
// The reduce method is often used to accumulate a single result from multiple elements in an array.
// reduce method takes callback function and an initial value for the accumulator object

ScranAdvisor.prototype.findMostPopularCuisine = function() {
    // Use the reducer method to count the occurrences of each cuisine
    const cuisineCount = this.restaurants.reduce((acc, restaurant) => {
        // reduce method iterates over each restaraunt object in the array
        // takes callback function with 2 parameters
        // acc - accumulator : object that accumulates the cusine counts
        // resteraunt - current resteraunt object being processed

        // extract the cusine value from the resteraunt object and assign it to the cuisine variable
        const cuisine = restaurant.cuisines;

    // If the cuisine exists in the accumulator object (using the in operator), increment its count
    // Otherwise, a new property is created in 'acc' with the cuisine as the key and its count set to 1.
    // the in operator is used to check if a specified property exists in an object or if an index exists in an array. It returns true if the property or index is found, and false otherwise.

    if (cuisine in acc) {
        acc[cuisine]++;
      } else {
        acc[cuisine] = 1;
      }

      return acc;
    }, {}); // The updated 'acc' object is returned in each iteration and the initial value of the 'acc' object is an empty object {}.

    // now need to track the max count and the cusine with the max count

    let maxCount = 0;
    let mostPopularCuisine = '';
    // Initialize variables to keep track of the maximum count and the coressponding cuisine type.
  
    // Iterate over the cuisineCount object to find the cuisine with the maximum count
    for (const cuisine in cuisineCount) {
  
      if (cuisineCount[cuisine] > maxCount) {
        maxCount = cuisineCount[cuisine];
        mostPopularCuisine = cuisine;
      }


      // The square bracket notation cuisineCount[cuisine] is used to access the count of a specific cuisine dynamically based on the value of the cuisine variable. It allows you to retrieve the count associated with the cuisine key stored in the cuisine variable.
      // If the count of the current cuisine is greater than the current 'maxCount',
      // update 'maxCount' to the current cuisine's count and update 'mostPopularCuisine' to the current cuisine.
    }
  
    return mostPopularCuisine;
    // Return the most popular cuisine found.
  };


  


// Extension 2





module.exports = ScranAdvisor;