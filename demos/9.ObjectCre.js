var emp1={empId:1,empName:"n1",
showEmp:function(){console.log("empDetails::"+this.empId +","+this.empName)}}

emp1.showEmp();

var emp2={empId:2,empName:"n2",
showEmp:function(){console.log("empDetails::"+this.empId +","+this.empName)}}
emp2.showEmp();

var ConEmp=function(){
    this.empId=101,
    this.empName="n1";
    this.showEmp=function(){console.log("empDetails::"+this.empId +","+this.empName)}
}

var e1= new ConEmp();
e1.showEmp()
var e2= new ConEmp();
e2.showEmp();

var Emp = function(id,name){
    this.empId=id,
    this.empName=name;
    this.showEmp=function(){console.log("empDetails::"+this.empId +","+this.empName)}
}

var e3= new Emp(103,"abc");
e3.showEmp()
var e4= new Emp(104,"xyz");
e4.showEmp();

var e5 = Object.create(e3);
e5.showEmp();