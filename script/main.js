import java.util.regex.*;


var products = 0;
var finalPrice = 100.0;


function addToCart() {

    products++;

}

function updateCart() {


finalPrice += products*5;
document.getElementById("totalPrice").innerHTML+=( "Total  <strong> $"  + finalPrice);

}

function loggedIn() {

    document.getElementById("userIsHere").display = 1;

}

function validateForm() {
  var x = document.forms["myForm"]["text"].value;
  var y = document.forms["myForm"]["password"].value;
  if (x == "") {
    alert("You must enter a username");
    return false;
  }
  else if (x != "admin"){

      alert("Wrong username");
      return false;
  }
  if (y == "") {
    alert("You must enter a password");
    return false;
  }
  else if (y != "admin"){

      alert("Wrong password");
      return false;
  }
}

function insRow(id) {
  var x = document.getElementById(id).insertRow(0);
  var y = x.insertCell(0);
  var z = x.insertCell(1);
  y.innerHTML = z.innerHTML = "New";
}

function welcomeFunction() {
  alert("Welcome to EZ Laundry !");
}

obj = { table: "customers", limit: 20 };
dbParam = JSON.stringify(obj);
xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    myObj = JSON.parse(this.responseText);
    txt += "<table border='1'>"
    for (x in myObj) {
      txt += "<tr><td>" + myObj[x].name + "</td></tr>";
    }
    txt += "</table>"
    document.getElementById("demo").innerHTML = txt;
  }
}
xmlhttp.open("POST", "json_demo_db_post.php", true);
xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xmlhttp.send("x=" + dbParam);