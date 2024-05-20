function Car() {
  this.description = ""; // Property initialization
}

Car.prototype.getDescription = function () {
  return this.description;
};

function ModelS() {
  Car.call(this); // Call parent constructor
  this.description = "Model S";
}

ModelS.prototype = Object.create(Car.prototype); // Inherit from Car
ModelS.prototype.constructor = ModelS; // Reset constructor pointer

ModelS.prototype.cost = function () {
  return 75000;
};
console.log(ModelS.prototype.constructor, "between reseting ,,,");

ModelS.prototype.constructor = ModelS; // Reset constructor pointer
console.log(ModelS.prototype.constructor, "after reseting ,,,");

ModelS.prototype.cost = function () {
  return 75000;
};

function ModelX() {
  Car.call(this); // Call parent constructor
  this.description = "Model X";
}

ModelX.prototype = Object.create(Car.prototype); // Inherit from Car
ModelX.prototype.constructor = ModelX; // Reset constructor pointer

ModelX.prototype.cost = function () {
  return 77000;
};

function CarOptions(car) {
  this.decoratedCar = car;
  this.description = car.getDescription(); // Use parent's description for base
}

CarOptions.prototype.getDescription = function () {
  return (
    this.decoratedCar.getDescription() + ", " + this.getOptionDescription()
  );
};

CarOptions.prototype.getOptionDescription = function () {
  // Implement specific option description here (abstract method)
  throw new Error(
    "getOptionDescription() is an abstract method and must be implemented in subclasses"
  );
};

CarOptions.prototype.cost = function () {
  return this.decoratedCar.cost() + this.getOptionCost();
};

CarOptions.prototype.getOptionCost = function () {
  // Implement specific option cost here (abstract method)
  throw new Error(
    "getOptionCost() is an abstract method and must be implemented in subclasses"
  );
};

function EnhancedAutoPilot(car) {
  CarOptions.call(this, car); // Call parent constructor
}

EnhancedAutoPilot.prototype = Object.create(CarOptions.prototype); // Inherit from CarOptions
EnhancedAutoPilot.prototype.constructor = EnhancedAutoPilot; // Reset constructor pointer

EnhancedAutoPilot.prototype.getOptionDescription = function () {
  return "Enhanced Autopilot";
};

EnhancedAutoPilot.prototype.getOptionCost = function () {
  return 5000;
};

function RearFacingSeats(car) {
  CarOptions.call(this, car); // Call parent constructor
}

RearFacingSeats.prototype = Object.create(CarOptions.prototype); // Inherit from CarOptions
RearFacingSeats.prototype.constructor = RearFacingSeats; // Reset constructor pointer

RearFacingSeats.prototype.getOptionDescription = function () {
  return "Rear Facing Seats";
};

RearFacingSeats.prototype.getOptionCost = function () {
  return 4000;
};

let myTesla = new ModelS(); // Create a ModelS object

myTesla = new RearFacingSeats(myTesla); // Assign a RearFacingSeats option to myTesla

console.log(myTesla.getDescription()); // Call through the chain
