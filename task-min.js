const car = {
  manufacturer: "Toyota",
  model: "Camry",
  year: 2020,
  averageSpeed: 100, 
  fuelTankCapacity: 60, 
  fuelConsumption: 8, 
  drivers: ["Олександр", "Ірина"],

  displayInfo() {
    console.log(`Виробник: ${this.manufacturer}`);
    console.log(`Модель: ${this.model}`);
    console.log(`Рік випуску: ${this.year}`);
    console.log(`Середня швидкість: ${this.averageSpeed} км/год`);
    console.log(`Обсяг паливного баку: ${this.fuelTankCapacity} літрів`);
    console.log(
      `Середня витрата палива: ${this.fuelConsumption} літрів на 100 км`
    );
    console.log(`Водії: ${this.drivers.join(", ")}`);
  },

  addDriver(name) {
    this.drivers.push(name);
    console.log(`Водія ${name} додано до списку.`);
  },

  isDriverInList(name) {
    return this.drivers.includes(name);
  },

  calculateTrip(distance) {
    const time = distance / this.averageSpeed;
    const fuelNeeded = (distance * this.fuelConsumption) / 100;

    console.log(`Для подолання ${distance} км знадобиться:`);
    console.log(`Час: ${time.toFixed(2)} годин(и)`);
    console.log(`Палива: ${fuelNeeded.toFixed(2)} літрів`);
  },
};

car.displayInfo(); 

car.addDriver("Марія"); 

console.log(car.isDriverInList("Олександр")); 
console.log(car.isDriverInList("Андрій")); 

car.calculateTrip(600); 
