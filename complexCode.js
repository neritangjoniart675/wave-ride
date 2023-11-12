/*
Filename: complexCode.js
Content: A complex JavaScript code demonstrating a car rental management system.
*/

// Car class representing a car
class Car {
  constructor(brand, model, year, color, price) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
    this.price = price;
    this.available = true;
  }

  rent() {
    if (this.available) {
      this.available = false;
      console.log(`The ${this.brand} ${this.model} is now rented.`);
    } else {
      console.log(`The ${this.brand} ${this.model} is currently unavailable.`);
    }
  }

  returnCar() {
    if (!this.available) {
      this.available = true;
      console.log(`The ${this.brand} ${this.model} has been returned.`);
    } else {
      console.log(`The ${this.brand} ${this.model} is already available.`);
    }
  }
}

// CarRental class representing a car rental management system
class CarRental {
  constructor(name) {
    this.name = name;
    this.cars = [];
  }

  addCar(car) {
    this.cars.push(car);
  }

  searchCarsByBrand(brand) {
    const foundCars = this.cars.filter((car) => car.brand === brand);
    console.log(`Found ${foundCars.length} ${brand} cars:`);
    foundCars.forEach((car) => {
      console.log(`- ${car.model} (${car.year}) - ${car.color} - $${car.price}/day`);
    });
  }

  searchCarsByAvailability() {
    const availableCars = this.cars.filter((car) => car.available);
    console.log(`Currently available cars:`);
    availableCars.forEach((car) => {
      console.log(`- ${car.brand} ${car.model} (${car.year}) - ${car.color} - $${car.price}/day`);
    });
  }

  rentCar(brand, model) {
    const car = this.cars.find((car) => car.brand === brand && car.model === model);
    if (car) {
      car.rent();
    } else {
      console.log(`No ${brand} ${model} found in the rental system.`);
    }
  }

  returnCar(brand, model) {
    const car = this.cars.find((car) => car.brand === brand && car.model === model);
    if (car) {
      car.returnCar();
    } else {
      console.log(`No ${brand} ${model} found in the rental system.`);
    }
  }
}

// Create a car rental company
const rentalCompany = new CarRental("SuperRent");

// Add cars to the rental company
rentalCompany.addCar(new Car("Toyota", "Camry", 2021, "Black", 50));
rentalCompany.addCar(new Car("Honda", "Civic", 2020, "White", 40));
rentalCompany.addCar(new Car("BMW", "X5", 2019, "Silver", 100));
rentalCompany.addCar(new Car("Mercedes", "E200", 2022, "Red", 120));

// Search for cars by brand and availability
rentalCompany.searchCarsByBrand("Toyota");
rentalCompany.searchCarsByAvailability();

// Rent a car
rentalCompany.rentCar("BMW", "X5");
rentalCompany.rentCar("Tesla", "S");

// Return a car
rentalCompany.returnCar("BMW", "X5");
rentalCompany.returnCar("Honda", "Civic");