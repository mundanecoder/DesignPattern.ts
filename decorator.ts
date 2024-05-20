abstract class Car {
  public description: string;
  public getDescription(): string {
    return this.description;
  }

  public abstract cost(): number;
}

class ModelS extends Car {
  public description = "Model S";

  public cost(): number {
    return 75000;
  }
}

class ModelX extends Car {
  public description = "Model X";

  public cost(): number {
    return 77000;
  }
}

abstract class Caroptions extends Car {
  decoratedCar: Car;
  public abstract getDescription(): string;

  public abstract cost(): number;
}

class EnhancedAutoPilot extends Caroptions {
  decoratedCar: Car;

  public getDescription(): string {
    return this.decoratedCar.getDescription() + ", Enhanced Autoilot";
  }

  public cost(): number {
    return this.decoratedCar.cost() + 5000;
  }
}

class RearFacingSeats extends Caroptions {
  decoratedCar: Car;

  public getDescription(): string {
    return this.decoratedCar.getDescription() + ", RearFacing seats";
  }

  public cost(): number {
    return this.decoratedCar.cost() + 4000;
  }
}
