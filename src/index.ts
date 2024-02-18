import { Vehicle } from './vehicle';
import { Car } from './car';
import { Motorcycle } from './motorcycle';

let myCar = new Car(4, 'Hyundai', 'Sports');
let myMotorcycle = new Motorcycle(2, "BMW", true, 'Cruiser');

myCar.getInfo();
myCar.getType('Ronald');
myCar.getWheels();
myMotorcycle.getInfo();
myMotorcycle.getWheels();
myMotorcycle.isItSafe();

