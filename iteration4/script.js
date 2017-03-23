
var wow_he_clicked = function() {
  alert("That was bold. We need bold.");
}

var hit_that_xhr = function() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://ipinfo.io/json", false);
  xhr.send();
  var response = JSON.parse(xhr.responseText);
  alert("ur in " + response.city + " u dummy" );
  console.log(xhr.responseText);
}

var hit_that_jquery = function() {
  $.get("https://ipinfo.io/json", function(response) {
    alert(response.city);
    console.log(response);
  });
}

var getallfoods = function() {
  $.get("/foods", function(response) {
    // alert(JSON.parse(response));
		// alert(response);
    // console.log(JSON.parse(response).Snickers.calories);
		// console.log(response);
		// console.log(JSON.parse(response));
		// console.log(JSON.stringify(response, null, 4));
		document.getElementById("allfoods").innerHTML = response;
  });
}

var search = function() {
  $.get("/foods", function(response) {
    var is_xgrams = $('#mySearch').val();
    var MorL = $('#inequality').val();
    var x_macro = $('#macros').val();
    var is_cal;
    if (x_macro === "calories") {
      is_cal = " ";
    } else {
      is_cal = "g of ";
    }
    console.log(x_macro);
    console.log(MorL);
    var foodsobj = JSON.parse(response);
    console.log(foodsobj);
    var arr = [];
    for (var food in foodsobj) {
      if (foodsobj.hasOwnProperty(food)) {
//        console.log(food + ": " + foodsobj[food].protein);
        if (MorL === "more than") {
          if (foodsobj[food][x_macro] > is_xgrams) {
            arr.push(food);
          }
        } else {
          if (foodsobj[food][x_macro] < is_xgrams) {
            arr.push(food);
          }
        }
      }
    }
    console.log(arr[0] + arr[1] + arr[2])
    document.getElementById("proteincaption").innerHTML = "These foods have "+ MorL + " " + is_xgrams + is_cal + x_macro +":";
    document.getElementById("protein20").innerHTML = arr;
  });
}


function handle(e){
	address=document.getElementById("foodname").value;
    if(e.keyCode === 13){
      $.get("/foods", function(response) {
        var searchedname = $('#foodname').val();
        console.log(searchedname);
        var foodsobj = JSON.parse(response);
        var found = [];
        var foundfood;
        for (var food in foodsobj) {
          if (foodsobj.hasOwnProperty(food)) {
            if (food === searchedname) {
              foundfood = foodsobj[food];
              found.push(JSON.stringify(foodsobj[food]));
            }
          }
        }
        console.log(foundfood);
        console.log(found);
        console.log(found.calories);
        if (found.length === 0) {
          document.getElementById("searchednameresult").innerHTML = searchedname +" not found in database"
        } else {
          document.getElementById("searchednameresult").innerHTML = searchedname + " stats: " ;//+found;
          document.getElementById("searchedcalories").innerHTML = foundfood.calories;
          document.getElementById("searchedcarbs").innerHTML = foundfood.carbs +"g";
          document.getElementById("searchedfats").innerHTML = foundfood.fats+"g";
          document.getElementById("searchedproteins").innerHTML = foundfood.protein+"g";
          tablefunction(foundfood);
        }
      })
    }
	return false;
}

function tablefunction(foodobj){
  var jsonObj = $.parseJSON(JSON.stringify(foodobj));
  var html = '<table border="1">';
  $.each(jsonObj, function(key, value){
    html += '<tr>';
    html += '<td>' + key + '</td>';
    html += '<td>' + value + '</td>';
    html += '</tr>';
  });
  html += '</table>';
  document.getElementById("table1").innerHTML = html;
  //$('table').html(html);
};

var hit_usda_api = function(){
  $.get("http://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=DEMO_KEY&nutrients=205&nutrients=204&nutrients=208&nutrients=269", function(response) {
    //alert(response.report.foods);
    console.log(response);
    var foodnamearr = [];
    var foodlist = response.report.foods
    for (var i=0; i < foodlist.length; i++) {
      foodnamearr.push(foodlist[i].name);
    }
    console.log(foodnamearr);
    console.log(response.report.foods[0].nutrients[0].value);
    document.getElementById("usdafoods").innerHTML = foodnamearr;
  });
}

var getxproteins = function() {
  $.get("/foods", function(response) {
    var is_xgrams;
  })
}
