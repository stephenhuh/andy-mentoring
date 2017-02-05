// process.argv.forEach(function (val, index, array) {
//   console.log(index + ': ' + val);
// });
//Codeforces 1A
// var n = process.argv[2];
// var m = process.argv[3];
// var a = process.argv[4];
//
// var total = Math.ceil(n/a)*Math.ceil(m/a);
//
// console.log(total);


print(function(n,m,a) {
  return Math.ceil(n/a) * Math.ceil(m/a);
}.apply(null, readline().split(" ").map(Number)));

//Codeforces 4A

if ((process.argv[5] % 2) === 0) {
  console.log('YES');
} else {
  console.log('NO');
}

print(function(n) {
  for (var i = 0; i < n; i++) {
    if (str.length <= 10) {
      return str;
    } else {
      var num = str.length - 2;
      return str[0] + num.toString() + str[str.length];
    }
  }
}.apply(null, readline().split(" ").map(Number)));

//Codeforces 71A
var shrinker = function(n) {
  for (var i =0; i<n; i++) {
    if (arguments[i+1].length <= 10) {
      console.log(arguments[i+1]);
    } else {
      var num = arguments[i+1].length-2;
      console.log(arguments[i+1][0] + num.toString() + arguments[i+1][arguments[i+1].length-1]);
    }
  }
}

//command line version
for (var i = 0; i < process.argv[2]; i++) {
  if (process.argv[i+3].length <= 10) {
    console.log(process.argv[i+3]);
  } else {
    var len = process.argv[i+3].length - 2;
    console.log(process.argv[i+3][0] + len.toString() + process.argv[i+3][process.argv[i+3].length-1]);
  }
}
