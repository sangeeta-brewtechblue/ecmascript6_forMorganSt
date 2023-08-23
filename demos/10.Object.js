var car1 = Object.create({model:"hondacity",color:"blue",
showCar:function(){console.log("car:"+this.model+","+this.color)}});

car1.showCar();

var car2 = Object.create(car1);
car2.showCar();
car2.model="bmw";
car2.showCar();
car1.showCar();
var car3 = Object.create(car1);
car3.color="red";
car3.showCar();