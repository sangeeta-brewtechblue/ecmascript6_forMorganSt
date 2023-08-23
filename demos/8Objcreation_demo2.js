//different ways of creating objects in js

function Car(color,model,price){
    this.color=color;
    this.model=model;
    this.price = price;
    this.showDetails =function (){
        console.log(this.color+","+this.model+","+this.price);
    }
 }

 var x =10;
   y=15;
function carDetails(){
    console.log("in car details");
    console.log(this.color+","+this.model+","+this.price);
}

carDetails();




var c1 = new Car("blue","merc",5000000);
var c2 = new Car("grey","Honda city",1700000);
var c3 = new Car("silver","celerio",800000);
//console.log(c1.color);
c1.showDetails();
//c2.showDetails();
//c3.showDetails();
//carDetails.apply(c2);
//c2.carDetails();


var c4 = Object.create(c1);
//c4.showDetails();