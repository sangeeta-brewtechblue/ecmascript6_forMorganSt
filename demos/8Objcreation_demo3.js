
var cat = {
    name:"kitty",
    color:"brown",
    age:4,
    printInfo: function(){
        console.log("in outer fun");
    
        var that =this;
        nestedFunction = function(){

            console.log("in nested fun"+cat.name+that.color);
        }
        nestedFunction1 = function(){

            console.log("in nested fun1"+that.age);
        }

        nestedFunction1();
    }
}

cat.printInfo();