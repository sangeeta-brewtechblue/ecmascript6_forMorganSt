class Rectangle{

  constructor(height,width){

    this.height=height;
    this.width=width;
  }

  calculateArea(){
      console.log("Area of rectangle:"+(this.height * this.width));
  }
}

var square = new Rectangle(10,10);
square.calculateArea();