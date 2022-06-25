
var quotes = ["Aziz","Said" ,"Asad" ,"Umar" ,"Aziz1","Said1" ,"Asad1" ,"Umar1" ,"Aziz2","Said2" ,"Asad2" ,"Umar2"];

function genQuote() {
  var randNum = Math.floor(Math.random() * quotes.length);
  document.getElementById('quote').innerHTML = quotes[randNum];
}