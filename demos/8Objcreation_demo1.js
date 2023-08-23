console.log("hello world")

var obj1 = {prop1:"abc",prop2:13,showObj1:function (){
    console.log("prop1"+this.prop1+"prop2"+this.prop2);
}};

obj1.showObj1();

function fun2 (){
    console.log("prop1"+this.prop1+"prop2"+this.prop2);
}
fun2();
fun2.call(obj1);
fun2.apply(obj1);