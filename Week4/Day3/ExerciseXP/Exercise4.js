// Let’s create functions that calculate your vacation’s costs: 
// 1. Define a function called hotelCost(). 
//     It should ask the user for the number of nights they would like to stay in the hotel. 
//     If the user doesn’t answer or if the answer is not a number, ask again. 
//     The hotel costs $140 per night. The function should return the total price of the hotel. 
// 2. Define a function called planeRideCost().
//     It should ask the user for their destination. 
//     If the user doesn’t answer or if the answer is not a string, ask again. 
//     The function should return a different price depending on the location.
//         “London”: 183$ 
//         “Paris” : 220$ 
//         All other destination : 300$ 
// 3. Define a function called rentalCarCost().
//     It should ask the user for the number of days they would like to rent the car. 
//     If the user doesn’t answer or if the answer is not a number, ask again. 
//     Calculate the cost to rent the car. The car costs $40 everyday.
//         If the user rents a car for more than 10 days, they get a 5% discount. 
//     The function should return the total price of the car rental. 
// 4. Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
// Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z. 
// Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().
// 5. Call the function totalVacationCost()
// 6. Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.

let hotelCost = (hotel_nights) => hotel_nights * 140;

function planeRideCost(destination) {
    switch (destination) {
        case 'London':
            return 183;
        case 'Paris':
            return 220;
        default:
            return 300;
    }
}
function rentalCarCost(car_days) {
    return car_days*40 - car_days*40*0.05*(car_days > 10);
}
function totalVacationCost(hotel_nights, destination, car_days) {
    return hotelCost(hotel_nights) + planeRideCost(destination) + rentalCarCost(car_days);
}

console.log(totalVacationCost(14, 'Paris', 13));