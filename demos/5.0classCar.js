class Car{

   constructor(make,model){
     this.make = make;
     this.model = model;
     this.speed = 0;
   }

   accelrate(){
    this.speed++;
   }

  
}

var car = new Car("BMW","5 series");

car.accelrate();

console.log(car.speed);
