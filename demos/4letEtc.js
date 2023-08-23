var messages = ["Meow!", "I'm a talking cat!", "Callbacks are fun!"];

var cat = {
      colour:"grey",
      say: function (quip) {
       console.log(quip);
    }
  };

  //problem with var
// for (var i = 0; i < messages.length; i++) {
//    // cat.say(messages[i]);
//    /* when settimout used,first value of i gets to 3 and then callbacks are called so undefined
//    when the first timeout fires, and calls cat.say(messages[i]), it’s using messages[3]. Which of course is undefined.*/
//    setTimeout(function () {
    
//     cat.say(messages[i]);
//   }, i * 1500);
// }


//solution one :
/*messages.forEach(function(msg,i){setTimeout(function(){cat.say(msg)},i*1500)});*/
//solution 2  use of let
/*
for(let x=0;x<messages.length;x++){
    setTimeout(function(){cat.say(messages[x]);},x*1500);
     }*/
     
     
   
     
     
console.log('complete')
