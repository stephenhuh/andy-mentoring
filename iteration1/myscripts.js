console.log("HELLLLLLLLOOOOOO VIeTNAm");

var add = function(x, y, func) {
  return func(x+y);
}

var mult = function(x) {
  return 2*x;
}

var dam_he_clicked = function() {
  alert("That was bold. We need bold.");
}

console.log(add(3,5,mult));


//Given MxN board, how many 2x1 dominos can fit in it?
var dominos = function(m,n) {
  var count = 0;
  if (m % 2 === 0) {
    if (n % 2 === 0) {
      count = m*n/2;
    } else {
      count = m*(n-1)/2 + m/2;
    }
  } else {
    if (n % 2 === 0) {
      count = n*(m-1)/2 + n/2;
    } else {
      count = (n-1)*(m-1)/2 + (m-1)/2 + (n-1)/2;
    }
  }
  return count;
}

//If at least 2 friends know solution, then solve it
var team = function(total, p, v, t) {
  var sum = 0;
  for (var i=0; i<total; i++) {
    if(arguments[1+3*i] === 1) {
      if(arguments[2+3*i] === 1) {
        sum++;
      } else {
        if (arguments[3+3*i] === 1) {
          sum++;
        }
      }
    } else if (arguments[2+3*i] === 1) {
      if( arguments[3+3*i] === 1) {
        sum++;
      }
    }
  }
  return sum;
}


//write string in increasing order. 3+2+1 ---> 1+2+3
var orderer = function(string) {
  var newstring = "";
  var one = 0;
  var two = 0;
  var three = 0;
  for (var i = 0; i < string.length; i += 2) {
    if (string[i] === "1") {
      one++;
    } else if (string[i] === "2") {
      two++;
    } else if (string[i] === "3") {
      three++;
    }
  }
    for (var j = 0; one > j; one--) {
      newstring = newstring.concat("1+");
    }
    for (var k = 0; two > k; two--) {
      newstring = newstring.concat("2+");
    }
    for (var l = 0; three >k; three--) {
      newstring = newstring.concat("3+");
    }
    //newstring[string.length-1] = '\0';
    var newstring = newstring.substring(0, newstring.length-1);
    return newstring;
}
