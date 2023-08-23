 // js comments in vs code ctrl+/  .. toggle
//demo 1: print the length of each element

// let elements = ['Hydrogen',
// 'Helium',
// 'Lithium',
// 'Beryllium'];

// console.log("Length of each element:"+elements.map((ele)=>ele.length));


//demo 2: Print sum of square of even numbers

// var myArray = [1,2,3,4];
// var x = myArray.filter((val)=>(val % 2 )== 0).map((val)=>val*val).
// reduce((previousValue,currentValue)=>previousValue+currentValue);
// console.log(x);




//Demo 3 this context demo:
  //problem :this of inner function
/*function Person(){

    this.age=0;

    setInterval(function growUp(){
              this.age++;
              console.log(this.age);
    },1000)
}

var p1 = new Person();*/

//Demo2 -a using that

/*function Person(){

    this.age=0;
   var that=this;
    setInterval(function growUp(){
             // that.age++;
             console.log(that.age++);
    },1000)
}

var p1 = new Person();*/

//b. using arrow function
function Person(){

    this.age=0;
    
    setInterval(()=>{
            this.age++;
              console.log(this.age);
    },1000)
}
let p1 = new Person();





//Demo 2 -b Using Arrow functions
/*function Person(){

    this.age=0;
  
    setInterval(()=>{
             // that.age++;
             console.log(this.age++);
    },1000)
}









var p1 = new Person(); */

//Demo 2 -c Using bind functions
// function Person(){

//     this.age=0;
  
// }

// var p1 = new Person();
// growUp=function(){
//   // this.age=0;
//     this.age++;
//      console.log(  this.age);
// }

// //p1.growUp();    throws error

//  setInterval(growUp.bind(p1),1000);

