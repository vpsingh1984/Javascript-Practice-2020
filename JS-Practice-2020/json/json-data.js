var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    console.log(myObj);
  }
};

xmlhttp.open("GET", "https://www.w3schools.com/js/json_demo.txt", true);
xmlhttp.send();

