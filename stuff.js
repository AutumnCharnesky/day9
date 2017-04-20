function newNum(i) {

  return function() {
    console.log(i++);
  };
}

var newNum1=newNum(6);
var newNum2=newNum(0);

newNum1();
newNum1();
newNum1();
newNum1();
newNum1();

newNum2();
newNum2();
newNum2();
newNum2();
newNum2();


function newNum(startNum) {

  var x = startNum;

  return function() {
    console.log(x++);
  };
}

var newNum1=newNum(665);
var newNum2=newNum(0);

newNum1();
newNum1();
newNum1();
newNum1();
newNum1();

newNum2();
newNum2();
newNum2();
newNum2();
newNum2();
