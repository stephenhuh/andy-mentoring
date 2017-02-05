

var dam_he_clicked = function() {
  alert("That was bold. We need bold.");
}

var hit_dat_xhr = function() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://ipinfo.io/json", false);
  xhr.send();
  var response = JSON.parse(xhr.responseText);
  alert("ur in " + response.city + " u dummy" );
  console.log(xhr.responseText);
}

var hit_dat_jquery = function() {
  $.get("https://ipinfo.io/json", function(response) {
    alert(response.city);
    console.log(response);
  });
}

 // var hit_dat_jquery2 = function() {
 //   $(document).ready(function() {
 //    $.get('https://ipinfo.io/json', function(data) {
 //        $("#data").text(data);
 //        alert(data.city);
 //    });
 //  });
 // }

//Feedback/Questions
//how can i use the object retrieved? Once the button clicks and calls the function,
//I can't access "response" the object since it was defined inside the func. is it only
//available inside the body of the func where I did get?
//This iteration wasn't too bad either. The readings were better/helpful as well.
//The project component is pretty fun since I can experiment with the code to see
//what changes, but I'm not sure if I'm going about it the right way/ I just use google
//to see what I need to do and it's almost like copy paste. I like the Codeforces
//problems, it's good to practice these for interviews.
